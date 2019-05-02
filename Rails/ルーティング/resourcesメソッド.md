## リソースルーティング
- HTTPメソッド
- コントローラ内アクション  

`resources :photos`  
- 7つのルーティングが作成される
- photosコントローラに対応づけられる

Railsルーティングはルーティングファイルの`上から記載順`にマッチする。  

### パスとURL用ヘルパー
|path                |URL            |
|--------------------|---------------|
|photos_path         |/photos        |
|--------------------|---------------|
|new_photo_path      |/photos/new    |
|--------------------|---------------|
|edit_photo_path(:id)|photos/:id/edit|
|--------------------|---------------|
|photo_path(:id)     |photos/:id     |
|--------------------|---------------|



https://railsguides.jp/routing.html
