// if (false) {
//   const tmp = require.context("./posts", true, /\.md$/);

//   const items = tmp
//     .keys()
//     .map(k => {
//       return {
//         slug: k.substr(2).split(/[\.\/]/)[0],
//         title: tmp(k).data.title || null,
//         date: tmp(k).data.date || null
//       };
//     })
//     .sort((a, b) => {
//       if (a.date < b.date) {
//         return 1;
//       } else if (a.date > b.date) {
//         return -1;
//       } else {
//         return 0;
//       }
//     });

//   console.log(JSON.stringify(items));
// }

module.exports = [
  {
    slug: "mkcert",
    title: "Создание валидного https сертификата для локального домена",
    date: "2019-12-08 20:18:42"
  },
  {
    slug: "razdat-internet-po-wifi-windows",
    title: "Раздача интернета по wifi из windows",
    date: "2019-12-02 13:43:56"
  },
  {
    slug: "terraform-hetzner-cloud",
    title: "Быстрый старт с terraform и hetzner cloud",
    date: "2019-11-23 10:47:34"
  },
  {
    slug: "css-grid-layout",
    title: "css grid layout",
    date: "2019-11-18 17:09:20"
  },
  {
    slug: "ssh-keygen",
    title: "Генерация ssh ключей",
    date: "2019-11-17 12:21:05"
  },
  {
    slug: "http-tunnel-to-localhost",
    title: "http тоннель к localhost",
    date: "2019-11-17 12:13:21"
  },
  {
    slug: "mini-http-server-for-dev",
    title: "Мини http сервер на скорую руку",
    date: "2019-11-17 09:12:34"
  },
  {
    slug: "adaptivnaya-verstka-bez-media-zaprosov",
    title: "Адаптивная верстка без медиа запросов",
    date: "2019-09-10 19:21"
  },
  {
    slug: "responsive-video",
    title: "Responsive video с фиксированным соотношением сторон",
    date: "2019-09-08 17:42:51"
  },
  { slug: "parcel", title: "Упаковщик parcel", date: "2019-09-08 17:20:25" },
  {
    slug: "adaptivnyy-razmer-shrifta-s-ogranicheniem",
    title: "Адаптивный размер шрифта с ограничением",
    date: "2019-08-31 11:18:23"
  },
  {
    slug: "git-cheatsheet",
    title: "Шпаргалка по git",
    date: "2019-08-11 06:20:22"
  },
  {
    slug: "vychislitelnaya-slozhnost-algoritmov",
    title: "Вычислительная сложность алгоритмов",
    date: "2019-08-10 15:41:32"
  },
  {
    slug: "poleznosti-v-docker",
    title: "Полезности в docker",
    date: "2019-07-26 16:04:15"
  },
  {
    slug: "poleznosti-v-javascript",
    title: "Полезности в javascript",
    date: "2019-02-12 08:24:02"
  },
  {
    slug: "stili-zavisyashchie-ot-yazyka-stranicy",
    title: "Стили, зависящие от языка страницы",
    date: "2017-02-16 21:21:47"
  },
  {
    slug: "spisok-komand-v-skaype",
    title: "Список команд в скайпе",
    date: "2017-02-16 20:25:48"
  },
  {
    slug: "kontribyuting-v-github-proekty",
    title: "Контрибьютинг в github проекты",
    date: "2017-01-25 21:40:15"
  },
  {
    slug: "kak-ubit-zavisshiy-servis-windows",
    title: "Как убить зависший сервис windows",
    date: "2016-06-20 19:43:40"
  },
  {
    slug: "nagruzochnoe-testirovanie-servera-s-pomoshchyu-apachebench-ab",
    title: "Нагрузочное тестирование сервера с помощью ApacheBench (ab)",
    date: "2016-02-28 17:37:30"
  },
  {
    slug: "avtomaticheskaya-rasstanovka-perenosov-slov",
    title: "Автоматическая расстановка переносов слов",
    date: "2016-01-03 16:20:37"
  },
  {
    slug: "opredelenie-tekushchego-domena-i-poddomena-v-javascript",
    title: "Определение текущего домена и поддомена в javascript",
    date: "2015-07-13 22:01:08"
  },
  {
    slug: "chitabelnyj-razmer-fajla-v-php",
    title: "Читабельный размер файла в php",
    date: "2015-07-02 19:56:52"
  },
  {
    slug: "nginx-kak-servis-v-windows",
    title: "Nginx как сервис в windows",
    date: "2015-05-12 22:33:05"
  },
  {
    slug: "redis-kak-servis-v-windows",
    title: "Redis как сервис в windows",
    date: "2015-05-04 16:22:54"
  },
  {
    slug: "speczsimvoly-v-css-content",
    title: "Спецсимволы в css content",
    date: "2015-05-04 10:32:57"
  },
  {
    slug: "lyubimye-plaginy-gulp",
    title: "Любимые плагины gulp",
    date: "2015-04-28 15:38:57"
  },
  {
    slug: "poleznosti-v-linux",
    title: "Полезности в linux",
    date: "2015-01-20 14:24:06"
  },
  {
    slug: "czentrirovanie-elementa-vnutri-drugogo-elementa",
    title: "Центрирование элемента внутри другого элемента",
    date: "2014-12-07 16:32:37"
  },
  {
    slug: "futer-prizhatyj-k-nizu-straniczy",
    title: "Футер, прижатый к низу страницы",
    date: "2014-09-12 23:57:55"
  },
  {
    slug: "testovaya-zaglushka-sendmail-dlya-php",
    title: "Тестовая заглушка sendmail для php",
    date: "2014-08-16 00:45:23"
  },
  {
    slug: "poleznosti-v-svn",
    title: "Полезности в svn",
    date: "2014-07-25 12:16:25"
  },
  {
    slug: "ten-bloka-so-skrollom",
    title: "Тень блока со скроллом",
    date: "2014-07-02 22:33:52"
  },
  {
    slug: "perestanovka-blokov-mestami-vrashheniem",
    title: "Перестановка блоков местами вращением",
    date: "2014-07-01 14:02:36"
  },
  {
    slug: "perestanovka-blokov-mestami-s-pomoshhyu-css-ne-ispolzuya-skriptov",
    title: "Перестановка блоков местами с помощью css, не используя скриптов",
    date: "2014-06-16 23:50:40"
  },
  {
    slug: "knopka-ochistki-teksta-v-inpute",
    title: "Кнопка очистки текста в инпуте",
    date: "2014-06-15 23:44:10"
  },
  {
    slug: "podcherkivanie-gradientami",
    title: "Подчеркивание градиентами",
    date: "2014-03-23 23:23:39"
  },
  {
    slug: "instrumentarij-php-razrabotchika-pod-windows",
    title: "Инструментарий php разработчика под windows",
    date: "2014-03-12 22:41:27"
  },
  {
    slug: "poleznye-dopolneniya-dlya-firefox",
    title: "Полезные дополнения для Firefox",
    date: "2014-03-10 22:54:33"
  },
  {
    slug: "opredelenie-brauzera-v-css-xaki",
    title: "Определение браузера в css (хаки)",
    date: "2014-03-05 23:37:08"
  },
  { slug: "css-clearfix", title: "css clearfix", date: "2014-03-05 23:34:53" },
  {
    slug: "poleznosti-v-xslt",
    title: "Полезности в XSLT",
    date: "2014-03-05 23:09:25"
  },
  {
    slug: "poleznosti-v-css",
    title: "Полезности в css",
    date: "2014-03-05 23:09:09"
  },
  {
    slug: "symfony-pamyatka-po-formatirovaniyu-daty",
    title: "symfony1: памятка по форматированию даты",
    date: "2014-03-05 23:08:44"
  },
  {
    slug: "poleznosti-v-ubuntu-10-10",
    title: "Полезности в Ubuntu 10.10",
    date: "2014-03-05 23:08:13"
  },
  {
    slug: "poleznosti-v-mysql",
    title: "Полезности в mysql",
    date: "2014-03-05 22:54:10"
  },
  {
    slug: "ogranichenie-skorosti-otdachi-v-apache",
    title: "Ограничение скорости отдачи в apache",
    date: "2014-03-05 22:52:39"
  },
  {
    slug: "google-closure-compiler",
    title: "Google Closure Compiler",
    date: "2014-01-13 23:04:29"
  },
  {
    slug: "php-phar-arxivy-v-ubuntu-1104",
    title: "php phar архивы в ubuntu 11.04",
    date: "2014-01-13 23:03:05"
  },
  {
    slug: "opredelenie-versii-ie-v-javascript",
    title: "Определение версии IE в javascript",
    date: "2014-01-13 23:02:31"
  },
  {
    slug: "sozdanie-simvolicheskix-ssylok-v-windows",
    title: "Создание символических ссылок в windows",
    date: "2014-01-13 23:01:38"
  }
];
