---
title: Зеркалирование git репозитория
date: "2020-04-24 14:29:51"
---

```bash
git clone --mirror https://bitbucket.org/user/repo repo.git
cd repo.git
git push --mirror https://github.com/user/repo
```
