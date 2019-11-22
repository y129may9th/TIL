
# ローカルで k8s を動かす
`$ brew cask install minikube`

`$ minikube start`
ここでエラー

```
😄  minikube v1.3.1 on Darwin 10.14.6
💿  Downloading VM boot image ...
minikube-v1.3.0.iso.sha256: 65 B / 65 B [--------------------] 100.00% ? p/s 0s
minikube-v1.3.0.iso: 131.07 MiB / 131.07 MiB [-------] 100.00% 7.32 MiB p/s 18s
🔥  Creating virtualbox VM (CPUs=2, Memory=2000MB, Disk=20000MB) ...
E0826 13:03:22.575027   43156 start.go:723] StartHost: create: precreate: VBoxManage not found. Make sure VirtualBox is installed and VBoxManage is in the path

💣  Unable to start VM
❌  Error: [VBOX_NOT_FOUND] create: precreate: VBoxManage not found. Make sure VirtualBox is installed and VBoxManage is in the path
💡  Suggestion: Install VirtualBox, ensure that VBoxManage is executable and in path, or select an alternative value for --vm-driver
📘  Documentation: https://www.virtualbox.org/wiki/Downloads
⁉️   Related issues:
▪ https://github.com/kubernetes/minikube/issues/3784
▪ https://github.com/kubernetes/minikube/issues/3776

😿  If the above advice does not help, please let us know:
👉  https://github.com/kubernetes/minikube/issues/new/choose
```

`[VBOX_NOT_FOUND]のエラーなので、Virtualboxをインストール`
https://www.virtualbox.org/

### Virtualbox とは
```
PCに仮想環境を構築して、他のOSをインストールすることができる仮想化ソフト
例えば、
MacOS内にLinux、WindowsOSを切り替えて使用できる。
```

- Virtualboxインストールできないエラーがでる
```
Mac OS High Sierraのセキュリティ機能が発動していた。
[Tips macでVirtualBoxがインストールエラーになる(セキュリティーとプライバシーの許可が出来ない)場合の対処法 ](https://shoji014.com/virtualbox-error/)
```

### なぜVirtualboxが必要なのか?
```
- KubernetesはLinux上でコンテナクラスタを構築するためのソフトウェアで、基本的にはLinux上でしか動作しない。
- Minikubeでは仮想化ソフトウェアを使ってLinuxがインストールされた仮想マシンを作成し、そこでKubernetesクラスタを動作させる仕組みになっている。
そのため、仮想化ソフトウェア(Virtualbox)さえ用意すればmacOS上でも利用できる。
```

# 起動

- awskey

`$ bash aws.sh`

KEYをコピーして貼り付け


- クラスタ変更・追加

`$ aws eks --region ap-northeast-1 update-kubeconfig --name ferret-staging-cluster`

コンテキストの向き先確認
```
$ kubectx

$ aws eks --region ap-northeast-1 update-kubeconfig --name ferret-production-cluster

$ kubectl get pods

$ kubectl exec -it production-cluster -c app bash
```
[Kubernetesを手元で試せる「Minikube」「MicroK8s」とは](https://www.atmarkit.co.jp/ait/articles/1905/23/news006.html)


---
# rails c
```
Show routs -G hoge hogez

link_to => path
Redirect_to => URL

App.url_for([])
```
