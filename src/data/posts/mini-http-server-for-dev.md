---
title: Мини http сервер на скорую руку
date: "2019-11-17 09:12:34"
---

Варианты на node.js

```bash
npx serve ./public -l 80
```

```bash
npx superstatic ./public --port 80
```

```bash
npx light-server -s ./public -p 80
```

```bash
npx http-server ./public -p 80
```

```bash
npx browser-sync ./public -w --port 80 --no-open
```

Вариант на php

```bash
php -S localhost:80  -t ./public
```
