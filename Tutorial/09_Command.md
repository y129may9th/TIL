# curl
`$ curl -o app/assets/images/rails.png -OL railstutorial.jp/rails.png`

```
# 実行結果をファイルへ出力
$ curl http://対象のURL > 出力先
$ curl -o 出力先PATH http://対象のURL

# URLのファイル名でダウンロード (下記はindex.htmlで保存される)
$ curl -O http://対象のURL/index.html

# リダイレクトを有効にする
$ curl -L http://対象のURL

```

[よく使うcurlコマンドのオプション](https://qiita.com/ryuichi1208/items/e4e1b27ff7d54a66dcd9)

