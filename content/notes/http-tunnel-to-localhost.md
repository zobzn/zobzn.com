---
title: http тоннель к localhost
date: "2019-11-17 12:13:21"
---

### Вариант на 2026 — с помощью cloudflared

```bash
brew install cloudflared
cloudflared tunnel --url http://localhost:3000
```

### Варианты для 2019 — ngrok и localtunnel

С помощью ngrok

```bash
npx ngrok http 80
```

С помощью localtunnel

```bash
npx localtunnel --port 80
```
