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
    brainSide: 'left',
    smallIntestineView: 'mucosa',
    kidneySide: 'left',
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
      setSelection({ kind: 'body', mode: item.mode, organId: null, brainView: 'sagittal', brainSide: 'left', smallIntestineView: 'mucosa', kidneySide: 'left' });
    } else {
      setSelection({
        kind: 'organ',
        mode: 'surface',
        organId: item.organId,
        brainView: item.brainView || 'sagittal',
        brainSide: 'left',
        smallIntestineView: item.smallIntestineView || 'mucosa',
        kidneySide: item.kidneySide || 'left',
      });
    }
  }, []);

  const selectDisplayMode = useCallback((mode) => {
    setSelection({ kind: 'body', mode, organId: null, brainView: 'sagittal', brainSide: 'left', smallIntestineView: 'mucosa', kidneySide: 'left' });
  }, []);

  const selectBrainView = useCallback((brainView) => {
    setSelection({ kind: 'organ', mode: 'surface', organId: 'brain', brainView, brainSide: 'left', smallIntestineView: 'mucosa', kidneySide: 'left' });
  }, []);

  const selectBrainSide = useCallback((brainSide) => {
    setSelection({ kind: 'organ', mode: 'surface', organId: 'brain', brainView: 'sagittal', brainSide, smallIntestineView: 'mucosa', kidneySide: 'left' });
  }, []);

  const selectSmallIntestineView = useCallback((smallIntestineView) => {
    setSelection({ kind: 'organ', mode: 'surface', organId: 'small_intestine', brainView: 'sagittal', brainSide: 'left', smallIntestineView, kidneySide: 'left' });
  }, []);

  const selectKidneySide = useCallback((kidneySide) => {
    setSelection({ kind: 'organ', mode: 'surface', organId: 'kidney', brainView: 'sagittal', brainSide: 'left', smallIntestineView: 'mucosa', kidneySide });
  }, []);

  const backToBody = useCallback(() => {
    setSelection({ kind: 'body', mode: 'surface', organId: null, brainView: 'sagittal', brainSide: 'left', smallIntestineView: 'mucosa', kidneySide: 'left' });
  }, []);

  const selectHotspot = useCallback((organId, azimuth, kidneySide) => {
    if (organId === 'brain') {
      const absDeg = ((Math.abs(azimuth) % Math.PI) / Math.PI) * 180;
      const frontish = absDeg <= 45 || absDeg >= 135;
      const brainSide = !frontish && azimuth > 0 ? 'left' : 'right';
      setSelection({
        kind: 'organ',
        mode: 'surface',
        organId: 'brain',
        brainView: frontish ? 'coronal' : 'sagittal',
        brainSide,
        smallIntestineView: 'mucosa',
        kidneySide: 'left',
      });
    } else {
      setSelection({ kind: 'organ', mode: 'surface', organId, brainView: 'sagittal', brainSide: 'left', smallIntestineView: 'mucosa', kidneySide: kidneySide || 'left' });
    }
  }, []);

  const isActive = useCallback(
    (item) => {
      if (item.kind === 'body') return selection.kind === 'body' && selection.mode === item.mode;
      if (selection.kind !== 'organ') return false;
      if (selection.organId !== item.organId) return false;
      if (item.organId === 'brain') return selection.brainView === item.brainView;
      if (item.organId === 'small_intestine') return selection.smallIntestineView === item.smallIntestineView;
      if (item.organId === 'kidney') return selection.kidneySide === item.kidneySide;
      return true;
    },
    [selection]
  );

  const contentId = selection.kind === 'body' ? selection.mode : selection.organId;
  const content = getContent(contentId);
  const glb = resolveSelectionGlb(selection);
  const isBody = selection.kind === 'body';
  const showHotspots = selection.kind === 'body' && selection.mode === 'surface';
  const mirrored =
    (selection.kind === 'organ' && selection.organId === 'kidney' && selection.kidneySide === 'right') ||
    (selection.kind === 'organ' && selection.organId === 'brain' && selection.brainView === 'sagittal' && selection.brainSide === 'right');

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
            mirrored={mirrored}
            heading={stageHeading}
            onSelectHotspot={selectHotspot}
            onDisplayMode={selectDisplayMode}
            onBrainView={selectBrainView}
            onBrainSide={selectBrainSide}
            onSmallIntestineView={selectSmallIntestineView}
            onKidneySide={selectKidneySide}
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
