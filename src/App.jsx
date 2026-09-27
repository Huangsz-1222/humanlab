import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLang } from './i18n.jsx';
import { BODY_GLB, ORGAN_GLB } from './data/models.js';
import { getContent } from './data/content.js';
import Topbar from './components/Topbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Stage from './components/Stage.jsx';
import InfoPanel from './components/InfoPanel.jsx';
import SplashScreen from './components/SplashScreen.jsx';
import AboutModal from './components/AboutModal.jsx';
import { preloadBodyModels, preloadOrganModels } from './viewer/modelLoader.js';

function resolveSelectionGlb(selection) {
  if (selection.kind === 'body') return BODY_GLB[selection.mode];
  if (selection.organId === 'brain') return ORGAN_GLB.brain[selection.brainView];
  if (selection.organId === 'small_intestine') return ORGAN_GLB.small_intestine[selection.smallIntestineView];
  return ORGAN_GLB[selection.organId];
}

export default function App() {
  const { t } = useLang();
  const [selection, setSelection] = useState({
    kind: 'body',
    mode: 'surface',
    organId: null,
    brainView: 'sagittal',
    smallIntestineView: 'mucosa',
  });
  const [hasEntered, setHasEntered] = useState(
    () => sessionStorage.getItem('humanlab_entered') === '1'
  );
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    preloadBodyModels().then(() => preloadOrganModels());
  }, []);

  const handleEnter = useCallback(() => {
    sessionStorage.setItem('humanlab_entered', '1');
    setHasEntered(true);
  }, []);

  const selectItem = useCallback((item) => {
    if (item.kind === 'body') {
      setSelection({ kind: 'body', mode: item.mode, organId: null, brainView: 'sagittal', smallIntestineView: 'mucosa' });
    } else {
      setSelection({
        kind: 'organ',
        mode: 'surface',
        organId: item.organId,
        brainView: item.brainView || 'sagittal',
        smallIntestineView: item.smallIntestineView || 'mucosa',
      });
    }
  }, []);

  const selectDisplayMode = useCallback((mode) => {
    setSelection({ kind: 'body', mode, organId: null, brainView: 'sagittal', smallIntestineView: 'mucosa' });
  }, []);

  const selectBrainView = useCallback((brainView) => {
    setSelection({ kind: 'organ', mode: 'surface', organId: 'brain', brainView, smallIntestineView: 'mucosa' });
  }, []);

  const selectSmallIntestineView = useCallback((smallIntestineView) => {
    setSelection({ kind: 'organ', mode: 'surface', organId: 'small_intestine', brainView: 'sagittal', smallIntestineView });
  }, []);

  const backToBody = useCallback(() => {
    setSelection({ kind: 'body', mode: 'surface', organId: null, brainView: 'sagittal', smallIntestineView: 'mucosa' });
  }, []);

  const selectHotspot = useCallback((organId, azimuth) => {
    if (organId === 'brain') {
      const a = ((Math.abs(azimuth) % Math.PI) / Math.PI) * 180;
      const frontish = a <= 45 || a >= 135;
      setSelection({
        kind: 'organ',
        mode: 'surface',
        organId: 'brain',
        brainView: frontish ? 'sagittal' : 'coronal',
        smallIntestineView: 'mucosa',
      });
    } else {
      setSelection({ kind: 'organ', mode: 'surface', organId, brainView: 'sagittal', smallIntestineView: 'mucosa' });
    }
  }, []);

  const isActive = useCallback(
    (item) => {
      if (item.kind === 'body') return selection.kind === 'body' && selection.mode === item.mode;
      if (selection.kind !== 'organ') return false;
      if (selection.organId !== item.organId) return false;
      if (item.organId === 'brain') return selection.brainView === item.brainView;
      if (item.organId === 'small_intestine') return selection.smallIntestineView === item.smallIntestineView;
      return true;
    },
    [selection]
  );

  const contentId = selection.kind === 'body' ? selection.mode : selection.organId;
  const content = getContent(contentId);
  const glb = resolveSelectionGlb(selection);
  const isBody = selection.kind === 'body';
  const showHotspots = selection.kind === 'body' && selection.mode === 'surface';

  const stageHeading = useMemo(() => {
    if (selection.kind === 'body') {
      return { label: t(content.name), sub: t(content.tagline) };
    }
    return { label: t(content.name), sub: t(content.sub) };
  }, [selection, content, t]);

  return (
    <>
      <SplashScreen entered={hasEntered} onEnter={handleEnter} />
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
      <div className="app-shell">
        <Topbar onAbout={() => setShowAbout(true)} />

        <main className="layout">
          <Sidebar selection={selection} isActive={isActive} onSelect={selectItem} />

          <Stage
            selection={selection}
            glb={glb}
            isBody={isBody}
            showHotspots={showHotspots}
            heading={stageHeading}
            onSelectHotspot={selectHotspot}
            onDisplayMode={selectDisplayMode}
            onBrainView={selectBrainView}
            onSmallIntestineView={selectSmallIntestineView}
            onBack={backToBody}
          />

          <InfoPanel content={content} />
        </main>

        <footer className="footer">
          HUMANLAB · {t({ en: 'Human Anatomy Interactive Workshop', zh: '人體解剖互動工坊' })}
        </footer>
      </div>
    </>
  );
}
