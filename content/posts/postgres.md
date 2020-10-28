---
title: про postgres
date: "2020-10-28 23:17:33"
---

```sql
SELECT * FROM unnest(ARRAY ['Bhushan','Amol','pallavi']) as name;
```

```sql
SELECT * FROM unnest(string_to_array('Bhushan,Amol,pallavi', E',')) as name;
```

<!--
CREATE INDEX memes_idx ON memes USING GIN (to_tsvector('english', text));
SELECT * FROM memes WHERE to_tsvector('english', text) @@ to_tsquery('simlique & doo')

ALTER TABLE memes ADD COLUMN text_vector tsvector;
UPDATE memes SET text_vector = to_tsvector('english', text);
CREATE INDEX memes_idx ON memes USING GIN (to_tsvector('english', text));
SELECT * FROM memes WHERE text_vector @@ to_tsquery('simlique & doo')
-->
