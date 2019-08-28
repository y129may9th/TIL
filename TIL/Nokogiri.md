# Nokogiri
解析したいページの Nokogiri::HTML::Document オブジェクトを得る。

## Nodeset
Nodeの配列
```
doc.css('title')  => cssで検索。Nodeset
doc.xpath('//title')  => xpathで検索。Nodesetを返す
```

## Node
Nodesetの要素
```
doc.css('title')[0]  => cssで検索。NodeSetから最初のノード
doc.xpath('//title')[0]  => xpahtで検索。NodeSetから最初のNode
```
## 単純なページの取得
open-uriを使って、
`doc = Nokogiri.HTML(open(url)[,url,[jcode] ])`
で Nokogiri::HTML::Document オブジェクトが返る。
HTMLメソッドの第三引数でページの文字コードを指定する

# Nokogiriインストール
gem 'nokogiri'
$ bundle install
$ be nokogiri -v

# railsコマンドで rake タスク を作成(generate)
$ rails g task scrape
lib/tasks/scrape.rake
```
rakeタスク作成したが、viewからの呼び出しがわからず、断念。
view > controller > task で呼び出せそうだが。
```

# Controller
```
# URLにアクセスするためのライブラリの読み込み
require 'open-uri'

```

[スクレイピングのためのNokogiri利用メモ](http://otn.hatenablog.jp/entry/20090509/p1)
[Nokogiriを使ったRubyでのスクレイピング　〜初心者編〜](http://hetaredream.hatenablog.com/entry/2014/12/20/163310)
[Ruby製の構文解析ツール、Nokogiriの使い方 with Xpath](https://blog.takuros.net/entry/2014/04/15/070434)
[[覚え書き] CSS再入門～セレクタ～](https://qiita.com/oh_rusty_nail/items/e522fe74bc3547b3e826)
[クローラ作成に必須！XPATHの記法まとめ](https://qiita.com/rllllho/items/cb1187cec0fb17fc650a)
[ロケーションパス (2)](https://www.techscore.com/tech/XML/XPath/XPath3/xpath03-2.html/)
