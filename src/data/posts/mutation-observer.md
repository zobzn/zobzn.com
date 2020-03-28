---
title: Замечательный Mutation Observer
date: "2020-03-27 10:18"
---

MutationObserver очень заинтересовал меня для одного из сценариев ленивой загрузки модулей в javascript:
когда какой-то модуль нужен только для работы с каким-то конкретным элементом,
которого может не быть на странице изначально, но который может появиться впоследствии (как вариант, после какого-нибудь ajax запроса).

Это также может быть полезно, например, в блогах, когда в одних записях нужен какой-нибудь слайдер, в других фотогалерея, в третьих видеоплеер и так далее. И вместо того, чтобы заранее раздувать бандл всеми возможными вариантами, просто подгружаем необходимые модули в случае необходимости.

Вот такой набросок

```javascript
function waitForSelectorOnce(selector) {
  return new Promise((resolve) => {
    let observer = null;
    let checker = () => {
      if (document.querySelector(selector)) {
        observer && observer.disconnect();
        resolve();
        return true;
      } else {
        return false;
      }
    };

    // проверяем, может быть селектор сразу имеется на странице
    // тогда и не надо инициализировать MutationObserver
    if (!checker()) {
      observer = new MutationObserver(checker);
      observer.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }
  });
}

waitForSelectorOnce(".gallery").then(() => import("./gallery"));
waitForSelectorOnce(".fotorama").then(() => import("./fotorama"));
waitForSelectorOnce("a[href$='.mp3']").then(() => import("./audio-player"));
```

Работает даже в ie 11.

По хорошему, надо еще использовать throttle.
И промис тут скорее всего избыточен, можно просто передать коллбэк при вызове функции.
Ну а вообще, это только набросок. Production ready код я никому не обещал.
