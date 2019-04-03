## PullRequest しないと marge 出来ない設定にした
[[GitHub] ブランチの保護設定を活用しよう 【レビューが通るまでマージさせんぞ】](https://dev.classmethod.jp/tool/github/protect-branch/)

- 作業branchを切る  
`$ git checkout -b [branch_name]`

- ログ確認  
`git log --graph --pretty=oneline`

- brunch 確認  
`git brunch`

- ブランチを消す  
`$ git branch -D remove/file`

---
## brunch
- burunch 作成 
    - 削除のコミットは無い
    - ローカルにある（push 必要） 
    
`$ git checkout -b remove/file`

- (branch) test.txt消したあと  
```
$ ls -laGF

$ g log --oneline`  
39c47e1 (HEAD -> remove/file, master) delete textfile
```

- リモートbrunch <- ローカルのコミット分をpush  
`$ g push`

- origin にそんなブランチ無いと怒られる
```
fatal: The current branch remove/file has no upstream branch.
To push the current branch and set the remote as upstream, use
    git push --set-upstream origin remove/file
```
`$ git push --set-upstream origin remove/file`

## master
[[git reset (--hard/--soft)]ワーキングツリー、インデックス、HEADを使いこなす方法](https://qiita.com/shuntaro_tamura/items/db1aef9cf9d78db50ffe)
- 状態  
   master と remove/file は同じコミット(39c47e1 delete textfile)を指している
```
$ git log --oneline  
39c47e1 (HEAD -> master, origin/remove/file, remove/file) delete textfile
92c0b5b (origin/master) Add textfile
``` 
- masterに移動  
`$ git checkout master`
- 92c0b5b(add textFile) の状態に戻す  
    -> 状態を戻しておかないと同じコミットをさしたまま

`$ git reset --hard 92c0b5b`  

- 戻った  
```
$ g log --oneline`  
92c0b5b (HEAD -> master, origin/master) Add textfile  
$ g status  
On branch master
g log --oneline`  
92c0b5b (HEAD -> master, origin/master) Add textfile
```
- Pull/Request 作業
- 削除コミットをマージしてもらう

- (Marge済み) リモートのmaster buranch -> ローカルのmaster branchにpull
`$ g pull`

```
$ g log --oneline
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
