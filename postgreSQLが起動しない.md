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
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 2 taps (heroku/brew and homebrew/core).
==> Updated Formulae
heroku/brew/heroku ✔    dnscrypt-proxy          jasper                  node-build              template-glib           v8
ruby-build ✔            double-conversion       jsonrpc-glib            octave                  thors-serializer
bitrise                 exploitdb               libdazzle               ruby                    tmux-xpanes
caddy                   gexiv2                  libyaml                 ruby@2.5                tomcat@8
chakra                  gnome-builder           mesa                    serverless              topgrade
crowdin                 imagemagick             minio-mc                sundials                unbound

==> Downloading https://homebrew.bintray.com/bottles/postgresql-11.2.high_sierra.bottle.tar.gz
######################################################################## 100.0%
==> Pouring postgresql-11.2.high_sierra.bottle.tar.gz
==> /usr/local/Cellar/postgresql/11.2/bin/initdb /usr/local/var/postgres
==> Caveats
To migrate existing data from a previous major version of PostgreSQL run:
  brew postgresql-upgrade-database

To have launchd start postgresql now and restart at login:
  brew services start postgresql
Or, if you don't want/need a background service you can just run:
  pg_ctl -D /usr/local/var/postgres start
==> Summary
🍺  /usr/local/Cellar/postgresql/11.2: 3,186 files, 35.5MB
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



https://techracho.bpsinc.jp/hachi8833/2017_12_21/48661
https://qiita.com/DaikiandNatsu/items/135f53844524417fa605