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
## form_withヘルパーメソッド
- newの引数
  - scope（form内のフィールドは空）
  - 送信先url
- updateの引数
  - モデルオブジェクトを渡す (form内はオブジェクトが持つフィールドが入る)

[ActionView::Helpers::FormHelper](https://api.rubyonrails.org/classes/ActionView/Helpers/FormHelper.html#method-i-form_with)
[【Rails 5】(新) form_with と (旧) form_tag, form_for の違い - Qiita](https://qiita.com/hmmrjn/items/24f3b8eade206ace17e2)


---
```
def create
  render plain: params[:article].inspect
end
```

# renderメソッド
- ハッシュを引数にとる
- サーバーへのリクエストは発行しない

＃redirect_to
- サーバーにリクエスト発行する
```
redirect_to @article
```
- 👆モデルを保持している@articleを指定するだけで、そのモデルを表示するためのshowアクションにリダイレクトされる

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

# エラーが起こるとDOM構造が変わる
- field_with_errorsクラスを持つdivタグで囲まれる

| before | after |
| :---: | :---: |
|||

# pluralizeメソッド
数値を受け取ってそれに応じて英語の「単数形/複数形」活用を行う

# link_to
### option (HTML5の属性)
- method: :deleteオプション
- data: { confirm: 'Are you sure?' }オプション
[Rails で JavaScript を使用する - Rails ガイド](https://railsguides.jp/working_with_javascript_in_rails.html)


# 関連付け
> @articleというインスタンス変数に記事が1つ含まれていれば、@article.commentsと書くだけでその記事に関連付けられているコメントをすべて取得できます。]

# create メソッド
- 作成と保存を同時に
## build メソッド
- 作成のみ

# パーシャル
## renderメソッド
> @article.commentsコレクションに含まれる要素を1つ1つ列挙するときに、各コメントをパーシャルと同じ名前のローカル変数に自動的に割り当てます。この場合はcommentというローカル変数が使われ、パーシャルの表示に利用されます。

# BASIC認証
誰でも記事を追加/編集/削除したり、コメントを削除したりできないようにする。
## http_basic_authenticate_withメソッド
- このメソッドが許可する場合、リクエストされたアクションが実行できる
- それ以外のアクションは認証が必要になる


