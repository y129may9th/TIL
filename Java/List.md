`@JsonInclude(JsonInclude.Include.NON_EMPTY`   
値がnullや空の場合にJSONに項目が出力されないようにする事が出来る。 項目を出力させないための条件をnullに限定したい場合は、@JsonInclude(JsonInclude.Include.NON_NULL)を指定すればよい。

## Listのnullチェック
- List == null チェック可能？
https://teratail.com/questions/61138  
Listが生成されているかのチェックは `== null`   
Listが生成されていてサイズが 0 なのかは `#isEmpty()`

- Web APIの返すJSONはどんなフォーマットが好まれるのか
https://blog.varwww.com/2015/02/what-is-json-format-preferred.html

- json and empty array
https://stackoverflow.com/questions/8104573/json-and-empty-array


## リストの戻り値

- リストの戻り値にNullを返すな  
https://moewe-net.com/design/dont-return-null-as-a-list

-  配列を返すメソッド  
https://www.sgnet.co.jp/technology/java/java01_02/  
呼び出し元で、nullを返さないようにする。  
呼び出し先でnullチェックをする必要がなくなる。

-  nullという値は本当に必要か考えよう   
http://d.hatena.ne.jp/j5ik2o/20110125/1295973241
    - nullの代わりに空のコレクションを返す
```
public class UserRepository {
  public Collection<User> findByActive(){
    // ...
    if ( /* Userが1件もない */ ){
      return new HashSet<User>(); // nullの代わりに空のコレクションを返す
    }
    Set<User> result = new HashSet<User>();
    // Userがある場合 result.add(...); などで追加
    return result;
  }
}
```

- 【Java】 (list == null || list.size() == 0)でNULL／空チェックしている事が気に入らない
https://qiita.com/riekure/items/2dd879ab7fc3cfc3feb2

- その「Nullチェック」必要ですか？ ～レビューで指摘を一つ減らすために～
https://qiita.com/teao26/items/3ace59deadad634dff4f

