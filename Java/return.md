## return 

- 戻り値を返す

```java
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        int sum = num(10, 2);
        System.out.println("呼び出し元");
        System.out.println("答えは" + sum + "です。");
    }
    
    private static int num(int num1, int num2) {
        if (num1 == 0) {
            System.out.println("呼び出し元に戻ります。");
            return num1;
        }
        
        int addAns = num1 + num2;
        return addAns;
        
    }
}

```

- num1 = 0の時

  `int sum = 1` となる

  ```
  呼び出し元に戻ります。
  呼び出し元
  答えは0です。
  ```

- 

- num(10, 2)の時

  ```
  呼び出し元
  答えは12です。
  ```

- 

- 戻り値の型　int　の時
  - nullで返却できない



- null をreturn文で返す方法

```java
public class Main {
 
 public static void main(String[] args) {
 String[] arrays1 = {"a", "b", "c"};
 System.out.println(getFirstString(arrays1));
 
 String[] arrays2 = {};
 System.out.println(getFirstString(arrays2));
 }
 
 private static String getFirstString(String[] arrays) {
 if (arrays == null || arrays.length == 0) {
 return null;
 }
 
 return arrays[0];
 }
 
}
```

