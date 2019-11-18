---
title: css grid layout
date: "2019-11-18 17:09:20"
---

Вот такой небольшой пример покрывает 90% случаев моего использования css grid.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: #f0f0f0;
  font-size: 16px;
  padding: 0;
  margin: 0;
}

.layout {
  min-height: 100vh;
  max-width: 1200px;
  padding: 15px 0;
  margin: 0 auto;
  grid-gap: 15px;
  display: grid;
  gap: 15px;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";
}

header,
footer,
main,
aside {
  background: #fff;
  display: block;
  padding: 15px;
}

header {
  grid-area: header;
}

footer {
  grid-area: footer;
}

main {
  grid-area: main;
}

aside {
  grid-area: nav;
}

@media (min-width: 40em) {
  .layout {
    grid-template-columns: 12em auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header header"
      "nav main"
      "nav footer";
  }
}
```

```html
<div class="layout">
  <header>header</header>
  <main>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore debitis
    quasi itaque sed, doloremque magni provident animi soluta enim, optio quia
    officia quos consectetur. Ipsam asperiores beatae sit quisquam
    exercitationem? Veniam possimus exercitationem voluptas molestias?
    Distinctio, impedit quia! Itaque cupiditate cumque laudantium sed odit nobis
    possimus quo quae iusto eveniet, blanditiis excepturi inventore accusantium
    asperiores provident soluta sunt corporis minus. Sit animi incidunt ut quia
    exercitationem, ipsa in nisi, sunt beatae voluptatum cum. Velit perspiciatis
    quidem similique, maiores saepe earum, laudantium sapiente labore asperiores
    natus impedit nemo ipsa non quibusdam.
  </main>
  <aside>
    nav<br />
    nav<br />
    nav<br />
    nav<br />
    nav
  </aside>
  <footer>footer</footer>
</div>
```

Результат

![пример лайаута на css grid](/images/css-grid-layout/css-grid-layout-example.png)
