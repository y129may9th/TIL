# 
## IAMユーザーの作成
- アクセスキーID
- シークレットアクセスキー

## AWS
- ホームディレクトリ配下に.awsディレクトリとクレデンシャルファイル作成  
AWSにアクセスする際に自動的に参照され、認証を行う際に使用される
`$ mkdir ~/.aws`
`$ vim ~/.aws/credentials`
```
[default]
aws_access_key_id = xxxxx
aws_secret_access_key = xxxxx
```

## Dockerマシンでインスタンス作成
`$ docker-machine create --driver amazonec2 --amazonec2-open-port 8080 --amazonec2-region ap-northeast-1 aws-sandbox`
- driverの設定
- 起動したインスタンスのポートを外部に公開
- リージョンの指定
- ホスト名（インスタンス名）

## Dockerホスト上でコンテナを起動
`$ eval $(docker-machine env aws-sandbox)`
- 操作対象のホスト（aws-sandbox）

`$ docker-machine ls`  
- コンテナの起動
`$ docker run -d -p 8080:80 --name webserver <image>` 
    - webserver: コンテナ名

- IPの確認
`$ docker-machine ip aws-sandbox`

- コンテナの停止
`$ docker-machine stop aws-sandbox`

- Docker ホストの削除
`$ docker-machine rm aws-sandbox`




