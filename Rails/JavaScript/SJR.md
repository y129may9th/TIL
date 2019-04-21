## コントローラからJavaScriptを返して実行する(SJR)
Ajaxでサーバーと通信した後に特定のJavaScriptを実行する方法
1. サーバ側でタスク削除→クライアント側で用意してあったJavaScriptコードを実行してタスクを非表示
- レスポンス
    コード:204  
    ボディ:空
1. Ajaxによるリクエストに対するレスポンスボディにサーバーからJavaScriptコードを返却、ブラウザ側で実行
- レスポンス
    コード:200
    ボディ:JavaScript

---
1. 非表示にするタスクのid情報を与える  
`id="task-#{task.id}"`  
1. レスポンスのJavaScriptコードを用意  
destroyアクションに対応するテンプレート  
app/views/tasks/destroy.js.erb  

### SJR (Server-generated JavaScript response)
- メリット  
手軽、テンプレートやヘルパー、モデルなどのサーバサイドの資産を簡単に使える
- デメリット  
ひとつの画面に関するJavaScriptがあちこちに散らばり、共通化がしづらい





