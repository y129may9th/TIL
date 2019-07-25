# Docker Hub
- Docker イメージのレジストリサービス
- Docker イメージの公開、検索、ダウンロード  
https://hub.docker.com

## repository作成
Dockerイメージを自身のリポジトリにPUSHする  
1. レジストリーサーバー (DockerHubなどのレジストリをホスティングしているサーバ)  
`$ docker login`
1. DockerHubにタグ付け
`$ dicker tag <イメージ名>　<Docker ID>/<イメージ名>:<タグ名>`
1. DockerHubにpush
- レポジトリが空かの確認  
`$ docker push <Docker ID>/<イメージ名>:<タグ名> `


