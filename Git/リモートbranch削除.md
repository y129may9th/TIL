## margeしていないリモートbranchを削除する
- ローカルのbranch削除  
`$ git checkout master`  
`$ git branch -D test`
- リモートのtestブランチを削除  
`$ git push origin :test`

## 補足
`$ git push`  
`git push origin master:master`  
(git push プッシュ先リポ　ローカルブランチ：リモートブランチ)  

- ローカルブランチ名＝リモートブランチ名の時
`$ git push origin master`


