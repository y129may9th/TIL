# Python: SimpleHTTPServerでWebサーバをたてる
`python -m SimpleHTTPServer 8000`
Webサーバをポート8000番（デフォルト）で提供

[1分で建てるローカルWebサーバ — msrsblog](https://msrx9.bitbucket.io/blog/html/2013/06/28/kind_of_pysever.html)
> HTMLファイルのみで構成するような静的サイトの場合はSimpleHTTPServerを使い、pythonスクリプトを用いて動的にサイトの内容を変更したい場合はCGIHTTPServerを使うようにしましょう。
[20.19. SimpleHTTPServer — Simple HTTP request handler — Python 2.7.16 documentation](https://docs.python.org/2/library/simplehttpserver.html)
👆 公式


## canvas タグ
HTMLとJavaScriptでビットマップ画像を描画することができる要素
[HTML5における＜canvas＞タグの使い方 | UX MILK](https://uxmilk.jp/32290)


## ビットマップ画像・ベクター画像
- 全ての画像は、`ビットマップ画像`　か　`ベクター画像` でできている
- ビットマップ画像
  - 点で描画
  -
- ベクター画像
  - 点と線を数値化して描画

  [ビットマップとは？ベクターとは？画像形式の意味と違いを図解](https://saruwakakun.com/design/photoshop/image)

# Document

# getElementById


# PIXI
## PIXI.Texture

## PIXI.Sprite

## anchor
- スプライトの座標を指定する際の「基準」を指定するプロパティ
- x:0、y:0で左上隅が基
- x:1、y:1で右下隅が基準
- 真ん中を基準にするには、x:0.5、y:0.5