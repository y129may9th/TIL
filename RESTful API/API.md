#  API
- APIとABI
- WEB とは
- HTTP
- WEB API
    - HTTPでやりとりする
- REST  
    パス（設計）  
    JSON（返却の型）  
    HTTP（通信の方法）
    ステートレス（通信の状態）  
- gRPC
    最近よく聞く
    


# リソース指向
[《REST思想》と《リソース指向》と《Webページ》を一緒にしてはいけない](https://qiita.com/irxground/items/cd83786b10d81eecce77)

- REST思想
  - HTTPメソッドの使用
    - CURD操作
    - ステータスコード
  - リクエスト・レスポンスの形式（JSON・XML…）

- リソース指向
  - データの利用は拡張子でフォーマットを指定
    - /books.json, /books.csv
    - 更新用のAPIではフォーマットを用意しない

- Webページ
  - サーバはHTMLを返し、ブラウザはAjaxを使わずHTML FormでデータのCRUDを行います。
  - Viewを用意する


[RESTful Web API を厳密なリソース指向にする](https://qiita.com/qsona/items/f7ef78ddbbc2873d1d13)

- リソース
  - 名前がある
  - 形式が定まっている（key名、各valueの型など）
  - 複数のエンドポイントで使いまわされる










