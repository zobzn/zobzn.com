---
title: Раздача интернета по wifi из windows
date: "2019-12-02 13:43:56"
---

Не часто, но все-таки случаются какие-то технические неполадки у провайдера.
Совсем без интернета сидеть не хорошо, поэтому приходится или раздавать интернет со смартфона или подключать 3g свисток (mts, peoplenet, ...).
Так вот в случае использования 3g свистка, подключенного к компьютеру,
чтоб поделиться интернетом через wifi например с женой,
его можно "раздать", создав виртуальную точку доступа на своем компьютере.
Ну а поскольку я заядлый виндузятник, то выручают вот такие вот команды:

```batch
rem Создать точку доступа с ssid my-wifi-ssid и паролем my-wifi-pass
netsh wlan set hostednetwork mode=allow ssid=my-wifi-ssid key=my-wifi-pass keyusage=persistent

rem Запустить точку доступа
netsh wlan start hostednetwork

rem Посмотреть состояние точки доступа
netsh wlan show hostednetwork

rem Остановить точку доступа
netsh wlan stop hostednetwork

rem Удалить точку доступа
netsh wlan set hostednetwork mode=disallow
```
