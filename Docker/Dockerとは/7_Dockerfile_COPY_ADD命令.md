# COPY命令 ADD命令
ホストマシン上のファイルをイメージ内にコピーする
- nginxイメージ
  →修正した設定ファイルを保存
1. nginxコンテナを起動して、編集する設定ファイルを取り出す
`$ docker run --name tmp-nginx --rm -d nginx`
- --rmオプション
  - dockerコンテナは終了しても、停止状態のコンテナとして残り続ける  
    コンテナを停止した時点で自動的にコンテナの削除まで行うオプション
  - すでに存在するコンテナと同名のコンテナは起動できないので、実行中、停止中のコンテナは削除する必要がある

## docker cp
- ホストマシンのファイルをコンテナないにコピーする場合
  `$ docker cp <ホスト上のコピーしたいファイルのパス> <コンテナ名 or ID>:<コピー先のパス>`
- コンテナないのファイルをホストマシンにコピーする場合
  `$ docker cp <コンテナ名 or ID>:<コンテナ上にコピーしたいファイルのパス> <コピー先にパス>`

- コンテナ内のファイルをホストにコピー
`docker cp tmp-nginx:/etc/nginx/conf.d/default.conf ./`
- 編集

1. Dockerfileを作成して、コピー命令を実行
```
FROM nginx:latest
COPY default.conf /etc/nginx/conf.d/default.conf
```
- ビルド
  `$ docker build -t nginx:ver1 .`


