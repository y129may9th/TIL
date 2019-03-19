## Git
1. ローカルファイルにリポジトリ作成  
`$ git init`
1. ステージング  
`$ git add -A`  
1. コミット  
`$ git commit -m "initial commit"`
1. GitHubにリモートリポジトリ作成
1. リモートリポジトリの追加  
`$ git remote add origin https://XXXXX` 
1. ブランチの状態確認  
`$ git status`
1. プッシュ  
`$ git push origin master`


峻輔くんが使っていたコマンド  
`$ git log --oneline`

- リモートリポジトリとローカルリポジトリの差分が一致していなかったため、push する際にreject された。 

## PullRequest しないと marge 出来ない設定にした
[[GitHub] ブランチの保護設定を活用しよう 【レビューが通るまでマージさせんぞ】](https://dev.classmethod.jp/tool/github/protect-branch/)

`g commit -m "delete tsxtfile"`
`g push`

- ログ確認  
`git log --graph --pretty=oneline`

- brunch 確認  
`git brunch`

- remove/file burunch 作成  
`$ git checkout -b remove/file`

- できてる  
`$ git log --graph --pretty=oneline`
`* 39c47e (HEAD -> remove/file, master) delete textfile`

- test.txt いない  
`$ ls -laGF`  
`$ g log --oneline`  
`39c47e1 (HEAD -> remove/file, master) delete textfile`  
`$ g status`  
`On branch remove/file`

- branchにはpullのreject前までの情報しか無いから、コミット分をpush  
`$ g push`

- 怒られる
```
fatal: The current branch remove/file has no upstream branch.
To push the current branch and set the remote as upstream, use
    git push --set-upstream origin remove/file
```
`$ git push --set-upstream origin remove/file`

- master   
`$ git checkout master`
- master 1番目のcommit消す   
`$ git log --oneline`  
`39c47e1 (HEAD -> master, origin/remove/file, remove/file) delete textfile`  
`92c0b5b (origin/master) Add textfile`   
`$ git reset --hard 92c0b5b`  

- 消えた  
`$ g log --oneline`  
`92c0b5b (HEAD -> master, origin/master) Add textfile`  
`$ g status`  
`On branch master`  
`g log --oneline`  
`92c0b5b (HEAD -> master, origin/master) Add textfile`
 T
- pullReqestしてMarge
- Margeされた物をpull  
`$ g pull`

`$ g log --oneline`
```
2c4c49c (HEAD -> master, origin/master) Merge pull request #1 from y129may9th/remove/file
39c47e1 (origin/remove/file, remove/file) delete textfile
```

`$ git branch`
```
* master
  remove/file
```

- margeされたブランチを消す  
`$ git branch -D remove/file`
