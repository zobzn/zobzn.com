---
title: "choose-file"
description: "Маленькая библиотека для вызова диалога выбора файлов для загрузки на сервер"
layout: "portfolio"
date: "2016-01-24"
---

Маленькая библиотека для вызова диалога выбора файлов для загрузки на сервер.

https://github.com/zobzn/choose-file

Установка

```bash
npm install --save choose-file
```

Пример использования

```javascript
const chooseFile = require("choose-file");

document.querySelector(".choose-file-demo-link").addEventListener(
  "click",
  function () {
    choose_file({
      multiple: true,
      accept: "image/*",
      success: function (input) {
        const filenames = input.files
          ? [...input.files].map((item) => item.name)
          : [input.value.replace(/(.*[\\/])?([^\\/]+)$/, "$2")];

        console.log("You have chosen: " + filenames.join(", "));

        // now you can do whatever you want with files
        // upload to server, etc.
      },
    });
  },
  false
);
```
