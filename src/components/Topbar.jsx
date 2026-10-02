import { useLang, UI } from '../i18n.jsx';
import { CATALOG } from '../data/models.js';
import { InfoIcon } from './Icons.jsx';

export default function Topbar({ onAbout }) {
  const { lang, setLang, t } = useLang();
  const count = CATALOG.length;
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">
          <img src="logo.png" alt="HUMANLAB" className="brand-logo" />
        </div>
        <div>
          <h1 className="brand-title">HUMANLAB</h1>
          <div className="brand-tagline">
            <span>{t(UI.tagline)}</span>
            <span className="brand-sep">·</span>
            <span className="brand-pen">{t(UI.pen)}</span>
          </div>
        </div>
      </div>
      <div className="topbar-meta">
        <span className="meta-pill">{t({ en: '3D Interactive', zh: '3D 互動' })}</span>
        <span className="meta-pill">
          {lang === 'en' ? `${count} Models` : `${count} 個模型`}
        </span>
        <span className="meta-pill version-pill" title="Build version">
          v {__APP_VERSION__}
        </span>
        <button className="meta-pill about-btn" onClick={onAbout}>
          <InfoIcon />
          {t({ en: 'About', zh: '關於' })}
        </button>
        <div className="lang-toggle">
          <button className={lang === 'zh' ? 'active' : ''} onClick={() => setLang('zh')}>
            中文
          </button>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
