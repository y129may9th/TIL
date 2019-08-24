# minitest-reporters
Railsのデフォルトのテストで red や green を表示するgem

# Guardによるテストの自動化
`guard gem`
ファイルシステムの変更を監視し、ファイルを変更すると自動的にテストを実行してくれるツール
`$ bundle exec guard init`
- Guardfileを編集
`$ bundle exec guard`
立ち上げておく

## setup method
各テストが実行される直前に実行

## assert_select
セレクタに対するテスト  
`assert_select "title", "Home | Ruby on Rails Tutorial Sample App"`


