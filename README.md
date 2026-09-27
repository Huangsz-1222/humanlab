# HUMANLAB · 人體解剖互動工坊

雙語（English／繁體中文）的人體解剖 3D 互動學習網站，仿照「LearningCell 細胞結構工坊」的米色手繪風 UI。使用者可透過 3D 模型探索人體各項器官與系統。

- **線上網址**：https://huangsz-1222.github.io/humanlab/

---

## 功能總覽

- **歡迎畫面**：品牌 LOGO、標題、簡介、「開始探索」按鈕（含淡出轉場）
- **三欄版面**：左側模型列表、中間 3D 舞台、右側教學資訊面板
- **3D 檢視器**：拖曳旋轉、滾輪縮放、自動旋轉、復位視角
- **主畫面人體**：表面／骨骼／骨骼＋肌肉 三種顯示型態切換
- **熱點導航**：在人體上點擊（隱形熱點，hover 顯示名稱）跳轉到對應器官
- **多檢視切換**：腦部（矢狀／冠狀切面）、小腸（黏膜絨毛／管壁）
- **教學內容**：焦點、概念解讀、關鍵結構（5 項）、趣味知識、模型來源
- **雙語切換**：English／繁體中文
- **延遲載入**：優先載入人體，器官背景載入，點擊時快取

## 收錄模型（11 個）

| 分類 | 模型 |
| --- | --- |
| 人體 | 全身表面、骨骼系統、骨骼＋肌肉、頸部 |
| 器官 | 心臟、肺部、胃部、腦部（矢狀／冠狀）、小腸（黏膜絨毛／管壁） |

---

## 技術棧

- **前端**：React 18 + Vite 5
- **3D**：Three.js + @react-three/fiber + @react-three/drei
- **樣式**：純 CSS（自訂設計系統變數）
- **部署**：GitHub Pages + GitHub Actions 自動部署

## 目錄結構

```
humanlab/
  index.html
  vite.config.js
  package.json
  docs/
    BLENDER_EXPORT.md       ← Blender 匯出 GLB 教學
    DESIGN.md               ← 設計說明
    DEVELOPMENT_LOG.md      ← 開發歷程
  public/
    models/                 ← 11 個 GLB 模型檔
    draco/                  ← Draco 解碼器（預留）
    logo.png                ← 品牌 LOGO
  src/
    data/models.js          ← 模型清單、熱點、檔名對照
    data/content.js         ← 雙語教學內容
    i18n.jsx                ← 語言切換
    components/             ← Topbar、Sidebar、Stage、InfoPanel、SplashScreen、AboutModal
    viewer/                 ← 3D 檢視器、模型載入器
  .github/workflows/deploy.yml  ← 自動部署設定
  啟動網站.bat              ← 本機預覽一鍵啟動
  更新網站.bat              ← 更新＋部署一鍵執行
```

---

## 本機開發

```bash
npm install      # 第一次安裝相依套件
npm run dev      # 啟動開發伺服器（http://localhost:5173）
npm run build    # 產出正式版（dist 資料夾）
```

或直接雙擊 **`啟動網站.bat`**。

## 更新網站（部署到 GitHub Pages）

修改內容後，雙擊 **`更新網站.bat`**，或手動執行：

```bash
git add -A
git commit -m "Update website"
git push
```

GitHub Actions 會自動建置並部署（約 1～2 分鐘）。

## 模型上架流程（新增模型時）

1. 在 Blender 製作模型，放在人體上的熱點命名為 `hotspot_<器官>`
2. 減面：`Decimate` 修改器 → Ratio 0.3～0.5 → Apply
3. 縮貼圖：Image Editor → Image → Resize → 2048
4. 匯出 GLB：`File → Export → glTF 2.0 (.glb)`，檔名用英文小寫＋底線
5. 放到 `public/models/`
6. 在 `src/data/models.js` 與 `src/data/content.js` 加入對應項目
7. 執行「更新網站」

詳細匯出教學見 [`docs/BLENDER_EXPORT.md`](docs/BLENDER_EXPORT.md)。
