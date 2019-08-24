# partial
まとめる

`<%= render 'layouts/shim' %>`  
app/views/layouts/_shim.html.erb  
ここを探して結果をビューに反映させる


## render
ActionController::Base#render
[レイアウトとレンダリング](https://railsguides.jp/layouts_and_rendering.html)

### Action View を出力する
- テンプレート指定
`render "new"`  
- アクション指定
`render :new`


### layoutsフォルダのヘルパーを呼び出す
フォルダが異なる場合は、パスを指定  
app/views/messages/index.html.haml(いまここ)  
`= render "layouts/menu"`  
(layouts/_menu.html.hamlに行く)
- 部分テンプレートに変数を渡す

[Railsのrenderの使い方](https://qiita.com/suimi34/items/8f04431954255f23b80c)

