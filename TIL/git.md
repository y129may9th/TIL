
```bash
# fork
# clone
git clone <uri>
# branch
git branch -a
# リモートリポジトリとして、オリジナルのリポジトリを upstream という名前で設定します。
git remote add upstream <本家のuri>
```

[GitHubでFork/cloneしたリポジトリを本家リポジトリに追従する - Qiita](https://qiita.com/xtetsuji/items/555a1ef19ed21ee42873)


- 最新の master からブランチをきる
```
git checkout -b new_branch upstream/master
```
