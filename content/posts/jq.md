---
title: про json в консоли
date: "2020-04-24 14:29:51"
---

С помощью утилиты [jq](https://stedolan.github.io/jq/).

### Установка в windows с помощью chocolatey

```bash
choco i -y jq
```

### Форматирование json

```bash
echo '{"foo": "lorem", "bar": "ipsum"}' | jq

# или

echo '{"foo": "lorem", "bar": "ipsum"}' | jq '.'
```

Результат

```json
{
  "foo": "lorem",
  "bar": "ipsum"
}
```

Или можно натравить на curl запрос

```bash
curl -sSL -X GET "https://httpbin.org/json" -H "accept: application/json" | jq
```

```json
{
  "slideshow": {
    "author": "Yours Truly",
    "date": "date of publication",
    "slides": [
      {
        "title": "Wake up to WonderWidgets!",
        "type": "all"
      },
      {
        "items": [
          "Why <em>WonderWidgets</em> are great",
          "Who <em>buys</em> WonderWidgets"
        ],
        "title": "Overview",
        "type": "all"
      }
    ],
    "title": "Sample Slide Show"
  }
}
```

### Преобразование `[{ "a": "a" }, { "b": "b" }]` в `{ "a": "a", "b": "b" }`

```bash
echo '[{ "a": "a" }, { "b": "b" }]' | jq add
```
