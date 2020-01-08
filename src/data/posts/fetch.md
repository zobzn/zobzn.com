---
title: Примеры использования fetch
date: "2020-01-07 23:44:16"
---

### Чтение метаданных ответа

```js
fetch("https://httpbin.org/json").then(response => {
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers.get("Content-Type"));
  console.log(response.headers.get("Date"));
});
```

### Чтение текста ответа

```js
fetch("https://httpbin.org/html")
  .then(response => response.text())
  .then(data => console.log(data));
```

### Чтение json ответа

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

### Отправка json

```js
fetch("https://httpbin.org/post", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8"
  },
  body: JSON.stringify({ k: "v" })
});
```

### Отправка формы (`multipart/form-data`)

```js
const form = document.querySelector("form");

fetch("https://httpbin.org/post", {
  method: "POST",
  body: new FormData(form)
});
```

### Отправка формы (`application/x-www-form-urlencoded`) вариант 1

```js
fetch("https://httpbin.org/post", {
  method: "POST",
  body: new URLSearchParams({ k1: "v1", k2: "v2" })
});
```

### Отправка формы (`application/x-www-form-urlencoded`) вариант 2

```js
fetch("https://httpbin.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body: "k1=v1&k2=v2"
  // body: qs.stringify({ k1: "v1", k2: "v2" })
});
```

### Отправка отдельного файла из формы

```js
const input = document.querySelector('input[type="file"]');
const data = new FormData();
data.append("file", input.files[0]);

fetch("https://httpbin.org/post", {
  method: "POST",
  body: data
});
```

### Отправка файла, созданного на лету

```js
const file = new Blog(["Проверка"], { type: "text/plain" });
const data = new FormData();
data.append("file", file, "hello.txt");

fetch("https://httpbin.org/post", {
  method: "POST",
  body: data
});
```

### Отправка cookies

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

### Basic авторизация

```js
function base64(str) {
  if (Buffer && Buffer.from) {
    return Buffer.from(username + ":" + password).toString("base64");
  } else if (btoa) {
    return btoa(str);
  } else {
    throw new Error("");
  }
}

fetch("https://httpbin.org/basic-auth/user/passwd", {
  headers: {
    Authorization: "Basic " + base64("user:passwd")
  }
});
```

### Отмена запроса

```js
const abortController = new AbortController();

fetch("https://httpbin.org/", {
  signal: abortController.signal
}).catch(err => {
  if (err.name == "AbortError") {
    console.log("Aborted!", err);
  } else {
    throw err;
  }
});

setTimeout(() => abortController.abort(), 0);
```

### Обработка http статусов ответа

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
