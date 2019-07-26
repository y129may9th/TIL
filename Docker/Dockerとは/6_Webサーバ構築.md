# nginxを用いたWebサーバ構築
## nginxのイメージ
    - コマンド
    Exposing external port  
    nginxのコンテナを立ち上げるコマンド  
    `$ docker run --name <コンテナ名> -d -p <ホスト側のポート番号>:<コンテナがわのポート番号> <イメージ名>`  
    - --name
    コンテナ名は任意
    - -d  
    デタッチモード（コンテナの実行をバックグラウンドで行う）  
    指定しないと、forgraundで実行されるので、他の操作ができなくなる
    - -p
    コンテナのポートをコンテナ外で設定する  
    `-p 8080:80`の場合  
    コンテナを起動しているマシンのの8080ポートにアクセスすれば、コンテナ内部の80番ポート待ち受けているnginxに通信が転送される  
    localhost:8080でアクセスすれば、コンテナの80番にアクセスできる  
- コンテナID, コンテナ名
削除、起動、停止

## コンテナの停止
`$ docker stop <コンテナ名>`
## コンテナの削除
`$ docker rm <コンテナ名>`

## ホストディレクトリの情報をコンテナにマウント
ホスト上のHTMLファイルをnginxコンテナで公開する
- Hosting some simple static content
nginxのコンテナを立ち上げるコマンド（バインドマウントを使用する場合）
`$ docker run --name some-nginx -v /some/content:/usr/share/nginx/html:ro -d nginx`  
`$ docker run --name <コンテナ名> -d -v <ホスト側のディレクトリ>:<コンテナ側のマウントポイント>:<オプション> -p <ホストのポート番号>:<コンテナのポート番号> <イメージ名>`

### -vオプション
volume  
`/some/content`  
コンテナにマウントするホストのディレクトリ  
`/usr/share/nginx/html`  
マウント先のコンテナのディレクトリ  
`ro`  
read only  




