# ローカルPCにDockerホストを作成

### Dockerホストのリストを表示
`$ docke-machine ls`

### Dockerホストの起動
`$ docker-machine create --driver virtualbox default`  
default（任意）というDockerホストを作成

### 作成したDockerホストに接続
`$ docker-machine env default`  
- まとめて環境変数を設定する
`$ eval $(docker-machine env default) `  

### ホストのIP確認
`$ docker-machine ip default`

### Dockerホストの起動、停止
`$ docker-machine stop default`  
`$ docker-machine start default`

### docker-machineの環境変数を削除するコマンド
`$ docker-machine env -u`  
`$ eval $(docker machine env -u)`






