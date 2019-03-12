## nilガード

`number ||= 10`
`number || number = 10`
- number があれば、number
- number がなければ　number = 10

- 変数にnilが入っているかもしれない状況でnilの代わりにデフォルトを与える
---

- @childlenがnilの状態であっても、[]が代入されるのでsizeメソッドが使用可能！

```
class Child
   def children
     @children ||= []
   end
end
---------------
o = Child.new
=> #<Child:0x00007f84b3ea2100>
o.children
=> []
o.children.size
=> 0

```

- 配列はnilで返さない