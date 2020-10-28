---
title: nginx reverse proxy в docker-compose
date: "2020-10-28 23:29:40"
---

```yaml
version: "3"
services:
  proxy.docker:
    image: nginx
    ports:
      - 80:80
    environment:
      NGINX_CONFIG: |
        server {
          server_name 127.0.0.1;
          location / {
            proxy_pass https://host.docker.internal:3000/;
          }
          location /uuid {
            proxy_pass https://httpbin.org/uuid;
          }
          location /sockjs-node {
            proxy_pass https://host.docker.internal:3000;
            proxy_set_header Upgrade $$http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_http_version 1.1;
          }
        }
        server {
          server_name 127.0.0.2;
          location / { proxy_pass https://httpbin.org/json; }
        }
    command:
      - bash
      - -c
      - |
        echo "$$NGINX_CONFIG" > /etc/nginx/conf.d/proxy.conf
        nginx -g "daemon off;"
```
