## Ajax
- サーバからデータを取得・更新
- Webブラウザ上で非同期通信を行い、ページの再読み込みなしにページを更新する

### 削除機能をAjaxで
1. タスクを削除
1. タスクが削除された事を反映した一覧画面を表示しなおす
- 削除したタスクを非表示にする、遷移なしでできそう

1. Ajaxからサーバーに削除リクエストを飛ばす  
サーバーサイドはAjaxのリクエストも同じリクエストとして扱うことができる
- method: :delete (HTTPリクエストの変更)  
    - Rails 食い込みのAjax機能  
    `link_toメソッド`に`remote: :trueオプション`
    - data-remote="true"　によってAjaxでサーバにリクエスト
    
1. 非表示  
サーバサイドでは、削除を実施すればよく、一覧画面の再表示は不要
    1. redirect_to　削除
    1. headメソッドで204(:no-content)を返す  
削除が成功したら、削除したタスクを非表示にする  
- rails-ujs  
`remote: true`をつけたa要素に対して、Ajax通信が成功した時にajax:successというイベントを発行  
これに対応するイベントハンドラを記述
    - 関連するイベントも発行
    - ajax:success  
    ステータスコード2xx(成功)の時に処理される

- Ajax以外の機能
    - method: :delete
    - data-confirl
    確認ダイアログの表示
    - data-disable-with(submitボタン)
    二重クリック防止


