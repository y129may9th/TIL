# 元に戻す
## generate
```
$ rails generate controller StaticPages home help
$ rails destroy  controller StaticPages home help
$ rails destroy model User

```
## migrate
- 一つ前の状態  
`$ rails db:rollback`
- 最初の状態に戻す  
` $ rails db:migrate VERSION=0`


