import { createContext, useContext, useState, useEffect } from 'react';

const LangContext = createContext({ lang: 'en', setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  const t = (obj) => (ctx.lang === 'en' ? obj.en : obj.zh);
  return { lang: ctx.lang, setLang: ctx.setLang, t };
}

// 通用 UI 字串
export const UI = {
  autoRotate: { en: 'Auto-rotate', zh: '自動旋轉' },
  resetView: { en: 'Reset view', zh: '復位視角' },
  manualRotate: { en: 'Drag to rotate', zh: '手動旋轉' },
  dragTip: { en: 'Drag to rotate · Scroll to zoom', zh: '拖曳旋轉 · 滾輪縮放' },
  backToBody: { en: 'Back to body', zh: '回到人體' },
  modelMissing: { en: 'Model not imported yet', zh: '模型尚未匯入' },
  loading: { en: 'Loading model…', zh: '載入模型中…' },
  sectionFocus: { en: 'Section Focus', zh: '本節焦點' },
  concept: { en: 'Concept', zh: '概念解讀' },
  keyStructures: { en: 'Key Structures', zh: '關鍵結構' },
  funFact: { en: 'Fun Fact', zh: '趣味知識' },
  displayMode: { en: 'Display', zh: '顯示型態' },
  modeSurface: { en: 'Surface', zh: '表面' },
  modeSkeleton: { en: 'Skeleton', zh: '骨骼' },
  modeSkeletonMuscles: { en: 'Skeleton + Muscles', zh: '骨骼＋肌肉' },
  brainView: { en: 'Section', zh: '切面' },
  viewSagittal: { en: 'Sagittal', zh: '矢狀' },
  viewCoronal: { en: 'Coronal', zh: '冠狀' },
  smallIntestineView: { en: 'View', zh: '檢視' },
  viewMucosa: { en: 'Mucosa & Villi', zh: '黏膜與絨毛' },
  viewWall: { en: 'Wall', zh: '管壁' },
  sideView: { en: 'Side', zh: '左右' },
  viewLeft: { en: 'Left', zh: '左' },
  viewRight: { en: 'Right', zh: '右' },
  tagline: { en: 'Explore the human body', zh: '探索人體構造之美' },
  pen: { en: 'the beauty within', zh: '探索人體奧秘' },
  metaReady: { en: 'Interactive', zh: '可互動' },
  metaLoading: { en: 'Loading', zh: '載入中' },
  metaPending: { en: 'Pending', zh: '待載入' },
};
