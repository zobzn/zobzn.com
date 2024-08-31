---
title: chocolatey
date: "2020-05-17 23:36:54"
---

Я уже несколько лет пользуюсь chocolatey для установки и обновления программ в windows. И только сейчас добрался собрать в одном месте напоминалку по командам, чтоб не искать их постоянно в интернете.

Установка chocolatey (все в cmd.exe с правами администратора)

```batch
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

Мой мастхэв набор софта

```batch
@rem часто требуется при установки других программ
choco install -y vcredist-all
choco install -y dotnetfx

@rem всякое полезное консольное
choco install -y openssh
choco install -y micro
choco install -y sudo
choco install -y 7zip
choco install -y nano
choco install -y wget
choco install -y curl
choco install -y jq

@rem без него как без рук
choco install -y totalcommander

@rem браузер
choco install -y googlechrome

@rem для скриншотов
choco install -y greenshot

@rem люблю сворачивать окошки в system tray знаете ли
choco install -y rbtray

@rem базовый наборчик для работы
choco install -y git --params "/GitAndUnixToolsOnPath /WindowsTerminal /NoAutoCrlf"
choco install -y docker-desktop
choco install -y tortoisegit
choco install -y phpstorm
choco install -y vscode
choco install -y php
choco install -y gh

@rem да, уже есть 14 версия, но поскольку часто сталкиваюсь с firebase functions,
@rem в которых только node 10 в лучшем случае, поэтому по умолчанию так
choco install -y nvm
nvm install 10.20.1
nvm use 10.20.1

@rem по работе нужна именно 5.17 версия mysql, а не более новая 8
@rem поэтому закрепляю ее, чтоб не обновлялась
choco install -y mysql --version 5.7.18 --allow-downgrade
choco pin add -n=mysql --version 5.7.18

@rem сам сервер обычно запускаю в docker,
@rem а для быстрого доступа мне нужны только консольные команды (mysql, mysqladmin),
@rem поэтому сразу отключаю сервис mysql
cmd /c net stop MySQL
cmd /c sc delete MySQL

@rem пообщаться и фильмы посмотреть
choco install -y vlc --params "'/Language:en'"
choco install -y google-backup-and-sync
choco install -y telegram
choco install -y skype
choco install -y viber
```

А вот это ставлю иногда по мере надобности

```batch
choco install -y rclone winfsp
choco install -y kubernetes-cli
choco install -y terraform
choco install -y golang
choco install -y awscli
choco install -y mkcert
choco install -y mingw

choco install -y jre8
choco install -y jdk8
choco install -y jdk10
choco install -y gradle
choco install -y android-sdk

choco install -y postman
choco install -y insomnia-rest-api-client
choco install -y microsoft-windows-terminal
choco install -y libreoffice-fresh
choco install -y tortoisesvn
choco install -y qbittorrent
choco install -y teamviewer
choco install -y youtube-dl
choco install -y doublecmd
choco install -y windjview
choco install -y inkscape
choco install -y coretemp
choco install -y whatsapp
choco install -y firefox
choco install -y ffmpeg
choco install -y opera
choco install -y cpu-z
choco install -y hwinfo
choco install -y rufus
choco install -y steam
```

Ну еще несколько полезняшек.

Показать версии, всех установленных программ

```batch
choco list --localonly
```

Посмотреть, что из установленного можно обновить

```batch
choco outdated
```

Обновить все, что установлено

```batch
choco upgrade all -y
```

Указать, что такую-то программу хочу зафиксировать в определенной версии и не обновлять ее

```batch
choco install -y mysql --version 5.7.18 --allow-downgrade
choco pin add -n=mysql --version 5.7.18
```
