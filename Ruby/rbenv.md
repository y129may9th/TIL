## 環境構築
https://qiita.com/hujuu/items/3d600f2b2384c145ad12
### Homebrew
パッケージマネージャー
1. Homebrew install
1. インストール出来たか確認  
`brew doctor`

## rbenv
- バージョンを切り替えるツール
- Homebrewからインストール出来る  
`brew install rbenv`
`rbenv --version`


## ruby
- ruby のバージョンをみる  
`rbenv versions`

- install  
`rbenv install 2.5.1`

- gloval  
システム全体でのrubyのバージョンを指定する  
`rbenv global 2.5.1`  
`rbenv version`  
`=> 2.5.1 (set by /Users/yuionishi/.rbenv/version)`

- local  
プロジェクト毎にバージョンを指定する

- rubyが使用できるか  
`ruby -v`   
`=> ruby 2.5.1p57 (2018-03-29 revision 63029) [x86_64-darwin17]`  
`which ruby`  
`=> /usr/bin/ruby`



