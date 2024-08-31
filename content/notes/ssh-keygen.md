---
title: Генерация ssh ключей
date: "2019-11-17 12:21:05"
---

```bash
# -q - "тихий" запуск, без вывода в консоль
# -t - тип ключа (rsa)
# -b - размер (4096 битов)
# -P - пароль (не использовать)
# -C - комментарий (email)
# -f - куда сохранить (в ~/.ssh папку)
ssh-keygen -q -t rsa -b 4096 -P '' -C 'username@gmail.com' -f ~/.ssh/id_rsa
```

создаст файлы:

- `~/.ssh/id_rsa` — приватный ключ в openssh формате
- `~/.ssh/id_rsa.pub` — публичный ключ в openssh формате

`id_rsa.pub` закидываем на сервер, куда будем коннектиться, в файл `~/.ssh/authorized_keys`

далее коннектимся

```bash
ssh -t -i ~/.ssh/id_rsa user@server
```
