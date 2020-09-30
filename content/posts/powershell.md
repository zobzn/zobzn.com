---
title: powershell
date: "2020-09-30 23:01:31"
---

Узнать ip по названию домена

```powershell
Resolve-DnsName "google.com"
```

Скачать файл

```powershell
(New-Object -TypeName System.Net.WebClient).DownloadFile("https://httpbin.org/json", "output-file.json")
```

Удалить/установить appx приложение

```powershell
Get-AppxPackage *ubuntu* | Remove-AppxPackage
Add-AppxPackage wsl-ubuntu-2004.appx
```
