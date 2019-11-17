---
title: Генерация ssh ключей
date: "2019-11-17 12:21:05"
---

```bash
ssh-keygen -t rsa -b 4096 -C username@gmail.com
```

создаст файлы:  
`id_rsa` - приватный ключ в openssh формате  
`id_rsa.pub` - публичный ключ в openssh формате (закидываем на сервер, куда будем коннектиться)
