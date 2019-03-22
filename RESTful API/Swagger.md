## Swagger

[Swaggerとは何か？](https://blog.takuros.net/entry/2015/12/02/082248)

- 人とコンピュータにやさしいREST APIを記述する標準仕様

  ## REST　API　（Represemtational State Transfer Application Programing Interface）

  - API [API](http://e-words.jp/w/API.html)

    > **API**とは、あるコンピュータプログラム（ソフトウェア）の機能や管理するデータなどを、外部の他のプログラムから呼び出して利用するための手順やデータ形式などを定めた規約のこと。  
    
    [Web APIとは何なのか](https://qiita.com/NagaokaKenichi/items/df4c8455ab527aeacf02)

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
