- テストケースの整理・分類
`describe` `context`
- テストコードの実行
`before` `it`

1. データの作成
- FactoryBot を呼び出す  
`FactoryBot.create`  
- create -> buildメソッド  
データベースに登録する前でとめる（未保存のオブジェクトを得る）

1. ログイン
    1. 画面上での操作をテスト(Capybara)
    - URLアクセス
    `visit [URL]`
    - 入力
    `fill_in [ラベル], with: [input]`
    - ボタン
    `click_button 'login'`

1. `it`のなかみ
画面の内容をcheckしている
`expect(page).to have_content 'FirstTask'`
- have_content
マッチャ(Matcher)


