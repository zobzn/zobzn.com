---
title: diskpart example
date: 2020-11-22 23:46:39
---

open cmd.exe as admin, then

```batch
diskpart
list disk
select disk 0
clean
list disk
create partition primary
select partition 1
active
format FS=NTFS label=Data quick
assign letter=d
exit
```
