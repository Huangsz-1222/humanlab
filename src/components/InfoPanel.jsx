import { useLang, UI } from '../i18n.jsx';

export default function InfoPanel({ content }) {
  const { t } = useLang();

  return (
    <aside className="info-panel">
      <div className="info-card hero-card">
        <span className="card-eyebrow">{t(UI.sectionFocus)}</span>
        <h2>{t(content.name)}</h2>
        <div className="info-tagline">{t(content.tagline)}</div>
        <dl className="info-grid">
          {content.meta.map((m, i) => (
            <div key={i}>
              <dt>{t(m.label)}</dt>
              <dd>{t(m.value)}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="info-card">
        <span className="card-eyebrow">{t(UI.concept)}</span>
        <p className="info-description">{t(content.concept)}</p>
      </div>

      <div className="info-card">
        <span className="card-eyebrow">{t(UI.keyStructures)}</span>
        <ul className="feature-list">
          {content.structures.map((s, i) => (
            <li key={i}>
              <span className="feature-dot" />
              <div>
                <div className="feature-name">{t(s.name)}</div>
                <div className="feature-detail">{t(s.detail)}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="info-card fun-card">
        <span className="card-eyebrow">{t(UI.funFact)}</span>
        <p className="fun-text">{t(content.funFact)}</p>
      </div>
    </aside>
  );
}
