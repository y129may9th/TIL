## CSP(Content Security Policy)
XSSやパケット盗聴などの特定の攻撃をブラウザ側で軽減するための仕組み
- Web ページのコンテンツ取得元や取得方法のポリシーをWebサーバからブラウザに伝える
- 実行を許可するスクリプトのドメインをホワイトリスト方式で指定
- プロトコルをHTTPSに強制（盗聴の軽減）

- HTTPヘッダーに`Conten-Security-Policy`を組み込む
- <meta>タグを使う  
- Rails  
`config/initializers/conten_security_policy.rb`

- MDNの情報
ディレクティブの意味

- report-onlyモード

