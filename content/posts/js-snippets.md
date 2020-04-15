---
title: Полезности в javascript
date: "2019-02-12 08:24:02"
---

Преобразовать NodeList в массив (и перебрать элементы)

```js
const listItems = document.querySelectorAll("li");

// по старинке
Array.prototype.slice.call(listItems).forEach((node) => {});

// или
[...listItems].forEach((node) => {});

// или
Array.from(listItems).forEach((node) => {});
```

Удалить повторы в массиве

```js
[...new Set([1, 3, 1, 5, 7])];

// или
Array.from(...new Set([1, 3, 1, 5, 7]));
```

Получить случайный элемент массива

```js
function getRandomArrayItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}
```

Функцинальная работа с объектами

```js
const objToEntries = Object.entries || (obj) => Object.keys(obj).map(key => [key, obj[key]]);
const objFromEntries = Object.fromEntries || (entries) => entries.reduce((obj, [key, val]) => Object.assign(obj, {[key]: val}), {});
const objMap = (obj, fn) => objFromEntries(objToEntries(obj).map(fn));

// примеры использования

objToEntries({k1: 'v1', k2: 'v2'});
// [['k1', 'v1'], ['k2', 'v2']]

objFromEntries([['k1', 'v1'], ['k2', 'v2']]);
// {k1: 'v1', k2: 'v2'}

objMap({k1: 'v1', k2: 'v2'}, ([k, v]) => ([k + '_', v + '_']));
// {k1_: 'v1_', k2_: 'v2_'}
```
