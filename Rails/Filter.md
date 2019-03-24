## Filter で重複を避ける（DRY: Don't Repeat Your Self）
`before_action :set_task, only: [:show, :edit, :update, :destroy]`
```
def set_task
    @task = current_user.tasks.find(params[:id])
end
```

