---
title: Примеры использования curl
date: "2020-02-16 10:40:38"
---

GET запрос, отображение только тела ответа

```bash
curl -sSL -X GET https://httpbin.org/get
```

GET запрос, отображение и заголовков и тела ответа

```bash
curl -sSL -i -X GET https://httpbin.org/get
```

GET запрос, отображение только заголовков ответа

```bash
curl -sSL -I -X GET https://httpbin.org/get
```

GET запрос с подменой User Agent заголовка

```bash
curl -sSL -A "MyAwesomeUserAgent" https://httpbin.org/get
curl -sSL -A googlebot https://httpbin.org/get
```

GET запрос с добавлением своих заголовков

```bash
curl -sSL -X GET -H "X-My-Header: my-value" https://httpbin.org/get
```

GET запрос с basic authentication

```bash
curl -sSL --anyauth --user usr:pwd https://httpbin.org/basic-auth/usr/pwd
```

GET запрос с bearer authentication

```bash
curl -sSL -H 'Accept: application/json' -H "Authorization: Bearer SOMETOKENHERE" https://httpbin.org/bearer
```

GET запрос с куками

```bash
curl -sSL --cookie cookies.txt --cookie-jar cookies.txt https://httpbin.org/cookies
curl -sSL --cookie cookies.txt --cookie-jar cookies.txt https://httpbin.org/cookies/set/key1/val1
```

Скачивание файла

```bash
curl -sSL --output example.png https://httpbin.org/image/png
curl -sSL https://httpbin.org/image/png > example.png
```

POST запрос, отправка формы (`multipart/form-data`)

```bash
curl -sSL -X POST --form "some-key=some-value" --form "other-key=other-value" https://httpbin.org/post
```

POST запрос, отправка формы (`application/x-www-form-urlencoded`)

```bash
curl -sSL -X POST --data "some-key=some-value&other-key=other-value" https://httpbin.org/post
curl -sSL -X POST --data "some-key=some-value" --data "other-key=other-value" https://httpbin.org/post
```

POST запрос с отправкой `json`

```bash
curl -sSL -X POST -H 'Content-Type: application/json' --data '{"user":"user","pass":"pass"}' https://httpbin.org/post
```

POST отправка файлов (`multipart/form-data`)

```bash
curl -sSL -X POST -F 'img=@./example.png' https://httpbin.org/post
```

P.S. Во всех вышеуказанных запросах опции `-sSL` используются для подавления лишнего вывода `curl` и для следования за редиректами.
