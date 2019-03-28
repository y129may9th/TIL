
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
