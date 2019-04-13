## 意図しないパラメータを弾く
- コントローラでリクエストパラメータを受け取る際に、想定通りのパラメータかどうかをチェックする
- パラメータの属性の制御  
`params.require(:task).permit(:name, :discription)`  
prams[:task]  
- 例外発生

