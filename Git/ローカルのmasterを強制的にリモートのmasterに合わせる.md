## ローカルのmasterを強制的にリモートのmasterに合わせる
[git statusのメッセージを読み解く](https://gist.github.com/yatemmma/6486028#8-git-status-%E3%81%AE%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E3%82%92%E8%AA%AD%E3%81%BF%E8%A7%A3%E3%81%8F)

- ローカルの履歴が進んでいる  
```
$ git status
Your branch is ahead of 'origin/master' by 8 commits.
```

- リモートの最新を取ってくる  
`$ git fetch origin master`  
- ローカルのmasterを、リモートの追跡masterに強制的に合わせる  
`$ git reset --hard origin/master`

-> 手元の作業ツリーとインデックスの変更内容は消える  

[ローカルのmasterを強制的にリモートのmasterに合わせる](https://gist.github.cottp://www-creators.com/archives/1097)


