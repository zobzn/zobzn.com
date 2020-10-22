---
title: js dom helpers
date: "2020-10-23 00:51:41"
---

### Короткий document.querySelector

```js
function qs(selector, root) {
  return (root || document).querySelector(selector);
}

function qsa(selector, root) {
  return Array.prototype.slice.call(
    (root || document).querySelectorAll(selector)
  );
}
```

или так

```js
const qs = (selector, root) => (root || document).querySelector(selector);
const qsa = (selector, root) => [
  ...(root || document).querySelectorAll(selector),
];
```

или так

```js
const qs = (selector, root) => (root || document).querySelector(selector);
const qsa = (selector, root) =>
  Array.from((root || document).querySelectorAll(selector));
```

пример использования

```js
// один элемент
qs(".some-element");

// массив элементов
qsa(".some-elements").forEach(console.log);
```
