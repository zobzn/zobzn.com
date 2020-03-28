---
title: Немножечко nodemon для nextjs
date: "2020-03-20 23:11:20"
---

```bash
npm install --save-dev nodemon
```

###### `package.json`

```json
{
  "scripts": {
    "dev": "nodemon --exec \"next dev\""
  }
}
```

###### `nodemon.json`

```json
{
  "verbose": false,
  "watch": [
    ".babelrc",
    "next.config.js",
    "nodemon.json",
    "package.json",
    "package-lock.json",
    "postcss.config.js"
  ],
  "ignore": [".next/*", "node_modules/*", "src/*"]
}
```
