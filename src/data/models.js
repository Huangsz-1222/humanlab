// 模型清單與檔名對照表
// 所有 .glb 檔都放在 public/models/ 底下

export const BODY_GLB = {
  surface: 'models/body_surface.glb',
  skeleton: 'models/body_skeleton.glb',
  skeleton_muscles: 'models/body_skeleton_muscles.glb',
};

export const ORGAN_GLB = {
  heart: 'models/heart.glb',
  lung: 'models/lung.glb',
  stomach: 'models/stomach.glb',
  neck: 'models/neck.glb',
  small_intestine: {
    mucosa: 'models/small_intestine_mucosa.glb',
    wall: 'models/small_intestine_wall.glb',
  },
  brain: {
    sagittal: 'models/brain_sagittal.glb',
    coronal: 'models/brain_coronal.glb',
  },
};

// 顯示型態（主畫面切換按鈕）
export const DISPLAY_MODES = [
  { id: 'surface' },
  { id: 'skeleton' },
  { id: 'skeleton_muscles' },
];

// 腦部切面（腦部檢視切換按鈕）
export const BRAIN_VIEWS = [{ id: 'sagittal' }, { id: 'coronal' }];

// 小腸檢視（黏膜與絨毛／管壁）
export const SMALL_INTESTINE_VIEWS = [{ id: 'mucosa' }, { id: 'wall' }];

// 主畫面人體上的熱點（對應 Blender 裡的 hotspot_* 標記）
// position 是「占位模型」時使用的近似位置（人體本地座標，Y 軸向上）
export const HOTSPOTS = [
  { id: 'heart', node: 'hotspot_heart', organId: 'heart', label: { en: 'Heart', zh: '心臟' }, position: [0.06, 0.3, 0.28] },
  { id: 'lung_left', node: 'hotspot_lung_left', organId: 'lung', label: { en: 'Lungs', zh: '肺部' }, position: [-0.12, 0.34, 0.24] },
  { id: 'lung_right', node: 'hotspot_lung_right', organId: 'lung', label: { en: 'Lungs', zh: '肺部' }, position: [0.12, 0.34, 0.24] },
  { id: 'stomach', node: 'hotspot_stomach', organId: 'stomach', label: { en: 'Stomach', zh: '胃部' }, position: [-0.02, 0.05, 0.27] },
  { id: 'brain', node: 'hotspot_brain', organId: 'brain', label: { en: 'Brain', zh: '腦部' }, position: [0, 0.66, 0.16] },
  { id: 'neck', node: 'hotspot_neck', organId: 'neck', label: { en: 'Neck', zh: '頸部' }, position: [0, 0.52, 0.2] },
  { id: 'small_intestine', node: 'hotspot_small_intestine', organId: 'small_intestine', label: { en: 'Small Intestine', zh: '小腸' }, position: [0, -0.18, 0.25] },
];

// 左側列表分類與項目（順序即顯示順序）
export const CATEGORIES = [
  { id: 'body', label: { en: 'Human Body', zh: '人體' } },
  { id: 'organs', label: { en: 'Organs', zh: '器官' } },
];

export const CATALOG = [
  { id: 'surface', category: 'body', kind: 'body', mode: 'surface' },
  { id: 'skeleton', category: 'body', kind: 'body', mode: 'skeleton' },
  { id: 'skeleton_muscles', category: 'body', kind: 'body', mode: 'skeleton_muscles' },
  { id: 'neck', category: 'body', kind: 'organ', organId: 'neck' },
  { id: 'heart', category: 'organs', kind: 'organ', organId: 'heart' },
  { id: 'lung', category: 'organs', kind: 'organ', organId: 'lung' },
  { id: 'stomach', category: 'organs', kind: 'organ', organId: 'stomach' },
  { id: 'brain_sagittal', category: 'organs', kind: 'organ', organId: 'brain', brainView: 'sagittal' },
  { id: 'brain_coronal', category: 'organs', kind: 'organ', organId: 'brain', brainView: 'coronal' },
  { id: 'small_intestine_mucosa', category: 'organs', kind: 'organ', organId: 'small_intestine', smallIntestineView: 'mucosa' },
  { id: 'small_intestine_wall', category: 'organs', kind: 'organ', organId: 'small_intestine', smallIntestineView: 'wall' },
];

// 占位模型的顏色（模型尚未匯入時使用）
export const FALLBACK_COLORS = {
  surface: '#e8b48a',
  skeleton: '#e6dcc8',
  skeleton_muscles: '#d98a76',
  heart: '#c46b7a',
  lung: '#d988a0',
  stomach: '#c98a3a',
  brain: '#6f3aa3',
  neck: '#5b8db8',
  small_intestine: '#c98a3a',
};
