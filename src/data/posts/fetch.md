---
title: Памятка по fetch
date: "2020-01-07 23:44:16"
---

## Чтение метаданных ответа

```js
fetch("https://httpbin.org/json").then(response => {
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers.get("Content-Type"));
  console.log(response.headers.get("Date"));
});
```

## Чтение текста ответа

```js
fetch("https://httpbin.org/html")
  .then(response => response.text())
  .then(data => console.log(data));
```

## Чтение json ответа

```js
fetch("https://httpbin.org/json", {
  headers: {
    Accept: "application/json"
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(ex => console.log("parsing failed", ex));
```

## Отправка json

```js
fetch("https://httpbin.org/post", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify({ k: "v" })
  // или qs.stringify для более сложных объектов
});
```

## Отправка формы

```js
const form = document.querySelector("form");

fetch("https://httpbin.org/post", {
  method: "POST",
  body: new FormData(form)
});
```

## Отправка отдельного файла из формы

```js
const input = document.querySelector('input[type="file"]');
const data = new FormData();
data.append("file", input.files[0]);

fetch("https://httpbin.org/post", {
  method: "POST",
  body: data
});
```

## Отправка файла, созданного на лету

```js
const file = new Blog(["Проверка"], { type: "text/plain" });
const data = new FormData();
data.append("file", file, "hello.txt");

fetch("https://httpbin.org/post", {
  method: "POST",
  body: data
});
```

## Отправка cookies

Если нужна отправка cookies, то лучше не полагаться на значение по умолчанию,
а явно указывать `credentials: "same-origin"` (либо `include` при CORS запросах).
Поскольку в предыдущих версиях спецификации fetch значением по умолчанию было `omit`, а не `same-origin`.

```js
fetch("https://httpbin.org/post", {
  method: "POST",
  credentials: "same-origin",
  body: data
});
```

## Отмена запроса

```js
const abortController = new AbortController();

fetch("https://httpbin.org/post", {
  method: "POST",
  signal: abortController.signal
});

setTimeout(() => abortController.abort(), 0);
```

## Обработка http статусов ответа

У fetch есть особенность, из-за которой он не генерирует ошибку в зависимости от http статуса ответа.
Это поведение можно изменить, например, таким сопособом.

```js
function checkResponseStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

fetch("https://httpbin.org/json")
  .then(checkResponseStatus)
  .then(res => res.json())
  .then(data => console.log("request succeeded with JSON response", data))
  .catch(error => console.log("request failed", error));
```

## Краткая сводка опций запроса

- method - GET, POST, PUT, DELETE, HEAD
- url - URL of the request
- headers - associated Headers object
- referrer - referrer of the request
- mode - cors, no-cors, same-origin
- credentials - should cookies go with the request? same-origin, include, omit
- redirect - follow, error, manual
- integrity - subresource integrity value
- cache - cache mode (default, reload, no-cache)

## Краткая сводка полей ответа

- type - basic, cors
- url
- useFinalURL - Boolean for if url is the final URL
- ok - Boolean for successful response (status in the range 200-299)
- status - status code (ex: 200, 404, etc.)
- statusText - status code (ex: OK)
- headers - Headers object associated with the response.
