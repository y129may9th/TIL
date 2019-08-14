# ApplicationRecord
- 全てのモデルの継承元
- カスタマイズや拡張

### ActiveRecord::Baseによってテーブル作成させない
```ruby
class User < ApplicationRecord
  self.abstract_class = true
end
```
- Userのテーブルは作成されない

```ruby
class yui < User

end
```
- yuiのテーブルは作成される

[[Rails 5] モデルの継承元がActiveRecord::BaseからApplicationRecordに変更された](https://techracho.bpsinc.jp/hachi8833/2017_04_27/36050)

[[Rails] self.abstract_class = true の意味と挙動](http://codaholic.org/?p=2214)

