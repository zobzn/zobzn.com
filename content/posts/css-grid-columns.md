---
title: Примеры колонок с css grid
date: "2020-04-03 13:59:43"
---

<div class="mt-80"></div>

<style>
  .cell-example {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
    justify-items: center;
    align-items: center;
    border-radius: 3px;
    padding: 10px;
    display: grid;
  }
  .cell-example--x2 {
    grid-column: span 2;
  }
  .cell-example--y2 {
    grid-row: span 2;
  }
</style>

## Пример 1

3 колонки на всю ширину

```css
.grid-example-1 {
  grid-template-columns: repeat(3, 1fr);
  margin: 30px auto;
  grid-gap: 10px;
  display: grid;
}
```

<style>
.grid-example-1 {
  grid-template-columns: repeat(3, 1fr);
  margin: 30px auto;
  grid-gap: 10px;
  display: grid;
}
</style>

<div class="grid-example-1">
  <div class="cell-example">Ячейка 1</div>
  <div class="cell-example">Ячейка 2</div>
  <div class="cell-example">Ячейка 3</div>
  <div class="cell-example">Ячейка 4</div>
  <div class="cell-example">Ячейка 5</div>
</div>

<div class="mt-80"></div>

## Пример 2

3 колонки от 0 до 400px

```css
.grid-example-2 {
  grid-template-columns: repeat(3, minmax(0, 400px));
  justify-content: space-between;
  margin: 30px auto;
  grid-gap: 10px;
  display: grid;
}
```

<style>
.grid-example-2 {
  grid-template-columns: repeat(3, minmax(0, 400px));
  justify-content: space-between;
  margin: 30px auto;
  grid-gap: 10px;
  display: grid;
}
</style>

<div class="grid-example-2">
  <div class="cell-example">Ячейка 1</div>
  <div class="cell-example">Ячейка 2</div>
  <div class="cell-example">Ячейка 3</div>
  <div class="cell-example">Ячейка 4</div>
  <div class="cell-example">Ячейка 5</div>
</div>

<div class="mt-80"></div>

## Пример 3

Автоматическое количество колонок не уже 300px

```css
.grid-example-3 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 30px auto;
  grid-gap: 10px;
  display: grid;
}
```

<style>
.grid-example-3 {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 30px auto;
  grid-gap: 10px;
  display: grid;
}
</style>

<div class="grid-example-3">
  <div class="cell-example">Ячейка 1</div>
  <div class="cell-example">Ячейка 2</div>
  <div class="cell-example">Ячейка 3</div>
  <div class="cell-example">Ячейка 4</div>
  <div class="cell-example">Ячейка 5</div>
  <div class="cell-example">Ячейка 6</div>
  <div class="cell-example">Ячейка 7</div>
</div>

<div class="mt-80"></div>

## Пример 4

Жадные ячейки (как rowspan и colspan в таблицах)

```css
.grid-example-4 {
  grid-template-columns: repeat(3, 93px);
  grid-auto-rows: minmax(93px, auto);
  margin: 30px auto;
  grid-gap: 10px;
  display: grid;
}
.col-span-2 {
  grid-column: span 2;
}
.row-span-2 {
  grid-row: span 2;
}
```

<style>
.grid-example-4 {
  grid-template-columns: repeat(3, 93px);
  grid-auto-rows: minmax(93px, auto);
  margin: 30px auto;
  grid-gap: 10px;
  display: grid;
}
.grid-example-4 .cell-example {
  font-size: 15px;
}
.col-span-2 {
  grid-column: span 2;
}
.row-span-2 {
  grid-row: span 2;
}
</style>

<div class="grid-example-4">
  <div class="cell-example row-span-2">Ячейка 1</div>
  <div class="cell-example col-span-2">Ячейка 2</div>
  <div class="cell-example">Ячейка 3</div>
  <div class="cell-example row-span-2">Ячейка 4</div>
  <div class="cell-example col-span-2">Ячейка 5</div>
</div>

<div class="mt-80"></div>

## Пример 5

Меняем направление потока

```css
.grid-example-5 {
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: column;
  margin: 30px auto;
  grid-gap: 10px;
  display: grid;
}
```

<style>
.grid-example-5 {
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: column;
  margin: 30px auto;
  grid-gap: 10px;
  display: grid;
}
</style>

<div class="grid-example-5">
  <div class="cell-example">Ячейка 1</div>
  <div class="cell-example">Ячейка 2</div>
  <div class="cell-example">Ячейка 3</div>
  <div class="cell-example">Ячейка 4</div>
  <div class="cell-example">Ячейка 5</div>
  <div class="cell-example">Ячейка 6</div>
  <div class="cell-example">Ячейка 7</div>
  <div class="cell-example">Ячейка 8</div>
  <div class="cell-example">Ячейка 9</div>
  <div class="cell-example">Ячейка 10</div>
</div>
