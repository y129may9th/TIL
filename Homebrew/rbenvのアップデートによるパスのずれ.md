## brew upgrade でrbenvがアップデートされて、rubyのコマンドがきかなくなった
```
~/RubymineProjects/CatsMatching $ be rails s
/Users/yuionishi/.rbenv/shims/bundle: line 21: /usr/local/Cellar/rbenv/1.1.1/libexec/rbenv: No such file or directory
```

- `rbenv rehash`で治った  
[rbenvのアップデートによるパスのずれ](http://narutonomaki.lemonblog.co/entry/92/)

## rbenv rehash

[rbenv rehashは何をやっているのか？](http://dqn.sakusakutto.jp/2014/02/rbenv_rehash_what_it_does.html)
[rbenvの使い方と仕組みについて](https://qiita.com/Kodak_tmo/items/73147ed4f0eec54d6e94)

