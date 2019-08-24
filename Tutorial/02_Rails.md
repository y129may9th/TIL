#Rails
1. Spring サーバ: Rails 環境を事前読み込みする(アプリケーションローダー)  
[Railsの開発効率をあげる - Springを使ってRailsのコンソールコマンドの実行を早くする](https://ruby-rails.hatenadiary.com/entry/20141026/1414289421)
2. Ruby の起動
`Guard`

## generateスクリプトないのメソッド
### underscoreメソッド
キャメルケース→スネークケース

---
## provide
```
<% provide :title, "ページ個別タイトル" %>
<% provide :og_title, "ページ個別facebookタイトル" %>
```
`yield`に渡す  
```
<title><%= yield :title %></title>
<meta property="og:title" content="<%= yield :og_title %>" />
```
- デフォルトを与えておく
`<title><%= yield(:title).presence || "デフォルトタイトル" %></title>`


