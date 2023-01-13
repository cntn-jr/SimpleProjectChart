FROM nginx:1.18

ENV TZ=Asia/Tokyo

# nginx config file
COPY ./docker/nginx/*.conf /etc/nginx/conf.d/

WORKDIR /var/www/html