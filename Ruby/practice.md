
```
medals = [:gold, :silver, :bronze]
holders = {}

##ハッシュ化
medals.each do |m|
    holders[m] = gets.to_s.chomp
end

holders.each do |medal, name|
    puts medal.to_s.capitalize + " " + name
end

```
```
Gold Ono
Silver Orujov
Bronze Shavdatuashvili
```

---
```
t = []
s = gets.split(" ").map(&:to_s)
s.each do |str|
    t.push(str[0])
end
puts t.join(".")
```

```
# input
input = gets.split(" ").map(&:to_i)
puts input[0] - input[1]
```
```
input = gets.to_i
sweets = gets.split(" ").map(&:to_i)
total = sweets[0]*sweets[1]
puts total%input
```

- index
- each or times
- 三項定理
```
input_line = gets.split(" ").map(&:to_i)
input_line[0].times do |i|
    s = gets.chomp.split(" ").map(&:to_i)
    sum = s[0] - s[1] * 5
    sum >= 0 ? sum : sum = 0
    if sum >= input_line[1]
        puts i+1
    end
end
```

- `&:to_i` とはなにか
[Rubyでメタプログラミング ～暗黙的に呼ばれるto_procメソッド](http://blog.livedoor.jp/sasata299/archives/51541958.html)
`numbers = gets.split.map &:to_i`
    - `&`ブロックをオブジェクトとして扱う
    - ブロック
        - each map times　のメソッド呼び出しの時利用
