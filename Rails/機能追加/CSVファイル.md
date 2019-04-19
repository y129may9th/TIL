## CSVファイル
- 出力  
アプリケーション内のデータをCSV形式で出力
- 入力  
CSV形式のファイルを読みこんでデータベースへの登録・更新・削除を行う  
バックアップからの復元、他のソフトウェアからの連携、大量データの一括登録

### Rubyのcsvライブラリ
config/application.rb  
`require 'csv'`

### CSVを出力
- model  
    `to_csv クラスメソッド` 追加
    - `CSV.generate`　CSVデータの文字列を生成  
...
- controller   
    - generate_csv クラスメソッドを呼び出し  
    - indexアクションに異なるヲーマットでの出力機能を用意する
    - format.html  
    HTMLとしてアクセスされた時（これまで通り）
    - format.csv  
    `/tasks.csv`のURLでアクセスされた場合  
    1. send_dataメソッドでレスポンスを送り出す
    1. 送ったデータをブラウザからファイルとしてダウンロード
    1. レスポンス内容は`Task.generate_csv`が生成するCSVデータ
    - ダウンロードするたびに異なるファイル名になるように、現在時刻をつかって作成

- エクスポートボタン
app/views/tasks/index.html.slim  
    - `format: :csv`を指定  
    `/task.csv`のURLを生成する

### CSVを入力
CSVデータの入力機能を追加  
-  一覧画面にインポート操作のUIからCSVファイルをアップロード  
- CSVファイルの内容に沿ってデータベースに登録
1. Model
`import クラスメソッド`実装  
`task_attributes = row.to_hash.slice(*csv_attributes)`  
    - to_hashメソッド  
    { ヘッダ名 => 値, ヘッダ名 => 値 }  
    - sliceメソッド
    指定した安全なキーに対応するデータだけを取り出して、入力に使う
    - sliceの引数
    csv_aattributesメソッドの戻り値の配列  
1. Controller  
    import メソッド 追加  
1. routes
1. View

