# Array

## 多重代入

```ruby
pry(main)> a, b = [1, 2]  
=> [1, 2]
pry(main)> a  => 1
pry(main)> b  => 2

pry(main)> quo_rem = 14.divmod(3)
=> [4, 2]
pry(main)> quotient, remainder = 14.divmod(3)
pry(main)> "商=#{quotient}, 余=#{remainder}"
=> "商=4, 余=2"
```

`#divmod`

```ruby
pry(main)> quo_rem = 14.divmod(3)
=> [4, 2]
```

商と余が配列になって返ってくる。



## delete_if / reject!

- delete_if 

  常に self を返す

- reject! 

  要素が 1 つ以上削除されれば self  

  1 つも削除されなければ nil を返す

```ruby
a = [0, 1, 2, 3, 4, 5]
a.delete_if{|x| x % 2 == 0}
p a #=> [1, 3, 5]

a = [0, 1, 2, 3, 4, 5]
e = a.reject!
e.each{|i| i % 2 == 0}
p a                 #=> [1, 3, 5]
```



 

 



