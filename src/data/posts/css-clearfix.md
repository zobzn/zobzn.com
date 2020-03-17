---
title: css clearfix
date: 2014-03-05 23:34:53
---

### метод 1

```css
.container {
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  zoom: 1;
}
```

### метод 2

```css
.container:before,
.container:after {
  content: " ";
  display: table;
}
.container:after {
  clear: both;
}
.container {
  zoom: 1;
}
```

### метод 3

```css
.container {
  overflow: hidden;
  display: block;
  zoom: 1;
}
```
