---
title: про mysql
date: 2014-03-05 22:54:10
---

### Генерация ошибки

```sql
SIGNAL SQLSTATE VALUE '99999' SET MESSAGE_TEXT = 'An error occurred';
```

### DISTINCT vs GROUP BY

Следующие два запроса дадут один и тот же результат.

```sql
SELECT DISTINCT folder_id FROM user_to_folder ORDER BY folder_id LIMIT 10
```

```sql
SELECT folder_id FROM user_to_folder GROUP BY folder_id ORDER BY folder_id LIMIT 10
```

### Пакетное добавление и обновление записей

```sql
INSERT INTO sometable (id, x, y)
VALUES (1, 2, 3), (4, 5, 6), (7, 8, 9)
ON DUPLICATE KEY UPDATE x = VALUES(x), y = VALUES(y);
```

### Выбрать записи по списку ID, соблюдая порядок

```sql
SELECT *
FROM news
WHERE id IN (2, 10, 3, 88, 23)
ORDER BY FIELD (id, 2, 10, 3, 88, 23)
```

### Получить список всех таблиц в определенной базе данных вместе с объемом данных и количеством строк

```sql
SELECT
  table_schema,
  table_name,
  ROUND(((data_length + index_length) / 1024 / 1024), 2) AS `size (mb)`,
  SUM(table_rows) AS `rows`
FROM
  INFORMATION_SCHEMA.tables
WHERE
  table_schema = 'some_database'
GROUP BY
  table_schema,
  table_name
ORDER BY
  (data_length + index_length) DESC
```
