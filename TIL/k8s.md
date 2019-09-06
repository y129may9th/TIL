# k8s

$ bash aws.sh  
KEYをコピーして貼り付け

クラスタ変更・追加  
$ aws eks --region ap-northeast-1 update-kubeconfig --name ferret-staging-cluster

コンテキストの向き先確認  
```
$ kubectx

$ aws eks --region ap-northeast-1 update-kubeconfig --name ferret-production-cluster

$ kubectl get pods

$ kubectl exec -it production-cluster -c app bash
```
[Kubernetesを手元で試せる「Minikube」「MicroK8s」とは](https://www.atmarkit.co.jp/ait/articles/1905/23/news006.html)



# rails c
Show routs -G hoge hogez

link_to => path
Redirect_to => URL

App.url_for([])

