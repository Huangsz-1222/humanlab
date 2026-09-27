import { useLang } from '../i18n.jsx';

export default function AboutModal({ onClose }) {
  const { t } = useLang();

  const steps = [
    { en: 'Drag to rotate the model, scroll to zoom in and out.', zh: '拖曳旋轉模型，滾輪可以縮放。' },
    { en: 'Pick a part from the left list, or click a hotspot on the body to jump straight to an organ.', zh: '從左側列表挑選部位，或在人體上點擊熱點直接跳到器官。' },
    { en: 'Use the buttons in the top-right to switch display modes and cross-sections.', zh: '用右上角的按鈕切換顯示型態與剖面。' },
    { en: 'Use the bottom toolbar to auto-rotate or reset the view.', zh: '用底部工具列開啟自動旋轉或復位視角。' },
    { en: 'Switch between English and Chinese anytime in the top-right corner.', zh: '右上角可隨時切換中英文。' },
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label={t({ en: 'Close', zh: '關閉' })}>
          ×
        </button>

        <h2 className="modal-title">HUMANLAB</h2>
        <div className="modal-tagline">{t({ en: 'Explore the beauty of the human body', zh: '探索人體構造之美' })}</div>

        <div className="modal-section">
          <h3 className="modal-heading">{t({ en: 'How to Use', zh: '使用說明' })}</h3>
          <ol className="modal-steps">
            {steps.map((s, i) => (
              <li key={i}>{t(s)}</li>
            ))}
          </ol>
        </div>

        <div className="modal-section">
          <h3 className="modal-heading">{t({ en: 'About', zh: '關於' })}</h3>
          <p className="modal-text">
            {t({
              en: 'HUMANLAB is an interactive workshop for exploring human anatomy through custom 3D models built in Blender. Navigate the body, inspect its organs and systems, and learn how they work — one structure at a time.',
              zh: 'HUMANLAB 是一座人體解剖互動工坊，透過 Blender 自製的 3D 模型探索人體構造。漫遊全身、檢視器官與系統，一次一個結構，了解它們如何運作。',
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
