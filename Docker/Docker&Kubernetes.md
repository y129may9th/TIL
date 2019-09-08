# マイクロサービス
ソフトウェアのアーキテクチャ
- スケールアウトしやすい（◯）
- 複雑化している（△）


# コンテナ
仮想化技術の総称
- リソースが良い
- ポータビリティ
- 早い軽い

## kubernetes
コンテナの管理
- スケールアウト
- 負荷分散
- ロールアップデート
  - ロールアウト
    バージョンアップ
  - ロールバック
   不具合会ったとき
- 可用性
- ネットワーク管理・ストレージ管理
- CPU/Memory リソース管理


## Docker
- ゲストOSに依存しない（ポータビリティ）

[Docker & Kubernetes入門 – (1) 概要編](https://www.youtube.com/watch?v=sEU5w6Muvy4)


# 基本
## クラスターの作成

## ログイン

## クラスターの情報取得（ローカルで動かす）
`cluster-config <name-of-cluster>`
- クラスターの設定情報を取ってくる
hoge.yaml
- 環境変数に追加
- ローカルからクラウドのk8sを操作できるようになった

### kubectl
- マネージドサービスからk8sを操作するコマンド
- nodeの情報をみる
`$ kubectl get nodes`

## DockerImage からアプリを取得してデプロイ
`$ kubectl run <アプリ> --image=<アカウント>/<リポジトリ>`

## アプリにアクセス
- ドメインなし
  - グローバルIP:ポート番号　
`$ kubectl expose deployment <App> --type="NodePort" --port=3000`
- NodePort
node一つ一つにIPを割り当て

## ノードで使用されているポート番号を調べる（サービスにアクセス）
`$ kubectl get service <App>`

## パブリックIPを知りたい
（インターネットに公開されている状態。アクセスするために必要な情報を取得。）

## スケールアウト（増やす）
`$ kubectl scale --replicas=10 deployment <App>`
初期構成と同じ構成で 9つの新しいPodを作成することで，desired state (今回は10)を満たすように動作。
`$ kubectl get pods`

## アプリケーションのバージョンあげる（アップデート）
`$ kubectl set image deployment/guestbook guestbook=ibmcom/guestbook:v2`

## ロールアウト（アップデートを元に戻す）
`$ kubectl rollout undo deployment guestbook`

## ステータスを確認
`$ kubectl rollout status deployment/guestbook`

## Deploymentを削除する
`$ kubectl delete deployment guestbook`

## Serviceを削除する
`$ kubectl delete service guestbook`



# 構成ファイル(.yaml)
## githubからリポジトリをクローン
## yamlファイルをデプロイ
### yamlファイルの構成
`$ kubectl create -f guestbook-deployment.yaml`

### pods の確認
`$ kubectl get pods -l app=guestbook`

### 構成ファイルの編集
`$ kubectl edit deployment guestbook-v1`


## データベースの接続
### RedisのDeploymentを作成
`$ kubectl create -f redis-master-deployment.yaml`
### RedisサーバーのPod動作を確認します
`$ kubectl get pods -l app=redis,role=master`
### Redis が使えるか
`$ kubectl exec -it <インスタンスNamw> redis-cli`
中に入って`ping`

## アプリケーションが redis-master Deploymentに接続できるように，Serviceを公開
### Redis masterにアクセスするサービスを作成
`$ kubectl create -f redis-master-service.yaml`
### データベースを使用するRedis serviceを発見できるようにguestbookを再起動
$ kubectl delete deploy guestbook-v1
$ kubectl create -f guestbook-deployment.yaml


[kube101-jp/workshop/Lab3 at master · capsmalt/kube101-jp](https://github.com/capsmalt/kube101-jp/tree/master/workshop/Lab3)

[Docker & Kubernetes入門 – (2) デモ編](https://www.youtube.com/watch?v=ii0X_1n4nRs)

