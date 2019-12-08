---
title: Создание валидного https сертификата для локального домена
date: "2019-12-08 20:18:42"
---

Используем [mkcert](https://github.com/FiloSottile/mkcert) от Filippo Valsorda.

Например, для домена my.local, всех его поддоменов (wildcard), ну и еще для localhost, 127.0.0.1 и ::1 в подарок.

```bash
mkcert -install
mkcert -cert-file my.local.crt -key-file my.local.key my.local "*.my.local" localhost 127.0.0.1 ::1
```

P.S. Виндузятники могут установить mkcert с помощью chocolatey

```batch
choco install -y mkcert
```
