# minitest-reporters
Railsのデフォルトのテストで red や green を表示するgem

# Guardによるテストの自動化
`guard gem`
ファイルシステムの変更を監視し、ファイルを変更すると自動的にテストを実行してくれるツール
`$ bundle exec guard init`
- Guardfileを編集
`$ bundle exec guard`
立ち上げておく

## setup method
各テストが実行される直前に実行

## assert_select
セレクタに対するテスト  
`assert_select "title", "Home | Ruby on Rails Tutorial Sample App"`

# 統合テスト
`rails test:integration`
## リンクのテスト
`site-layout` テンプレート
- assert_templateメソッド
ページが正しいビューを描画しているか
- assert_selectメソッド
`assert_select "a[href=?]", root_path, count: 2`  
aタグとhref属性をオプションで指定して調べる  
`assert_select "a[href=?]", about_path`  
```
assert_select "div"	                           <div>foobar</div>
assert_select "div", "foobar"	               <div>foobar</div>
assert_select "div.nav"	                       <div class="nav">foobar</div>
assert_select "div#profile"	                   <div id="profile">foobar</div>
assert_select "div[name=yo]"	               <div name="yo">hey</div>
assert_select "a[href=?]", ’/’, count: 1	    <a href="/">foo</a>
assert_select "a[href=?]", ’/’, text: "foo"	<a href="/">foo</a>
```


