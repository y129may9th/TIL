# Webpacker::Manifest::MissingEntryError
[【Rails】インストール時につまづきがちなエラー集 - Yohei Isokawa](https://blog.yuhiisk.com/archive/2018/04/24/rails-error-collection.html)

# Webpack とは
## アセットをまとめる
何が嬉しいか
- 可読性あげる
- 機能を分割
- 再利用できる
- 外部モジュールを利用できる(nmpからインストールしたものとか)
- リクエスト数を減らす（まとめてあるから）
- 依存関係をまとめたファイルを作成
- デットコードを除去したファイルを作成
- 共通モジュールをバンドルしたファイルを作成

# Webpacker (gem)
Rails で Webpack を使う
`$ ruby bin/webpack-dev-server`
