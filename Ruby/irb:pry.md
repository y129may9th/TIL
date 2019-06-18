## irb(Interactive Ruby)
---
- rubyをインタラクティブに実行する（対話）。
- コンソール  
- 開発やデバックするときにコードを確認しながら試せる。


## pry (ぷらい)
---
irbの強化版
- ハイライト処理 
- インストール方法   
`$ gem install pry pry-doc`  
- 起動  
`$ pray`

- Pryが真の力を発揮してくれる19個のコマンドとコマンドの自作方法[Rails]  
https://morizyun.github.io/blog/pry-command-rails-ruby/index.html
- `ls`  
現在のスコープで利用可能なメソッド、変数、定数を確認
- `cd`  
オブジェクトやクラスへの移動
- ファイルを呼び出す
`require './Practice.rb'`


## pry-doc 
---
pryからドキュメントを覗くことができるようになるgem



## YARD
---
javadocのようなもの  
`$ yard config --gem-install-yri`
