docker run \
    --name nginx \
    --restart always \
    -p 80:80 \
    -v "//c/nginx:/etc/nginx/conf.d" \
    nginx:latest

docker run \
    --restart always \
    react

docker run \
    --restart \
    fastapi
