## be rails db:create
- bundle install にでてくる`warning`をためすと直った

- Puma  
HTTPサーバ  
Webサーバの機能を備えるAPサーバ（Tomcatも）

- bundle excec rails generate...  
bin/rails generate....

- generate(ジェネレーター)  
`be rails g [生成したいものの種類(model)] [必要な情報(属性:データ型)] [option]`  
migration controller　作成可能

- miglation
    - データベースの変更1つ1つをRubyのプログラムとして実行⇨最新のスキーマ状態になる
    - 1つ１つの変更が１つ1つのmigrationファイルに対応する。
    - 必要なところまでスキーマの状態を戻す事ができる
    - 複数の開発者が同時にバラバラの変更を行なっても、必要な分だけ反映する事が可能。
    1. migrationファイルを変更（テーブル追加）
    1. migrationをデータベースに適応
`be rails db:migrate`  

##  コントローラーとビュー
- コントローラーのgeneratorでアクションを指定すると、アクションと同名のビューもできる
`be g controller tasks [action sction ...] [option] `
- 個別にルーティングを設定してくれる（自動）
`config/routes.rb`
- 各アクションを一括ルーティング
`resources :tasks`


