# Dockerコミット
コンテナからimage作成

## docker commit コマンド
`$ docker commit <コンテナ名 or ID> <イメージ名>:<タグ名>`
- 存在するコンテナで新しいイメージ名、タグ名を指定する  
- コンテナの状態をイメージとして保存できる

### 注意
- コンテナ内で使ったコマンドは記録されない
- 通常
    - dockerimageを作る際にDockerfileで実行された各コマンドが記録される
    - dicker history で確認できる
    - DockerfileでビルドしたイメージはDockerFileでコマンド確認できる
- コンテナ内部で実行したコマンドはDocker historyで結果に出てこない

## docker history
`$ docker history <image名 or ID>`


