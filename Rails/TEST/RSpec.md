## RSpec
BDDのためのテスティングフレームワーク
- 動く仕様書
### BDD

## Capybara
- E2Eテストようフレームワーク
- テスティングライブラリと組合わせてつかう
- ブラウザ操作
- システムテスト

## FactoryBot
- テスト用のデータ
- Fixtureの代替
- モデルでもオブジェクトの作り方を宣言的に記述

1. RSpecとRSpecのRails用の機能
Gemfile  
`gem 'rspec-rails', '~> 3.7'`
1. RSpecに必要なディレクトリ・設定ファイル作成  
`be rails g rspec:install`
    - RSpecの全体的な設定をかく  
    `spec/spec_helper.rb`
    - Rails特有の設定をかくファイル  
    `spec/rails_helper.rb`
1. Rails アプリを作成したときに自動でつくられたtestディレクトリの削除  
`rm -r ./test`  
1. Capybara(rails new でインストール済み -> RSpecでcapybaraを利用)  
spec/spec_helper.rb
    1. 必要な機能を読み込み
    1. System Specを実行するドライバの設定
        - ドライバ
        ブラウザ相当の昨日絵お利用する為に必要なプログラム
        - Headless Chrome
        画面を表示せずに動作するモード
1. FactoryBotのインストール
`gem 'factory_bot_rails', '~> 4.11'`


