
1. yarn　install  
`$ brew install yarn`  
プロジェクトのディレクトリでinstallしても、`User/yuionishi`配下にインストールされた

1. Webpackerのインストール
Gemfile  
`gem 'webpacker'`
`$ bundle install`

1. Webpackerで利用する設定ファイルやディレクトリが生成される
- JavaScriptパッケージがインストールされる
`$ bin/rails webpacker:install`  
`app/javascript/packs`  
`application.js`エントリポイントとしてコンパイルを実行する  
    - コンパイルを開始するファイル
- エントリポイントのファイルから、importしたいJavaScriptファイルなどは  
`app/javaxcript`配下の他のディレクトリにおく
- ビューに読み込んでもらう
`javascript_pack_tag`

### Reactの導入
1. Yarnでインストール(ライブラリ追加)
`bin/yarn add react react-dm`

1. React ReactDOMオブジェクトの読み込み  
ライブラリで限定されたスコープでimportできるように
`app/javascript/taskleaf/hello.js`

1. エントリポイントでモジュールをimport
`app/javascript/packs/application.js`


