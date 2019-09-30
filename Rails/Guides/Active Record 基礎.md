# 2.1 命名ルール
- model
- TB/schema

# 2.2 スキーマのルール
## ActiveRecordインスタンスに機能追加するカラム
- `lock_version`: モデルにoptimistic lockingを追加
- `type`: モデルでSingle Table Inheritanceを使う場合に指定します
- `関連付け名_type`: ポリモーフィック関連付けの種類を保存します
- `テーブル名_count`: 関連付けにおいて、所属しているオブジェクトの数をキャッシュする

## optimistic locking (楽観ロック)
- ロックしない
- バージョンをみて更新する
  - バージョン指定ようのカラムを用意する -> lock_version

[排他制御（楽観ロック・悲観ロック）の基礎　 - Qiita](https://qiita.com/NagaokaKenichi/items/73040df85b7bd4e9ecfc)


## ActiveRecord::Inheritance
テーブルの継承


# 5 CRUD: データの読み書き
[Active Record クエリインターフェイス - Rails ガイド](https://railsguides.jp/active_record_querying.html)

### update_all
### destroy_all
```
User.destroy_all
```
### destroy_by
```
User.destroy_by(name: hoge)
```

# 6 バリデーション（検証）
DBに書き込まれる前のモデルの検証

[Active Record バリデーション - Rails ガイド](https://railsguides.jp/active_record_validations.html)

# 7 コールバック
モデルのサイクル内で、レコードの作成、更新、削除などさまざまなイベントに対してコードをアタッチして実行できる。

[Active Record コールバック - Rails ガイド](https://railsguides.jp/active_record_callbacks.html)

# 8 マイグレーション
データベーススキーマを管理するためのDSL
- テーブル作成`bin/rails db:migrate`
- ロールバック`bin/rails db:rollback`

[Active Record マイグレーション - Rails ガイド](https://railsguides.jp/active_record_migrations.html)



