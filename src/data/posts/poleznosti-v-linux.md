---
title: Полезности в linux
date: 2015-01-20 14:24:06

---
Просмотр содержимого текущей папки

```bash
ls -l
```

Поиск по тексту в файлах (регулярка)

    grep -iR 'hello,? world' *.txt

Найти файлы по маске

```bash
find . -type f -name "*.php"
find . -type f -regex '.*\.\(gif\|png\|jpg\|jpeg\)'
```

Найти картинки по маске с размером менее, чем 1024x768

```bash
find . -iname "*.jpg" -type f -exec identify -format '%w %h %i' '{}' \; | awk '$1<1024 || $2<768'
```

Найти и удалить файлы по маске

```bash
find . -type f -name "*.php" -print -delete
```

Найти и удалить пустые директории

```bash
find . -type d -empty -print -delete
```

Рекурсивное выставление прав доступа на файлы

```bash
find . -type f -exec chmod 644 {} \;
```

Рекурсивное выставление прав доступа на директории

```bash
find . -type d -exec chmod 755 {} \;
```

Удалить содержимое директории

```bash
rm -rf ./somedir/*
```

Удалить директорию со всем содержимым

```bash
rm -rf ./somedir
```

Просмотр и фильтрация логов на лету

```bash
tail -n0 -f /var/log/httpd/access.log | grep --line-buffered -E '"GET [^"]+" [45][0-9]+'
```

Замена текста регулярным выражением (по строкам)

```bash
cat some-file.txt | sed -E 's/man.+ger/manAger/'
```

Замена текста регулярным выражением (во всем текст целиком и без учета регистра)

```bash
cat some-file.txt | perl -p0e 's/man.+ger/manAger/si'
```

Работа с таблицами (получить первую и последнюю колонку таблицы, пронумеровав при этом строки)

```bash
awk '{print NR " - " $1 "\t- " $NF}' some-file.txt
```

Получить строки с третьей по шестую

```bash
awk 'NR==3, NR==6 {print NR,$0}' some-file.txt
```

Посчитать количество строк в файле

```bash
awk 'END { print NR }' some-file.txt
```

Распаковать zip архив в текущую директорию

```bash
unzip package.zip -d .
```

Распаковать gz архив в текущую директорию (архив будет удален)

    gunzip *.gz

Получить размер директории

```bash
du -shm
# -s — просуммировать размеры всех файлов в директории
# -h — показать результат в человекопонятном формате
# -m — показать результат в мегабайтах
```

Запуск заданной команды каждую 1 секунду

```bash
watch -n 1 'ps aux | grep grep'
```

Условия

```bash
if [ "foo" = "foo" ]; then
    echo true
else
    echo false
fi
```

Зациклить выполнение команды (с интервалом в 1 секунду между запусками)

```bash
while :; do echo `date`; sleep 1; done

# или тоже самое в несколько строк
while true; do
    echo `date`
    sleep 1
done
```

Выполнить одну комманд по ssh

```bash
ssh -T -i user-key.ssh user@${s} date
```

Выполнить несколько комманд по ssh

```bash
ssh -T -i user-key.ssh user@server << ENDSSH
    date
ENDSSH
```

Аналог pause из windows ([источник](https://stackoverflow.com/questions/92802/what-is-the-linux-equivalent-to-dos-pause))

```bash
# Any key solution (with -n 1)
read -rsp $'Press any key to continue...\n' -n 1 key

# Enter solution
read -rsp $'Press enter to continue...\n'

# Escape solution (with -d $'\e')
read -rsp $'Press escape to continue...\n' -d $'\e'

# Question with preselected choice (with -ei $'Y')
read -rp $'Are you sure (Y/n): ' -ei $'Y' key;
# echo $key

# Timeout solution (with -t 5)
read -rsp $'Press any key or wait 5 seconds to continue...\n' -n 1 -t 5;
```

Спрашиваем разрешение для продолжения выполнения

```bash
echo
read -rp "Are you sure you want to continue? " confirmed
echo
if [[ $confirmed =~ ^[Yy]$ ]]
then
    echo "Okay. Let's get started..."
else
    echo "Okay. Maybe next time..."
    exit 1
fi
```
