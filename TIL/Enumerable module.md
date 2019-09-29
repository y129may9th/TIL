# Enumerable module
eachメソッドを元にして、色々なメソッドを提供する



# sprintf フォーマット
- %02x
```
x: 16進数
2: ２桁
0: 0詰め
```
```
num = 120
puts  "i = %02x" % num
i = 78
=> nil

👇と同じ
sprintf("%02x", num)
```


# 擬似変数 true, false, nil
```
偽: falseとnil
真: falseとnil以外全て
```

# nil, empty, blank
[nil?, empty?, blank? in Ruby on Rails - what's the difference actually? | Arkency Blog](https://blog.arkency.com/2017/07/nil-empty-blank-ruby-rails-difference/)

# コレクション
[Ruby: `each`よりも`map`などのコレクションを積極的に使おう（社内勉強会）](https://techracho.bpsinc.jp/hachi8833/2018_07_20/59639)

