# Flow


```
$ fork (upstream => origin)

$ clone (orgin => local)

upstreamにクライアント設定
$ git remote set-url upstream <upstream>

今のブランチの設定状況
$ git remote -vv

$ git fetch upstream
$ git checkout -b <branch> upstream/master
```

[gitのremote urlを変更する(レポジトリ移行時)](https://qiita.com/minoringo/items/917e325892733e0d606e)
[Fork Pull Request](http://kik.xii.jp/archives/179)

# リポジトリから新規にブランチを持って来る
```
$ git checkout -b new_branch upstream/new_branch_name(tool)

$git pull upstream new_branch_name

ブランチのリスト
$git branch -r

更新
$ git fetch --prune

```

[Gitでremoteリポジトリから新規にbranchを持ってくる方法](https://qiita.com/yoshiokaCB/items/eb68db0a81009b85c8a4)


# 新規にブランチを作るとき
- 自分の作業ブランチを確認する（*new_branch）
```
$ git branch new-branch-plus --track upstream/remote-branch-name

```
[Git用語：上流ブランチとは？](http://www-creators.com/archives/4931)
[怖くない！ Git for Web Developers](https://ameblo.jp/ca-1pixel/entry-11658373787.html)
[](https://web-nari.net/2018/04/15/explanatino-git-operation-flow/)
