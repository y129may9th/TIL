input_line = gets.chomp.split(" ")
sum = []
input_line.each do |i|
    sum << i.to_i
end
puts sum.inject(:*)

# [配列やハッシュで合計値を求める時の書き方まとめ](https://qiita.com/rllllho/items/94e8fde8266f14275961)

