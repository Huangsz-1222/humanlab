import { useLang, UI } from '../i18n.jsx';
import { CATALOG, CATEGORIES } from '../data/models.js';
import { getContent } from '../data/content.js';

function itemInfo(item) {
  if (item.kind === 'body') return getContent(item.mode);
  return getContent(item.organId);
}

export default function Sidebar({ selection, isActive, onSelect }) {
  const { t } = useLang();

  return (
    <aside className="sidebar">
      {CATEGORIES.map((cat) => (
        <div className="sidebar-section" key={cat.id}>
          <div className="sidebar-header">
            <span className="dot" />
            {t(cat.label)}
          </div>
          <ul className="cell-list">
            {CATALOG.filter((i) => i.category === cat.id).map((item) => {
              const info = itemInfo(item);
              const active = isActive(item);
              return (
                <li key={item.id}>
                  <button
                    className={`cell-item ${active ? 'active' : ''}`}
                    onClick={() => onSelect(item)}
                  >
                    <span className="cell-name">
                      {t(info.name)}
                      {item.brainView === 'sagittal' && ` · ${t({ en: 'Sagittal', zh: '矢狀' })}`}
                      {item.brainView === 'coronal' && ` · ${t({ en: 'Coronal', zh: '冠狀' })}`}
                      {item.smallIntestineView === 'mucosa' && ` · ${t({ en: 'Mucosa & Villi', zh: '黏膜與絨毛' })}`}
                      {item.smallIntestineView === 'wall' && ` · ${t({ en: 'Wall', zh: '管壁' })}`}
                    </span>
                    <span className="cell-sub">
                      {item.brainView === 'sagittal' && t({ en: 'Side cross-section', zh: '側面剖面' })}
                      {item.brainView === 'coronal' && t({ en: 'Front cross-section', zh: '正面剖面' })}
                      {item.smallIntestineView === 'mucosa' && t({ en: 'Inner lining & villi', zh: '內襯與絨毛' })}
                      {item.smallIntestineView === 'wall' && t({ en: 'Intestinal wall', zh: '腸壁結構' })}
                      {!item.brainView && !item.smallIntestineView && t(info.sub)}
                    </span>
                    <span className="cell-status">
                      <span className="status-chip ok">{t(UI.metaReady)}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
