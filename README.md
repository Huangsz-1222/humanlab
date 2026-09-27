# HUMANLAB 人體解剖互動學習網站

雙語（English／繁體中文）的人體解剖 3D 互動學習網站。參考「LearningCell 細胞結構工坊」的米色手繪風 UI。

## 快速開始

```bash
# 安裝相依套件（第一次）
npm install

# 啟動開發伺服器
npm run dev
# 開啟終端顯示的網址（預設 http://localhost:5173）

# 產出正式版
npm run build
npm run preview
```

## 放入你的 3D 模型

把 Blender 匯出的 `.glb` 檔放到 `public/models/` 資料夾，檔名對照表見下方。沒放模型時，網站會自動顯示占位模型，方便先預覽流程。

| 檔名 | 用途 |
| --- | --- |
| `body_surface.glb` | 人體（無背部）— 主畫面 |
| `body_skeleton.glb` | 人體骨骼 |
| `body_skeleton_muscles.glb` | 人體骨骼＋肌肉 |
| `heart.glb` | 心臟 |
| `stomach.glb` | 胃部 |
| `brain_sagittal.glb` | 腦部側面剖面（矢狀） |
| `brain_coronal.glb` | 腦部正面剖面（冠狀） |
| `neck.glb` | 頸部 |
| `small_intestine.glb` | 小腸（Coming Soon） |

> Blender 匯出步驟請看 [`docs/BLENDER_EXPORT.md`](docs/BLENDER_EXPORT.md)。

## 熱點標記

主畫面人體模型上要放「熱點標記」（Empty 空物件），命名為 `hotspot_heart`、`hotspot_stomach`、`hotspot_brain`、`hotspot_neck`、`hotspot_small_intestine`。詳見 [`docs/BLENDER_EXPORT.md`](docs/BLENDER_EXPORT.md)。

## 設計說明

詳見 [`docs/DESIGN.md`](docs/DESIGN.md)。
