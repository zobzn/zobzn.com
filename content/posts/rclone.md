---
title: Примеры использования rclone
date: 2020-05-19 10:16:21
draft: true
---

Установка rclone на windows с помощью [chocolatey](/choco)

```batch
choco install -y rclone
```

А если нужен функционал "монтирования", который меня сходу больше всего заинтересовал в rclone, то еще вот это

```batch
choco install -y winfsp
```

А дальше несколько примеров

### Копирование локальных папок

```batch
rclone --config rclone.conf copy src res
```

###### rclone.conf

```ini

```

### Монтирование aws s3 бакета как локальный диск

```batch
rclone -v --config rclone.conf mount s3:bucket-name Z:
```

###### rclone.conf

```ini
[s3]
type = s3
provider = AWS
env_auth = false
access_key_id = OIHOH7KFLAFL3KJFWLKW
secret_access_key = slkeg2lskj7ALKJHLkjhkjLKJKLJHlkjGLIUG7aB
region = eu-central-1
location_constraint = EU
```

### Монтирование sftp как локальный диск

```batch
rclone -v --config rclone.conf mount ssh: Z:
```

###### rclone.conf

```ini
[ssh]
type = sftp
host = 8.8.8.8
user = username
key_file = private.ssh
md5sum_command = md5sum
sha1sum_command = sha1sum
```

### Запуск локального ftp сервера для локальной папки

```batch
rclone -v --config rclone.conf --user user --pass pass --addr 127.0.0.1:2121 serve ftp ./data
```

###### rclone.conf

```ini

```

### Запуск локального ftp сервера для aws s3 бакета

```batch
rclone -v --config rclone.conf --user user --pass pass --addr 127.0.0.1:2121 serve ftp s3:bucket-name
```

###### rclone.conf

```ini
[s3]
type = s3
provider = AWS
env_auth = false
access_key_id = OIHOH7KFLAFL3KJFWLKW
secret_access_key = slkeg2lskj7ALKJHLkjhkjLKJKLJHlkjGLIUG7aB
region = eu-central-1
location_constraint = EU
```

### Запуск локального ftp сервера для sftp

```batch
rclone -v --config rclone.conf --user user --pass pass --addr 127.0.0.1:2121 serve ftp ssh:
```

###### rclone.conf

```ini
[ssh]
type = sftp
host = 8.8.8.8
user = username
key_file = private.ssh
md5sum_command = md5sum
sha1sum_command = sha1sum
```

### Запуск локального webdav сервера для aws s3 бакета

```batch
rclone -v --config rclone.conf --htpasswd ./htpasswd --addr 127.0.0.1:8080 serve webdav s3:bucket-name
```

###### rclone.conf

```ini
[s3]
type = s3
provider = AWS
env_auth = false
access_key_id = OIHOH7KFLAFL3KJFWLKW
secret_access_key = slkeg2lskj7ALKJHLkjhkjLKJKLJHlkjGLIUG7aB
region = eu-central-1
location_constraint = EU
```

###### .htpasswd

```
test:$apr1$T2bvzc6z$VmwQsV8LX9vKnYeTBE9Xk/
```

### Запуск локального webdav сервера для sftp

```batch
rclone -v --config rclone.conf --htpasswd ./htpasswd --addr 127.0.0.1:8080 serve webdav ssh:
```

###### rclone.conf

```ini
[ssh]
type = sftp
host = 8.8.8.8
user = username
key_file = private.ssh
md5sum_command = md5sum
sha1sum_command = sha1sum
```

###### .htpasswd

```
test:$apr1$T2bvzc6z$VmwQsV8LX9vKnYeTBE9Xk/
```
