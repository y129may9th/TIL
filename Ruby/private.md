## private
オブジェクトの呼び出しに制限をかける
- 億万長者かは知れるが、資産（money）は見えないようにする

```
class Person 
    def initialize(money)
        @money = money
    end
    def billionaire?
        money >= 1000000000
    end

    private
    
    def money 
        @money
    end
end
```
- moneyメソッドは、オブジェクトの内側からは利用できるが、外側からは利用できない
```
yui = Person.new(10000000000)
yui.billionaire?
=> true
yui.money
=> NoMethodError: private method `money' called for #<Person:0x00007fe5384ff7e8 @money=10000000000>
```
- 内側から利用するとは？？
```
class Person 
    def initialize(money)
        @money = money
    end
    def billionaire?
        money >= 1000000000
    end
    def giveMoney
        puts money - 10000
    end

    private
    
    def money 
        @money
    end
end
```
- giveMoney（オブジェクトの内側）からはmoneyメソッドが呼び出せる（利用できる）  
（money を呼び出して、10000を引く）

```
    def giveMoney
        puts money - 10000
    end
```
