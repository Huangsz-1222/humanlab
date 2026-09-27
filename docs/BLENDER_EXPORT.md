# Blender 匯出 GLB 教學（給 HUMANLAB 使用）

本教學說明如何把你做的 Blender 模型與「熱點標記」匯出成網頁能讀取的 `.glb` 檔。

---

## 一、前置準備

1. 確認你的 Blender 版本（3.x 或 4.x 皆可，本教學以 4.x 為準）。
2. 每個要放上網站的模型都要各自匯出成一個 `.glb` 檔。
3. 檔名統一使用**小寫英文＋底線**，方便程式讀取，例如：
   - `body_surface.glb`（人體無背部，主畫面）
   - `body_skeleton.glb`（人體骨骼）
   - `body_skeleton_muscles.glb`（人體骨骼＋肌肉）
   - `heart.glb`（心臟）
   - `stomach.glb`（胃部）
   - `brain_sagittal.glb`（腦部側面剖面／矢狀切面）
   - `brain_coronal.glb`（腦部正面剖面／冠狀切面）
   - `neck.glb`（頸部）
   - `small_intestine.glb`（小腸，之後再補）

---

## 二、放置「熱點標記」（只有主畫面人體需要）

主畫面人體模型上，要在器官位置放標記，讓使用者點擊跳轉。

### 放置步驟

1. 開啟 `人體無背部.blend`。
2. 進入「物件模式」，按 `Shift + A` → **Empty → Sphere**（球狀空物件）。
3. 用 `G` 移動、`S` 縮放，把標記放到器官位置：
   - `hotspot_heart` → 胸腔（心臟）
   - `hotspot_stomach` → 上腹部（胃部）
   - `hotspot_brain` → 頭部（腦部）
   - `hotspot_neck` → 頸部
   - `hotspot_small_intestine` → 下腹部（小腸）
4. 在右上角「大綱 Outliner」**慢速雙擊名字**重新命名（或選中物件後按 `F2`）。
   - 命名規則：**小寫英文＋底線**，例如 `hotspot_heart`。

> 重點：`hotspot_` 開頭是程式判斷熱點的依據，**後面要接器官英文名**（heart / stomach / brain / neck / small_intestine），必須和程式對照表一致。

---

## 三、儲存與匯出

### 1. 儲存專案（保留可編輯狀態）

- 按 `Ctrl + S`，或 `檔案 File → 儲存 Save`。

### 2. 匯出成 GLB

1. 點 `檔案 File → 匯出 Export → glTF 2.0 (.glb)`。
2. 在匯出設定（左下／右下視窗）確認：
   - **Format**：`glTF Binary (.glb)` ← 一定要選這個。
   - **Transform**：建議勾選 `+Y Up`（Blender 預設 Z 軸向上，勾這個讓模型在網頁保持直立）。
   - 若只想匯出目前選中的物件，勾 **Selected Objects**；否則直接匯出全部。
3. 按 **Export glTF 2.0**，存到 `humanlab/public/models/` 資料夾。

> 若程式找不到對應檔案，會自動顯示「占位模型」並標示「模型尚未匯入」，方便你確認流程。

---

## 四、縮小模型檔案（非常重要）

你目前匯出的模型每個約 **80 MB、150 萬個三角形**，對網頁來說太重，會導致載入緩慢、瀏覽器卡頓。建議降到 **50 萬三角形以內、檔案 15 MB 以內**。

### 方法 A：Decimate 減面（最有效，強烈建議）

1. 選中模型（在「編輯模式 Edit Mode」或「物件模式 Object Mode」皆可）。
2. 右側「屬性面板」點「扳手圖示」→ **Add Modifier → Decimate（減面）**。
3. 把 **Ratio（比例）** 調到約 `0.1`（保留 10% 面數），邊看模型邊調整，不要減到外觀破掉。
4. 滿意後點 **Apply（套用）**。
5. 重新匯出 GLB。

> 減面前建議先 `Ctrl + S` 存檔，或複製一份模型，以免減壞無法復原。

### 方法 B：匯出時開啟 Draco 壓縮

1. 匯出 GLB 時，在設定裡展開 **Compression** 區塊。
2. 勾選 **Compression → Use Draco**（可用預設值）。

> Draco 能把幾何資料壓縮約 10 倍。若你之後想用，先跟我說一聲，我再幫網頁加上 Draco 解碼支援。

### 建議目標

| 項目 | 目前 | 建議 |
| --- | --- | --- |
| 檔案大小 | ~80 MB | < 15 MB |
| 三角形數 | ~150 萬 | < 50 萬 |

---

## 五、常見問題

| 問題 | 解決方法 |
| --- | --- |
| 匯出的模型在網頁是橫躺／顛倒 | 匯出時勾選 **+Y Up**，或在 Blender 先把模型轉正 |
| 熱點點不到 | 確認標記名稱正確（`hotspot_` 開頭、英文小寫、底線連接） |
| 模型太大／載入慢 | 在 Blender 用「Decimate 減面」或「Smart UV」降低面數，再匯出 |
| 材質消失 | 網頁版優先使用 glTF 內嵌的 Base Color；複雜節點材質需先「烘焙 texture」 |
| 匯出的檔看不到 | 確認選的是 `.glb`（不是 `.gltf` 分開多個檔） |
