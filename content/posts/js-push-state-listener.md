---
title: js history.pushState listener
date: "2020-10-28 23:39:58"
---

```js
document.head.appendChild(document.createElement("script")).text =
  "(" +
  function () {
    // injected DOM script is not a content script anymore,
    // it can modify objects and functions of the page
    var _pushState = history.pushState;
    history.pushState = function (state, title, url) {
      _pushState.call(this, state, title, url);
      window.dispatchEvent(new CustomEvent("state-changed", { state }));
    };
    // repeat the above for replaceState too
  } +
  ")(); this.remove();"; // remove the DOM script element

// And here content script listens to our DOM script custom events
window.addEventListener("state-changed", function (e) {
  console.log("History state changed", e.state, location.hash);
  doSomething();
});
```
