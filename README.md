# unnotech

## 專案執行
將該 repo 自 github clone 下來或是直接下載 zip 檔，取得之後於 terminal 執行 npm install ，以將該專案的相依套件node_modules函式庫注進該專案中。安裝完成之後，於 terminal 執行 npm run serve 建立整體環境並執行。 

### 架構
整體架構因應更換頁面不重新 render Book List 的要求，因此在 Booklist 元件加入 router-view 供換頁時 Book Detail 元件切入，並在route 組織中 Book Detail 作為 Book List 的子路徑。
Book List 頁面由 List, Bookcard 元件階層性組成，在 Book List 中串接 api 取得資料後用 props 傳遞資料 ，如此可以在清楚的分開區塊較好維護並可重複利用。
Book Detail 頁面中的 Book Detail 元件，先依 route 中傳來的參數（id）串接 api 取得該筆書籍資料呈現於畫面中，並在增減按鈕及 input ，加上整理數字的  methods， 按下修改按鈕，將修改過的數量及價格 patch api 。
### 第三方 library
* Axios: 以 ajax 精神 為基底，並以 promise 實現非同步行為，送出請求之後以 then 接收回傳的值或是 catch 失敗結果。使用 Axios 可以減少掉 ajax 原始寫法的冗長像是發出XMLHttpRequest 等，除此之外，直接將回傳的 JSON 資料轉換成 Object。
* Tailwind-css：在class使用及定義上可以具有高度的彈性，有高度客製化的特質，對於專案長期的維護相當方便，此外，一個 class 即代表一個樣式設定，修改及維護方便。該專案並沒有自行手動調整 utility class，皆是直接使用預設的 utility class，因此直接使用 cdn 執行 Tailwind-css。

### 困難


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
