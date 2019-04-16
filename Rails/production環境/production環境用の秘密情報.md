## production環境用の秘密情報部を復号する鍵
`config/master.key`
`RAILS_MASTER_KEY`

- アプリケーションが秘密情報を利用できるようにしたい
- 開発者が必要に応じて秘密情報を確認、変更するしたい。開発者同士で共有
- レポジトリに秘密情報を格納しない（漏洩防止）

### Credentials
production環境用の秘密情報  
`config/credentials.yml.enc`ここに秘密情報を記述

秘密情報
⬇︎
暗号化　マスターキー(config/master.key)
⬇︎
秘密情報
credentials.yml.enc
⬇︎
復号　マスターキー
⬇︎
秘密情報

- マスターキーの作成・編集
`$ be rails credentials:edit`

`$ be rails credentials:show`

### secret_key_base
暗号化cookie・署名付きcookieの整合性確認に利用される
- 再生成  
`be rails secret`

### カスタム暗号かファイル(Encrypted)
- staging環境でのみ使いたい秘密情報
- Credentialsとは分けて使いたい時○
