## have_selector
- HTML内の特定の要素をセレクタ（CSSセレクタ）で指定できる
`expeect(page).to have_selector '.alert-success', text: '新規作成のテストをかく'`
- alert-success のCSSクラスの付いたテキストに「新規作成のテストを書く」を含む要素があるかどうかを検査

### alert-success 
成功時のFlashメッセージを表示するしている要素

## within
```
within '#error_explanation' do
  expect(page).to have_content 'hogehoge'
end
```
withinブロックの中でpageの内容を検索する
- 検索範囲を狭める
- #error_explanation のid要素にエラーメッセージが含まれているか調べている

