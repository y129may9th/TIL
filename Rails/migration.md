- マイグレーション実行  
`$ be rails db:migrate`

- 本番用DB  
`$ be rails db:migrate RAILS_ENV=production`
- テスト用DB  
`$ be rails db:migrate RAILS_ENV=test `

- version管理  
- 自動でバージョンアップ・ダウンできるとき
 - > UPの記述のみで、DOWNは自動生成 
    - rails db:migrate(UP)  
        テーブル作成
    - rails db:rollback(DOWN)  
        テーブルを削除する
- 手動でバージョン管理する時  
    def up/down作成する


 ### db/schema.rb
- 現在のデータベースの構造を自動出力する
- 手動で出力するとき  
`$ db:schema:dump`

## 主なコマンド
`be rails db:migrate`
`bd rails db:migrate VERSION=20190101000000`
`be rails db:rollback`
`be rails db:rollback STEP=2`
`be rails db:migrate:redo`

- validation設定するときもマイグレーション
- NOT_NULL制約
`change_column_nuli :name, :task, false`

- migrationの状態チェック(どこまで実行されているか)  
`$ be rails db:version`
- マイグレートされてないファイルを確認  
`$ be rails db:abort_if_pending_migrations`

- DBリセット  
2通り  
`$ be rails db:reset`  
`$ be rails db:migrate:reset`  
[rails db:migrate:resetできなかったのでrails db:resetした](https://qiita.com/mom0tomo/items/a252ff8a42eea00f81b1)

- カラム名変更する  
`$ be rails generate migration rename_titre_column_to_books`  
`rename_column :books, :titre, :title`  
`$ be rails db:migrate`  
【備忘録】Rails-カラム名を変更する方法[](https://qiita.com/kaito-chiba/items/723da8627438b67cc02c)


