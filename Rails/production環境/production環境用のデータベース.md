## production環境のデータベース設定

`$ be rails db:create`
- develop環境、test環境のデータベースを作成

- production環境
`config/database.yml`のproduction環境部分を設定
1. postgresqlにtaskleafというユーザー(ROLE)を追加
1. rtaskleafユーザーがデータベースに接続する際に使うパスワードを環境変数`TASKLEAF_DATABASE_PASSWORD`で取得できるようにする
--- 
1. ユーザー追加
`$ createuser -d -P taskleaf`
1. パスワードを環境変数にセット  
`config/database.yml`から取得できるようにする
`~/.bash_profile`
`export TASKLEAF_DATABASE_PASSWORD=password`
1. production環境用のデータベースを指定して実行
`$ RAILS_ENV=production be rails db:create db:migrate`

