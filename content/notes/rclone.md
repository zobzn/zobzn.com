---
title: Примеры использования rclone
date: 2020-05-19 10:16:21
---

## Установка

### Windows

Установка rclone на windows с помощью [chocolatey](/choco)

```batch
choco install -y rclone
```

А если нужен функционал "монтирования", который меня сходу больше всего заинтересовал в rclone, то еще вот это

```batch
choco install -y winfsp
```

### macOS

```bash
brew install rclone
```

## Настройка

Интерактивная настройка конфигурации:

```bash
rclone config
```

Файл конфигурации находится в:
- Linux/macOS: `~/.config/rclone/rclone.conf`
- Windows: `%APPDATA%\rclone\rclone.conf`

## Работа с S3

### Просмотр доступных бакетов

```bash
rclone lsd my-s3:
```

### Создание бакета

```bash
rclone mkdir my-s3:bucket
```

### Просмотр содержимого бакета

```bash
rclone ls my-s3:my-bucket
```

### Скачивание бакета

```bash
# Копирование с проверкой контрольных сумм
rclone copy my-s3:my-bucket my-bucket --checksum --progress

# Синхронизация (удаляет файлы в назначении, которых нет в источнике)
rclone sync my-s3:my-bucket my-bucket --checksum --progress
```

### Монтирование S3 бакета

```bash
mkdir -p ./mount
rclone mount my-s3:my-bucket ./mount
```

### Монтирование aws s3 бакета как локальный диск (Windows)

```batch
rclone -v --config rclone.conf mount s3:bucket-name Z:
```

###### Пример rclone.conf для S3

```ini
[my-s3]
type = s3
provider = AWS
env_auth = false
access_key_id = XXXXXXXXXXXXXXXXXXXX
secret_access_key = YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
region = eu-central-1
location_constraint = EU
```

## Другие примеры

### Копирование локальных папок

```batch
rclone --config rclone.conf copy src res
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

### Запуск локального ftp сервера для aws s3 бакета

```batch
rclone -v --config rclone.conf --user user --pass pass --addr 127.0.0.1:2121 serve ftp s3:bucket-name
```

Использует тот же конфиг S3 что и выше.

### Запуск локального ftp сервера для sftp

```batch
rclone -v --config rclone.conf --user user --pass pass --addr 127.0.0.1:2121 serve ftp ssh:
```

Использует тот же конфиг SSH что и выше.

### Запуск локального webdav сервера для aws s3 бакета

```batch
rclone -v --config rclone.conf --htpasswd ./htpasswd --addr 127.0.0.1:8080 serve webdav s3:bucket-name
```

###### .htpasswd

```
test:$apr1$T2bvzc6z$VmwQsV8LX9vKnYeTBE9Xk/
```

Использует тот же конфиг S3 что и выше.

### Запуск локального webdav сервера для sftp

```batch
rclone -v --config rclone.conf --htpasswd ./htpasswd --addr 127.0.0.1:8080 serve webdav ssh:
```

Использует те же конфиги SSH и .htpasswd что и выше.
