# カスタムヘルパー
`app/helpers/application_helper.rb`  
ビューにおける、新しいメソッド

# 出力
## puts
```
>> puts "foo"     # 文字列を出力する
foo
=> nil
```
- 改行文字である\nが自動的に出力の末尾に追加されます

## print
- 改行文字を追加しない
```
>> print "foo"    # 文字列の画面出力 (putsと同じだが改行がない)
foo=> nil
```
- 改行したいとき
```
>> print "foo\n"  # puts "foo" と等価
foo
=> nil
```

## ダブルクォート
- 式展開可能
- `\` でエスケープ


### `puts` で 戻り値 `=> nil` なのはなぜか
- putsはコンソールに出力するだけなので、内部に情報を保持しないようにしたいから？
- puts => String　が返るとStringのインスタンスが生成されることになる。


# 配列
- split
- split('/')
```
>> "foo/bar/baz".split('/')
=> ["foo", "bar", "baz"]
```
- join  
配列 ➡︎ 文字列
```
>> a
=> [42, 8, 17, 6, 7, "foo", "bar"]
>> a.join                       # 単純に連結する
=> "4281767foobar"
>> a.join(', ')                 # カンマ+スペースを使って連結する
=> "42, 8, 17, 6, 7, foo, bar"
```


- aにどのメソッドを与えても、a自身は変更されない
```
>> a
=> [42, 8, 17]
>> a.empty?
=> false
>> a.include?(42)
=> true
>> a.sort
=> [8, 17, 42]
>> a.reverse
=> [17, 8, 42]
>> a.shuffle
=> [17, 42, 8]
>> a
=> [42, 8, 17]
```

## 破壊的メソッド
メソッドの末尾に`!`
```
>> a
=> [42, 8, 17]
>> a.sort!
=> [8, 17, 42]
>> a
=> [8, 17, 42]
```


# ブロック
## mapメソッド
渡されたブロックを配列や範囲オブジェクトの各要素に対して適応
```
>> %w[A B C].map { |char| char.downcase }
=> ["a", "b", "c"]
```
```
>> %w[A B C].map(&:downcase)
=> ["a", "b", "c"]
```

# ハッシュとシンボル
```
>> user = {}                          # {}は空のハッシュ
=> {}
>> user["first_name"] = "Michael"     # キーが "first_name" で値が "Michael"
=> "Michael"
>> user["last_name"] = "Hartl"        # キーが "last_name" で値が "Hartl"
=> "Hartl"
>> user["first_name"]                 # 要素へのアクセスは配列の場合と似ている
=> "Michael"
>> user                               # ハッシュのリテラル表記
=> {"last_name"=>"Hartl", "first_name"=>"Michael"}
```
- ハッシュでは要素の「並び順」が保証されない


## inspect
オブジェクトを表示する
- `p`メソッド  
ショートカット

```
>> puts :name, :name.inspect
name
:name

>> p :name
:name
```

## Hash#merge
```
>> { "a" => 100, "b" => 200 }.merge({ "b" => 300 })
=> {"a"=>100, "b"=>300}
```


