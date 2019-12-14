# WebP
- 変換速度
- 綺麗さ
- 圧縮率
これらの理由を探す

## WebPコンテナー
### RIFFコンテナー (Resource Interchange File Format)
タグ付きのデータを格納するための汎用メタファイル形式
異なるタイプのリソース（画像、音声）を一つのファイルに格納するための共通フォーマット
- RIFFファイルは「チャンク」と呼ばれるものの並び
RIFF形式の識別子 + チャンク
12バイトのヘッダーがあり、以降はデータ

### チャンクの形式
- まとまり


## WebP の構造を見る
### ファイルヘッダ 12bytes
```ruby
[55] pry(main)> bin = File.binread('yuiyui.webp').slice!(0, 12).unpack('H*')
=> ["52494646e651000057454250"]

> bin.slice!(0, 12)
```
- 「RIFF」：32ビット
ASCII文字「R」「I」「F」「F」。
- ファイルサイズ：32ビット（uint32）
- 「WEBP」：32ビット


### Chunk - ファイルの構造
- Chunk FourCC
チャンク識別に使用されるASCII 4文字コード。
Lossy('VP8 ')

Lossless('VP8L')
```ruby
convert yuiyui.png -quality 100 -define webp:lossless=true lossless_yui.webp

[1] pry(main)> bin = File.binread('lossless_yui.webp');
[2] pry(main)> bin.slice!(0, 12).unpack('H*')
=> ["52494646dc44030057454250"]
[3] pry(main)> bin
=> "VP8L\xCFD\x03\x00/\nD\b\x11\xC...
```

- Chunk Size

- Chunk Payload

```ruby
# unpack
[50] pry(main)> bin = File.binread('yuiyui.webp', 12).unpack('H*')
=> ["52494646e651000057454250"]

```

# ASCIIコード
符号化文字集合
- 文字(ヒト) と 文字に割り当てられた数字(PC) を対応させる
あ：00000001
い：00000010
う：00000011
え：00000100
お：00000101

- 文字と数字の中間 (符号化文字集合)
あ：P-1：00000001
い：P-2：00000010
う：P-3：00000011
え：P-4：00000100
お：P-5：00000101




```ruby
pry(main)> bin = File.binread('yuiyui.webp');
[102] pry(main)> bin.slice(0, 12).unpack('H*')
=> ["52494646e651000057454250"]
pry(main)> bin.slice!(0, 12)
=> "RIFF\xE6Q\x00\x00WEBP"
[104] pry(main)> bin
=> "VP8X\n\x00\x00\x00\x10\...
[105] pry(main)> bin.slice(0, 4)
=> "VP8X"
[113] pry(main)> bin.slice(0, 1)
=> "\n"
[113] pry(main)> bin.slice(0, 3)
=> "\x00\x00\x00"
[120] pry(main)> bin.slice(0, 3).unpack('H*')
=> ["000000"]
pry(main)> bin.slice(0, 3).unpack('H*')
=> ["100000"]
[105] pry(main)> bin.slice(0, 4)

```

```ruby
[3] pry(main)> bin = File.binread('yui.webp');
[4] pry(main)> headder = bin.slice!(0, 12)
=> "RIFF\xE6Q\x00\x00WEBP"
[5] pry(main)> size = bin.slice!(0, 4)
=> "VP8X"
[6] pry(main)> size = bin.slice!(0, 4)
=> "\n\x00\x00\x00"
[7] pry(main)> size
=> "\n\x00\x00\x00"
[8] pry(main)> size.unpack('V')
=> [10]
[9] pry(main)> size.unpack1('V')
=> 10
[10] pry(main)> data = bin.slice!(0, 10)
=> "\x10\x00\x00\x00\n\x04\x00!\x04\x00"
[11] pry(main)> bin
=> "ALPH\xD0\x19\x00\x00\x01\xF0\x87\xFE\xFF=
```


# WebP の紹介
圧縮方法
- なぜ速いの
- 圧縮率
- 綺麗さ
#

## ファイルの中身をみる

- リトルエンディアン
- 0padding






画像がどのようにデータを保持しているのか学べて良かったです。



[PNGを読む - Qiita](https://qiita.com/kouheiszk/items/17485ccb902e8190923b)
https://html5experts.jp/jxck/2550/
[WebP 画像の作成  |  Android Developers](https://developer.android.com/studio/write/convert-webp)
https://note.com/sunakujira/n/ncecc0ac62589
[画像の最適化を自動化する  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization?hl=ja#what-is-webp)
[RIFF(Resource Interchange File Format) | アセンブラの魔女](https://books-nekoya.jp/Programming/RIFF/riff.html#struct)
[RIFF ‐ 通信用語の基礎知識](https://www.wdic.org/w/TECH/RIFF)
https://oshiete.goo.ne.jp/qa/125373.html
http://www.ertl.jp/~takayuki/readings/info/no05.html
https://blog.hmatoba.net/Article/156


data.unpack("C*").map {|c| '%d' % c }.join(' ')
=> "16 0 0 0 10 4 0 33 4 0"
