# 構成
| hoge | hoge |
| :----: | :---: |
| config.ru | Rackサーバーの設定ファイル |
| lib/ | 拡張モジュール |
| public/ | 外部から参照されるファイル（静的ファイル・コンパイル済みアセット） |
| Rakefile | タスク定義ファイル |
| strage/ | Active Storageファイル |
| tmp/ | キャッシュ、pid |

# DSL (Domain-specific language)
> ある特定の領域（ドメイン）の問題を解決するために作られ、それ以外の領域の問題を解くことは想定していない。
- SQLや正規表現など
[ドメイン固有言語 - Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%A1%E3%82%A4%E3%83%B3%E5%9B%BA%E6%9C%89%E8%A8%80%E8%AA%9E)

## ルーティング
DSLを使ってリクエストをコントローラとアクションに振り分ける

# ハンドラー
`article/new.html.erb`
HTMLにRubyを埋め込むよう設計されたERB言語

# form builder
- form_withヘルパーメソッド
- scope
- 送信先url
---
```
def create
  render plain: params[:article].inspect
end
```

# renderメソッド
ハッシュを引数にとる

# paramsメソッド
`ActionController::Parametersオブジェクト`を返す

# $ rails generate model
- `db/migrate`
データベースマイグレーションファイル

# $ rails db:migrate
マイグレーションを実行
- マイグレーションはデフォルトではdevelopment (開発) 環境で実行される
- `rails db:migrate RAILS_ENV=production`のように環境変数を明示的に指定する必要がある

# strong_parameters
不正なパラメートをモデルに渡さないように
## マスアサインメント
チェックされていないパラメータをまるごとモデルに保存する行為
[Strong parameters: Dealing with mass assignment in the controller instead of the model | Riding Rails](https://weblog.rubyonrails.org/2012/3/21/strong-parameters/)



