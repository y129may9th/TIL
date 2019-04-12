## Vim
- Vimが本来もつ力を掘り下げる
https://qiita.com/lighttiger2505/items/bf4755cd912f7272ba60 
 
- 保存せずに閉じる  
`:q!`

- 隠しファイルまで表示   
`ls -laFG`

- bash起動時に実行されるファイル  
`~/.bashrc`
- vimもおなじ  
`~/.vimrc`
- 変更したファイルを反映させる（再立ち上げでもいいが、できない時のため）  
`source ~/.bashrc` 
- ターミナル起動時に自動で読み込ませる  
HOMEに`.bash_profile`を作成
```
if [ -f ~/.bashrc ] ; then
. ~/.bashrc
fi
```


- `:vs`  
vimで開いているページを分割
- `cntrol ww`  
分割した画面を移動
- `:q`  
分割した画面を閉じる

- vim　ディレクトリ内でファイル作成  
`% title`

- タブ閉じる（vim閉じない）
`:E`

##  編集
- Undo
`u`
-Redo
`Ctr + r`

## コピー&ペースト
- 今いる行をコピー
`yy`
- カーソルの場所にペースト
`p`

