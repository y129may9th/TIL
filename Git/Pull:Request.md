- github上でPR

- github 上で Marge

- リモートの状況とローカルの状況はわけて考える
    - remote
        - マージ済み
        - ブランチは削除
    - local
        - ブランチにpushしたのが最後
        - そのまま
```
$ git branch
* feature/create
  master
```
- このままpullしてもNG

- マスターをチェックアウトしてpull
```
$ git checkout master
$ git pull
```
```
$ git branch
  feature/create
* master
```

- マージしたブランチは消えていない（仕様上）ので消す
```
$ git branch -D feature/create
```

- リモートのブランチを消す
```
$ git push --delete origin branch_name
```
[Gitのリモートブランチを削除するまとめ](https://qiita.com/yuu_ta/items/519ea47ac2c1ded032d9)
