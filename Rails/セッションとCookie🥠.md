## セッション
一連のリクエスト間で状態をサーバー側で共有する
# Controller
- セッションにデータ入れる  
`session[:user_id] = @user.id`
- 値を取り出す  
`@user_id = session[:user_id]`

## Cookie
共有する状態をブラウザ側でやりとり（ブラウザとサーバー間で渡し合う）
- セッションのしくみの一部を扱う
# kye
セッションID
- Coolieを消すとセッションも消える

## Userモデル
- パスワード  
（属性名）password_digest  
    - has_secure_password機能の命名ルールのため
    - digest  
        元に戻すことができない一方的に変換（ハッシュ化）した文字列
   - 生のパスワードをそのままDBに保存させないため  
    ** has_secure_password で実現できる **

### has_secure_password
1. gemfile`bcrypt`コメントアウト
1.  Userモデルに`has_secure_password`書き込み
    - password 属性  
        生のpasswordをメモリ上に一時的に格納
    - password_confimartion  
        password２回書き込み用
    - この2つが一致していないと検証に失敗
1. 一致していたら、ハッシュ化
1. ハッシュ化パスワードをpassword_digest に格納
1. DBに保存

