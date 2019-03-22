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
    
---
[Swaggerとは何か？](https://blog.takuros.net/entry/2015/12/02/082248)

- 人とコンピュータにやさしいREST APIを記述する標準仕様

  ## REST　API　（Represemtational State Transfer Application Programing Interface）

  - API [API](http://e-words.jp/w/API.html)

    > **API**とは、あるコンピュータプログラム（ソフトウェア）の機能や管理するデータなどを、外部の他のプログラムから呼び出して利用するための手順やデータ形式などを定めた規約のこと。

  - 狭義のREST（RESTful）

    - RESTの定義
      - ステートレスなクライアント/サーバプロトコル
      - リソース指向
      - URIによるリソースの識別
      - HTTPメソッドを利用した操作

  - 広義のREST（Web API）

    - XMLやJSONで応答
    - RESTと称しているもの



### TOOL

- Swagger Spec
  - REST API に対して Swagger の使用に準じたドキュメント
- Swagger Core
  - REST API の実装からSwagger Specを生成するライブラリ

- Swagger UI
  - Swagger 準拠 API (SwaggerSpec) から動的にドキュメントを作成するツール
- Swagger Editor
  - ブラウザdr動くJSON/ YAMLの絵でいた
  - リアルタイムで構文チェック



### 何が便利か

- コードとドキュメントを一緒にバージョン管理できる

  - ドキュメントと生成物が乖離しがち->テストが必要

    APIドキュメントからAPIテストを実施（Swagger なら可能）

### API Gateway × Swagger



[SwaggerでRESTful APIの管理を楽にする]

---

---

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

(《REST思想》と《リソース指向》と《Webページ》を一緒にしてはいけない)[https://qiita.com/irxground/items/cd83786b10d81eecce77]

------

(RESTful Web API を厳密なリソース指向にする)[https://qiita.com/qsona/items/f7ef78ddbbc2873d1d13]

- リソース
  - 名前がある
  - 形式が定まっている（key名、各valueの型など）
  - 複数のエンドポイントで使いまわされる

------

[Web APIとは何なのか](https://qiita.com/NagaokaKenichi/items/df4c8455ab527aeacf02)


---
---

## 環境構築

- JDK
  - 1.8.0
- Eclipse
  - ライブラリ
    - lombok
      - コードの冗長化を防ぐ（getter/setter の省略）
- プロジェクト依存のライブラリ管理
  - maven
  - pom.xml (設定ファイル：依存関係、ライブラリ情報、プラグイン情報)
- Tomcat
- API動作確認ツール
  - restlet Client
  - swagger
    - APIドキュメント出力ツール　-> openAPIなので
- ファイル共有
  - SVN
- SQL
  - OracleSQL
- 









