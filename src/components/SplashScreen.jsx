import { useLang } from '../i18n.jsx';

export default function SplashScreen({ entered, onEnter }) {
  const { t } = useLang();

  return (
    <div
      className={`splash ${entered ? 'splash-hidden' : ''}`}
      onClick={onEnter}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onEnter();
      }}
    >
      <div className="splash-inner">
        <div className="splash-mark">
          <img src="logo.png" alt="HUMANLAB" className="splash-logo" />
        </div>
        <h1 className="splash-title">HUMANLAB</h1>
        <div className="splash-subtitle">
          {t({ en: 'Explore the beauty of the human body', zh: '探索人體構造之美 · 探索人體奧秘' })}
        </div>
        <p className="splash-intro">
          {t({
            en: 'Welcome to the Human Anatomy Interactive Workshop. Explore the organs and systems of the human body through interactive 3D models.',
            zh: '歡迎來到人體解剖互動工坊，透過 3D 模型深入探索人體各項器官與系統運作。',
          })}
        </p>
        <button
          className="splash-cta"
          onClick={(e) => {
            e.stopPropagation();
            onEnter();
          }}
        >
          {t({ en: 'Start Exploring', zh: '開始探索' })}
        </button>
        <div className="splash-hint">
          {t({ en: 'Click anywhere to enter', zh: '點擊任意處進入' })}
        </div>
      </div>
    </div>
  );
}
