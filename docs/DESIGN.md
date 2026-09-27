# HUMANLAB 人體解剖互動學習網站 — 設計說明

雙語（English／繁體中文）的人體解剖 3D 互動學習網站，仿照「LearningCell 細胞結構工坊」的米色手繪風 UI。

---

## 一、專案定位

- 主畫面展示**人體模型**，可切換顯示型態（表面／骨骼／骨骼＋肌肉）。
- 人體上有多個**熱點**，點擊即跳轉到對應器官的 3D 模型與教學資訊。
- 右側資訊面板提供：本節焦點、概念解讀、關鍵結構、趣味知識。

## 二、版面（三欄）

| 區塊 | 內容 |
| --- | --- |
| 左側 Sidebar | 模型列表，分「人體 Human Body」與「器官 Organs」兩類 |
| 中間 Stage | 3D 檢視器：旋轉／縮放、自動旋轉、復位視角、熱點、顯示型態切換 |
| 右側 Info Panel | 焦點、概念解讀、關鍵結構、趣味知識 |

## 三、導覽模型（雙層）

1. **Home（人體）**：顯示全身模型（3 種顯示型態）＋熱點。
2. **Detail（器官）**：點熱點或左側列表進入，顯示器官模型＋資訊。

## 四、腦部角度判斷

點「腦部」熱點時，讀取人體當前面對鏡頭的角度：
- 正面／背面（左右 ±45° 內）→ **腦部正面剖面（冠狀切面）**
- 左／右側面 → **腦部側面剖面（矢狀切面）**

## 五、熱點對照表

| 熱點節點名稱 | 跳轉器官 | 狀態 |
| --- | --- | --- |
| `hotspot_heart` | 心臟 | 已有模型 |
| `hotspot_stomach` | 胃部 | 已有模型 |
| `hotspot_brain` | 腦部（依角度選切面） | 已有模型 |
| `hotspot_neck` | 頸部 | 已有模型 |
| `hotspot_small_intestine` | 小腸 | Coming Soon |

## 六、技術棧

- React 18 + Vite 5
- Three.js + @react-three/fiber + @react-three/drei
- 純 CSS（沿用參考專案設計變數）

## 七、目錄結構

```
humanlab/
  index.html
  vite.config.js
  package.json
  docs/
    BLENDER_EXPORT.md
    DESIGN.md
  public/models/        ← GLB 檔放這裡
  src/
    main.jsx
    App.jsx
    styles.css
    data/models.js       ← 模型清單、熱點、檔名對照
    data/content.js      ← 雙語教學內容
    i18n.jsx             ← 語言狀態
    components/
      Topbar.jsx
      Sidebar.jsx
      Stage.jsx
      InfoPanel.jsx
      Toolbar.jsx
      ProgressOverlay.jsx
    viewer/
      Viewer.jsx         ← 3D 畫布
      ModelView.jsx      ← 模型載入＋占位 fallback
      Hotspots.jsx       ← 熱點
```
