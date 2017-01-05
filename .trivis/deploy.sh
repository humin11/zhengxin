#! /usr/bin/env sh

scp -i .travis/cloud.key -P 4891 -r www/* root@122.115.52.16:/usr/share/nginx/html/

ssh -i .travis/cloud.key -p 4891 root@122.115.52.16 systemctl restart nginx
