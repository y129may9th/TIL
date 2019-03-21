- github上でPR

- github上でMarge

- リモートの状況とローカルの状況はわけて考える
    - remote   
        - マージ済み  
        - ブランチは削除  
    - local  
        - ブランチにpushしたのが最後
        - そのまま
`$ git branch`  
`* feature/create`  
`  master`  
- このままpullしてもNG

- マスターをチェックアウトしてpull  
`$ git checkout master`
`$ git pull`

```
$ git branch
  feature/create
* master
```
- マージしたブランチは消えていない（仕様上）  
`$ git branch -D feature/create`  
消す

