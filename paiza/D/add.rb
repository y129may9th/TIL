sum = 0
s = gets.chomp.split(" ")
s.each { 
    |i| sum += i.to_i
}
puts sum


