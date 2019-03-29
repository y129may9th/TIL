# Docker

[原理原則で理解するDocker](https://qiita.com/tajima_taso/items/28938415846dcc2e83ff)

- どう便利か
  - プロジェクトごとに環境を分けることが可能
  - 同じDocker file から起動したコンテナは同一の環境になるから差異が生じにくい
- コンテナの技術
  - Linuxコンテナの存在があった（ずっと前）
  - コンテナの技術が必要とされるようになった
    - 開発環境の複雑化（個人・中小・大企業）
    - 機能の継続的な追加、変更、アップデートを確実にデプロイ（納品して終わりではない）
- Docker
  - アプリケーションと実行環境を統合的に管理する
  
[入門 Docker](https://y-ohgi.com/introduction-docker/)
## Immutable Infrastructure

- インフラを不変なものとして扱う

- ライブラリのアップデートコードの追加

  →新しくスナップショットを作成

  →確実に動く

  ### Dockerfile

  - インフラの構成をコードに落とし込む（宣言するように環境を構築）

  ### image

  - 特定の時点のスナップショットの機能を提供
  - Dockerfile で定義・構築された環境をスナップショットにする

  ### 配布の容易性

## プロセスの仮想化

- プロセス
  - プログラムの実行単位

## nginx

- ミドルウェア（Web/AP/DB）
- Webサーバ(Apachと同じ)

## DockerHub

- image の公開（OS・ソフトウェア）

- OSの立ち上げ可能

  `$ docker pull ubuntu`

- さらにbashの中に入る（コマンド打てる）  

## Docker File

- Docker Imageを作成するツール
- Dockerfile -> ビルド -> スナップショット作成 (DockerImage)

## Docker Container

- スナップショットから起動したプロセス
- docker run -> docker Image -> Docker Container
- 状態5つ（IMAGE, RUNNING, STOPPING, PAUSED, DELETED）

## NetWork

- １コンテナ１プロセス
- 複数プロセス -> ネットワークを使用

## オーケストレーションツール

- 復数のDockerを動かすためツール
  - Dockerの管理/自動復旧
  - ネットワーク管理
  - オートスケール
  - 本番のワークロードに必要な機能

- ### docker-compose

  Docker社がホストするオーケストレーションツール

  ローカルでdockerを動かす際のデファクトスタンダードとなっているツール

- ### Kubernetes

  Google社が開発したOSSのオーケストレーションツール

  自由度が高く豊富なエコシステムがあり、コミュニティも非常に活発


  
