---
title: Определение версии IE в javascript
date: "2014-01-13 23:02:31"
---

### IE 10

```javascript
document.all && window.atob;
```

### IE 9+

```javascript
document.all && document.addEventListener;
```

### IE 8+

```javascript
document.all && document.querySelector;
```

### IE 7+

```javascript
document.all && window.XMLHttpRequest;
```

### IE 6+

```javascript
document.all && document.compatMode;
```
