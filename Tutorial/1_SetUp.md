# SetUp
- git clone
- rbenv install x.x.x
- Ruby
2.6.3
- rbenv local x.x.x 
- gem install bundler
- rbenv exec bundle init
- Rails 
5.1.6
- bundle install --path vendor/bundle
- be rails new .
- Gemfile修正
- bundle install --without production
- bundle update
- be rails s

## 立ち上げる (port指定)
- $ lsof -i:3000
- $ be rails s -p 3001

## heroku
- $ git add
- $ git push
- $ heroku create
- $ git push heroku master
- $ heroku open

## heroku で error
- $ heroku run rails console

