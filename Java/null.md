### List<String> a  = null;　→　Error

```java
List<String> a = null;

```

List型の変数a...null

- この変数aに何個も入るために宣言
- でも、変数aには値を入れえる器（インスタンス）が入っていない
- 器がない状態（= null）
- この状態で addしようとしても、ERRORになるよ

```java
a.add("colo1");
a.add(colo1-2);
```

---
## Java 初期化

https://www.atmarkit.co.jp/ait/articles/0607/06/news113.html

> Javaでは型の種類を問わず、あらゆる変数は値の代入を行って明示的に初期化しないと利用できない（ただ定義しただけでは、何も値が入っていないと見なされる）という文法になっています。言語によっては、定義しただけで、デフォルトの値が設定される場合もあるかもしれませんが、そのような言語を知っている型は注意が必要です。

https://teratail.com/questions/49010

```java
import java.io.*;

public class sample{
    public static void main(String[] args){
        FileWriter fw;
        try{
            fw=new FileWriter("sample1.dat",false);
            fw.write('A');
            fw.flush();
        }catch(IOException e){
            System.out.println("ファイル書き込みエラーです。");
        }finally{
            if(fw!=null){
                try{
                    fw.close();
                }catch(IOException e2){
                }
            }
        }
    }
}
```

> 実際上の理由は「バグによりメモリーを破壊するような可能性」を排除することだと思います。プログラムの実行中に発生し得るエラーを「エラーの検出・レポート・リカバリーが可能なもの」「エラーを検出すること自体ができないような致命的なエラー」に大別すると、「未初期化変数の参照(により起こるメモリー破壊)」は後者でして、確実に検出すること自体が**不可能**かつ**何が起こるか予想できない**というやっかいなものです。こういうことを極力起こさないようにするためにコンパイル時ガードするという方針を採ったのだと思います。

> もし、fw=new FileWriter("sample1.dat",false);の処理で 
> FileWriterを初期化している途中でExceptionが発生したら、 
> fwに代入する前に、finally内のif(fw!=null){を実行することになり、 
> 未初期化のfwと参照する可能性があるからではないでしょうか。

> 自分で情報を保持するために宣言したはずの変数に、なにも情報を保持しないままアクセスするのは、変数の目的に反するためです。

http://sjc-p.obx21.com/word/jh/initialization.html

> 1. クラスのフィールド（メンバ変数）は自動的に初期化される。
> 2. メソッドのローカル変数は自動的に初期化されない。


---
- List<>の中のNULLをけす

```java
Collections.singleton(null)
```

https://qiita.com/hito3/items/4116dd94dc9716589461



なぜNullが格納されるのか

→SQLをよんでいるから

