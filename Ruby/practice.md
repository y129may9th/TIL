
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