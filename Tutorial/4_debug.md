# pry
```
ヘルプ
  help               コマンドの情報を表示

コンテキスト
  cd                 新しいコンテキスト（オブジェクトかスコープ）に移動
  find-method        現在のclass/module、ネームスペース内のメソッドを探す
  ls                 現在のスコープ内の変数やメソッドのリストを表示
  pry-backtrace      pryセッションのバックトレースを表示
  raise-up           現在のpryインスタンス外でExceptionを発生させる
  reset              Reset the repl to a clean state.
  watch              Expressionの値を確認し、変わったときにNotificationを表示する
  whereami           現在のコンテキスト周辺のコードを表示
  wtf?               直近のExceptionのバックトレースを表示

編集
  /^\s*!\s*$/        入力バッファをクリア
  amend-line         マルチラインモードでの入力ラインを修正
  edit               Invoke the default editor on a file.
  hist               コマンド入力の履歴を表示する
  play               Playback a string variable, method, line, or file as input.
  show-input         Show the contents of the input buffer for the current multi-line expression.

Introspection
  ri                 View ri documentation.
  show-doc           Show the documentation for a method or class.
  show-source        Show the source for a method or class.
  stat               View method information and set _file_ and _dir_ locals.

Gems
  gem-cd             Change working directory to specified gem's directory.
  gem-install        Install a gem and refresh the gem cache.
  gem-list           List and search installed gems.
  gem-open           Opens the working directory of the gem in your editor.

Commands
  import-set         Import a pry command set.
  install-command    Install a disabled command.

Aliases
  !!!                Alias for `exit-program`
  !!@                Alias for `exit-all`
  $                  Alias for `show-source`
  ?                  Alias for `show-doc`
  @                  Alias for `whereami`
  breakpoint         Alias for `break`
  breaks             Alias for `breakpoints`
  c                  Alias for `continue`
  clipit             Alias for `gist --clip`
  f                  Alias for `finish`
  file-mode          Alias for `shell-mode`
  history            Alias for `hist`
  n                  Alias for `next`
  quit               Alias for `exit`
  quit-program       Alias for `exit-program`
  reload-method      Alias for `reload-code`
  s                  Alias for `step`
  show-method        Alias for `show-source`

Input and output
  .<shell command>   All text following a '.' is forwarded to the shell.
  cat                Show code from a file, pry's input buffer, or the last exception.
  change-inspector   Change the current inspector proc.
  change-prompt      Change the current prompt.
  fix-indent         Correct the indentation for contents of the input buffer
  list-inspectors    List the inspector procs available for use.
  list-prompts       List the prompts available for use.
  save-file          Export to a file using content from the repl.
  shell-mode         Toggle shell mode. bring in pwd prompt and file completion.

Misc
  gist               Upload code, docs, history to https://gist.github.com/.
  pry-version        Show pry version.
  reload-code        Reload the source file that contains the specified code object.
  toggle-color       Toggle syntax highlighting.

Navigating pry
  !pry               Start a pry session on current self.
  disable-pry        Stops all future calls to pry and exits the current session.
  exit               Pop the previous binding.
  exit-all           End the current pry session.
  exit-program       End the current program.
  jump-to            Jump to a binding further up the stack.
  nesting            Show nesting information.
  switch-to          Start a new subsession on a binding in the current stack.

Prompts
  simple-prompt      Toggle the simple prompt.

```

# pry-rails
```
Rails
  recognize-path     どのルートにマッチするURLか確認する
  show-middleware    すべてのミドルウェアを表示する
  show-model         引数で指定したモデルを表示する
  show-models        すべてのモデルを表示する
  show-routes        すべてのルートを表示する
````
[Railsの開発効率をあげる - Pryを使ってRailsのコンソールをパワーアップ & デバッグをする](https://ruby-rails.hatenadiary.com/entry/20141024/1414081224)

[今更ながらPryについて色々と調べてみた(前編)](https://qiita.com/yudedako/items/29f3c64c25bffd8fc424)

[Ruby の 定番対話ツール pry 徹底攻略 #pry #ruby](https://qiita.com/tbpgr/items/12a60f2f9e3de61517b5

)
