# unnotech

## 專案執行
將該 repo 自 github clone 下來或是直接下載 zip 檔，取得之後於 terminal 執行 npm install ，以將該專案的相依套件node_modules函式庫注進該專案中。安裝完成之後，於 terminal 執行 npm run serve 建立整體環境並執行。 

### 架構
整體架構因應更換頁面不重新 render Book List 的要求，因此在 Booklist 元件加入 router-view 供換頁時 Book Detail 元件切入，並在route 組織中 Book Detail 作為 Book List 的子路徑。
Book List 頁面由 List, Bookcard 元件階層性組成，在 Book List 中串接 api 取得資料後用 props 傳遞資料 ，如此可以在清楚的分開區塊較好維護並可重複利用。
Book Detail 頁面中的 Book Detail 元件，先依 route 中傳來的參數（id）串接 api 取得該筆書籍資料呈現於畫面中，並在增減按鈕及 input ，加上整理數字的  methods， 按下修改按鈕，將修改過的數量及價格 patch api 。
### 第三方 library
* Axios
* Tailwind-css

### 困難


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
