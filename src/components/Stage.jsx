import { useState } from 'react';
import { useLang, UI } from '../i18n.jsx';
import { DISPLAY_MODES, BRAIN_VIEWS, SMALL_INTESTINE_VIEWS } from '../data/models.js';
import Viewer from '../viewer/Viewer.jsx';
import { RotateIcon, ResetIcon, SpinnerIcon } from './Icons.jsx';

const MODE_LABELS = {
  surface: UI.modeSurface,
  skeleton: UI.modeSkeleton,
  skeleton_muscles: UI.modeSkeletonMuscles,
};

const BRAIN_VIEW_LABELS = {
  sagittal: UI.viewSagittal,
  coronal: UI.viewCoronal,
};

const SMALL_INTESTINE_VIEW_LABELS = {
  mucosa: UI.viewMucosa,
  wall: UI.viewWall,
};

export default function Stage({
  selection,
  glb,
  isBody,
  fallbackColor,
  heading,
  onSelectHotspot,
  onDisplayMode,
  onBrainView,
  onSmallIntestineView,
  onBack,
}) {
  const { t } = useLang();
  const [autoRotate, setAutoRotate] = useState(false);
  const [resetSignal, setResetSignal] = useState(0);
  const [loadStatus, setLoadStatus] = useState({ status: 'loading', progress: 0 });

  const isOrgan = selection.kind === 'organ';

  return (
    <section className="stage">
      <div className="viewer">
        <Viewer
          glb={glb}
          isBody={isBody}
          fallbackColor={fallbackColor}
          autoRotate={autoRotate}
          resetSignal={resetSignal}
          onSelectHotspot={onSelectHotspot}
          onStatus={setLoadStatus}
        />
      </div>

      <div className="overlay-heading">
        <h1 className="overlay-title">{heading.label}</h1>
        <div className="overlay-sub">{heading.sub}</div>
      </div>

      {!isOrgan && (
        <div className="display-switch">
          <span className="switch-label">{t(UI.displayMode)}</span>
          <div className="switch-group">
            {DISPLAY_MODES.map((m) => (
              <button
                key={m.id}
                className={`switch-btn ${selection.mode === m.id ? 'active' : ''}`}
                onClick={() => onDisplayMode(m.id)}
              >
                {t(MODE_LABELS[m.id])}
              </button>
            ))}
          </div>
        </div>
      )}

      {selection.organId === 'brain' && (
        <div className="display-switch">
          <span className="switch-label">{t(UI.brainView)}</span>
          <div className="switch-group">
            {BRAIN_VIEWS.map((v) => (
              <button
                key={v.id}
                className={`switch-btn ${selection.brainView === v.id ? 'active' : ''}`}
                onClick={() => onBrainView(v.id)}
              >
                {t(BRAIN_VIEW_LABELS[v.id])}
              </button>
            ))}
          </div>
        </div>
      )}

      {selection.organId === 'small_intestine' && (
        <div className="display-switch">
          <span className="switch-label">{t(UI.smallIntestineView)}</span>
          <div className="switch-group">
            {SMALL_INTESTINE_VIEWS.map((v) => (
              <button
                key={v.id}
                className={`switch-btn ${selection.smallIntestineView === v.id ? 'active' : ''}`}
                onClick={() => onSmallIntestineView(v.id)}
              >
                {t(SMALL_INTESTINE_VIEW_LABELS[v.id])}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="overlay-tip">{t(UI.dragTip)}</p>

      <div className="overlay-toolbar">
        {isOrgan && (
          <button className="tool-btn" onClick={onBack}>
            ← {t(UI.backToBody)}
          </button>
        )}
        <button
          className={`tool-btn ${autoRotate ? 'active' : ''}`}
          onClick={() => setAutoRotate((v) => !v)}
        >
          <RotateIcon />
          {t(UI.autoRotate)}
        </button>
        <button className="tool-btn" onClick={() => setResetSignal((s) => s + 1)}>
          <ResetIcon />
          {t(UI.resetView)}
        </button>
      </div>

      {loadStatus.status === 'loading' && (
        <div className="progress-overlay">
          <div className="progress-card">
            <div className="progress-spinner">
              <SpinnerIcon />
            </div>
            <div className="progress-headline">{t(UI.loading)}</div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${Math.round(loadStatus.progress * 100)}%` }}
              />
            </div>
            <div className="progress-status">
              <span>{t(UI.loading)}</span>
              <span className="progress-percent">{Math.round(loadStatus.progress * 100)}%</span>
            </div>
          </div>
        </div>
      )}

      {loadStatus.status === 'missing' && (
        <div className="overlay-missing">
          <span className="meta-pill">{t(UI.modelMissing)}</span>
        </div>
      )}
    </section>
  );
}
