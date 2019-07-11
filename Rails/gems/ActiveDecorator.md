# Active Decorator 内でhelper_methodを使うとundifine method エラーになる
## ApplicationController に書いた helper_methodが使えない
- decorator定義メソは、以下のインスタンスでしか利用できない  
コントローラでインスタンス変数に代入し、ビューに渡されたモデルインスタンス

## helper_method
Rails のビューからコントローラのメソッドを呼び出す
ビューで使うメソッド

- decoratorから呼び出すことができないのはなぜか

## before_action
フィルタ
アクションを処理する前後に、任意の処理を挟む
アクションの前処理として他の機能へリダイレクトを実装すると、リダイレクトが行われて、アクションには到達しない
→　特定の状況の時にだけアクションが利用できるように制限する目的
フィルタとして、メソッドを登録


- before_action で指定すると呼び出し可能になるのはなぜか

https://github.com/amatsuda/active_decorator/issues/57



>active_decoratorは名付けとメソ利用場所にルールがある。
>１. UserDecoratorはUserクラスとそのサブクラスの拡張に飲み利用
>２. app/decorators以下はオートローディング適用(Railsの命名規約に沿うこと)
>３. decorator定義メソは、以下のインスタンスでしか利用できない
>(I)  コントローラでインスタンス変数に代入し、ビューに渡されたモデルインスタンス
>(II) 部分テンプレートをrenderメソでレンダリングする際に オプションで引き渡したインスタンス。
>
>...普通しないがビュー内で取得したモデルインスタンスがあっても使えない！


---
https://github.com/amatsuda/active_decorator
ActiveDecoratorの特徴から、decoratotの定義メソッドはコントローラでインスタンス偏すに代入して、ビューに渡す必要がある。
`helper_method`として`find_userメソッド`を指定すると、decoratorの定義メソッドを呼び出すことができない。
`before_action`として`find_userメソッド`を指定すると、前処理としてメソッドを登録できるので、decoratorので定義した`full_nameメソッド`が使用できる

以上より、user_ontroller.rb を下記のように記載するとエラーが解消され、正常に動く
```
class UsersController < ApplicationController
  helper_method :find_user
  before_action :find_user
  def show
  end

  private

  def find_user
    @find_user ||= User.find(params[:id])
  end
end
```

