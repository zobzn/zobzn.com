---
title: Создание исполняемого бинарного файла для nodejs приложения
date: "2020-05-15 14:01:11"
---

Сначала собираем проект в один js файл с помощью [@zeit/ncc](https://www.npmjs.com/package/@zeit/ncc).

```bash
npx @zeit/ncc build hello.js -m -o dist
```

Потом создаем из него исполняемый файл с помощью [pkg](https://www.npmjs.com/package/pkg) от vercel. Пример создания exe для windows.

```bash
npx pkg -t node10-win dist/index.js --out-path dist
```
