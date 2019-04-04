## DataBase
- `be rails db:create`  
データベース作成（環境ごとに使い分ける→設定が違うから）
    - 開発(development)
    - テスト(test) 
    - 本番(production)

- `config/database.yml`で設定

## Rails postgreSQLの情報を確認する
`$ be rails dbconsole`
- DB一覧
`\l`
- table
`\d`
- テーブル定義
`\d [table]`
- help
`.help`


