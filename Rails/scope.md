# scope メソッド

- 絞り込み条件（クエリ）のメソッド の連続した呼び出し  
-> まとめて名前をつける  
-> カスタムのクエリ用メソッド  

- modelに定義 
`scope :recent, -> { order(created_at: :desc) }`
  
`tasks = Task.recent`  
`task = Task.recent.first`  
`tasks = current_user.tasks.recent`  
`task = Task.where()user_id: [1, 2, 5].recent`  


