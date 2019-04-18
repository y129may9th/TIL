## git Add の内容を選ぶ
- 差分を見る
`$ git diff b52b2ea`  
- Add するファイルを記述  
`$ git add app/controllers/tasks_controller.rb`
- 差分チェック
`$ git diff`
- commit -> push -> PR

### git Add していないファイルをふき飛ばす
`$ git reset --hard && git clean -df`
`$ git status`
- Untracked files:　に残っている時  
`$ git clean -df`
- PullRequest
`$ git checkout master`  
`$ git pull`  

