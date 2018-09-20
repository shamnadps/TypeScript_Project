docker build --no-cache . -t typescript-project:latest
docker tag typescript-project:latest registry.heroku.com/typescript-project/web:latest
docker push registry.heroku.com/typescript-project/web
heroku container:release web --app typescript-project
