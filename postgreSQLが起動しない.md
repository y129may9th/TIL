## postgreSQLが起動しない
PostgreSQLサーバーを立ち上げてコンソールに入って動作確認しようとするとエラーになる

- brewのサービスのステータスをみる
```
$ brew services list
Name       Status  User Plist
postgresql stopped
```

- postgreSQLを起動する 
```
$ brew services start postgresql
==> Successfully started `postgresql` (label: homebrew.mxcl.postgresql)
```

- ステータス確認
軌道している様に見えるが、`started` がグリーンじゃない（分かりづらい）　　
![ステータス確認（きいろ）](https://sukusho.nu/64lZ "ステータス（きいろ）")
```
$ brew services list
Name       Status  User      Plist
postgresql started yuionishi /Users/yuionishi/Library/LaunchAgents/homebrew.mxcl.postgresql.
```

- コンソール　`エラー`
```
$ psql postgresql
psql: could not connect to server: No such file or directory
	Is the server running locally and accepting
	connections on Unix domain socket "/tmp/.s.PGSQL.5432"?
```

- リスタートする
```
$ brew services restart postgresql
Stopping `postgresql`... (might take a while)
==> Successfully stopped `postgresql` (label: homebrew.mxcl.postgresql)
==> Successfully started `postgresql` (label: homebrew.mxcl.postgresql)
```
変わらない

- stopする
```
$ brew services stop postgresql
Stopping `postgresql`... (might take a while)
==> Successfully stopped `postgresql` (label: homebrew.mxcl.postgresql)
$ brew services list
Name       Status  User Plist
postgresql stopped
```

### アンインストール
```
$ brew uninstall postgresql
Uninstalling /usr/local/Cellar/postgresql/11.1_1... (3,548 files, 40.3MB)
```
```
$ ls /usr/local/var/ | grep postgres
postgres
```
```
$ ls /usr/local/var/
homebrew	log		postgres
```
- `rm`コマンドなので慎重になる
```
$ rm -rf /usr/local/var/postgres
```
- きえた
```
$ ls /usr/local/var/
homebrew	log
```
### インストール
```
$ brew install postgresql

🍺
```

- コマンドが存在するか
```
$ which psql
/usr/local/bin/psql
```

- `started`の色  
![ステータス確認（みどり）](https://sukusho.nu/64nw "ステータス（みどり）")

```
$ brew services list
Name       Status  User Plist
postgresql stopped

$ brew services start postgresql
==> Successfully started `postgresql` (label: homebrew.mxcl.postgresql)
Yui-no-MacBook-Air:scaffold_app yuionishi$ brew services list
Name       Status  User      Plist
postgresql started yuionishi /Users/yuionishi/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
```

- できた
```
$ psql postgres
psql (11.2)
Type "help" for help.
commands
postgres=# exit
```


- 参考
https://techracho.bpsinc.jp/hachi8833/2017_12_21/48661  
https://qiita.com/DaikiandNatsu/items/135f53844524417fa605