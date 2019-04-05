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

##  コントローラーとビュー
- コントローラーのgeneratorでアクションを指定すると、アクションと同名のビューもできる  
`be g controller tasks [action sction ...] [option] `
- 個別にルーティングを設定してくれる（自動）  
`config/routes.rb`
- 各アクションを一括ルーティング  
`resources :tasks`


