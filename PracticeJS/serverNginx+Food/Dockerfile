FROM debian:buster

RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install vim \
nginx php7.3-fpm mariadb-server wget
RUN apt-get -y install php7.3 php-mysql php-fpm php-pdo php-gd php-cli php-mbstring

COPY srcs/default /etc/nginx/sites-available/
COPY srcs/start.sh ./
COPY project2 /var/www/html/project2

WORKDIR /var/www/html/

RUN chown -R www-data:www-data *

EXPOSE 80 443

CMD ["/bin/bash", "/start.sh"]