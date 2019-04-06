### Gemfile
gem をインストールする（バージョンがあいまい）  
依存するgemは書かない  

### Genfile.lock
Gemfileのgemから、他に必要gemをインストールする  
（gem の依存を記載）  
基本触れない  

## bundle install
- gemfile.lockの内容は更新しない
- gemfil.lockからgemをインストール
- gemfileの更新を更新

## bundle update
- gemのバージョンアップ
- gemfile からgemのインストール
- gemfile.lock を更新



## bycrypt のエラー 
`cannot load such file -- ...../bundle/ruby/2.5.0/gems/bcrypt-3.1.12/lib/bcrypt_ext.bundle (LoadError)`  
1. `$ be gem install bcrypt`
1. `$ be gem install -platform=ruby`
1. Gemfileにgem 'bcrypt', '~> 3.1.7'
1. `$ bundle install`


