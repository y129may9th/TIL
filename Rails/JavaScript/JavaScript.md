## 対応するセルの背景色を変える
- CoffieScript

- Turbolinks機能  
turbolinks = Ajaxによるページ遷移の高速化のためのライブラリ

- DOM
Document Object Model  
HTMLをJavaScript等のプログラムから利用するための仕組み

- イベントハンドラ  
mouseover  
click  
kedown

- document.addEventListener('turbokinks:load',...)
Turbolinksを有効  
    - ページを読み込みが完了したタイミングで処理を開始する
    - ページ読み込みの完了よりも早い時点（JavaScriptが読み込まれたタイミング）で処理が実行され、イベントハンドラを定義しようとすると  
    イベントハンドラの定義先となる要素がDOM上に存在せずに、正しくイベントハンドラを設定できない

- アセットパイプライン
1. JavaScriptファイルをapplication.jsにまとめる
1. レイアウトファイルで読み込む  
.jsファイルをHTMLで読み込む指示をしなくても良い




