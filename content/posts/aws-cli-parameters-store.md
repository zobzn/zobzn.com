---
title: aws cli parameters store
date: "2020-10-23 00:17:10"
---

### Получить список параметров

```bash
aws ssm get-parameters-by-path --recursive --with-decryption --path /qa/ | jq -r ".Parameters | map ({(.Name): .Value}) | add | to_entries | sort_by(.key) | from_entries"
```

### Получить значение конкретного параметра

```bash
aws ssm get-parameter  --query "Parameter.Value" --name "/client-api-gw-users/bff/url"
```

### Добавить (перезаписать) параметр

```bash
aws ssm put-parameter --name /some/parameter --type "String" --value "VALUE" --overwrite
```

### Удалить параметр

```bash
aws ssm delete-parameter --region us-east-1 --name /some/parameter
```

P.S.

в git-bash может понадобиться добавить `MSYS2_ARG_CONV_EXCL=*` перед командой для того, чтобы не "портился" путь (а то он иногда пытается преобразовать /some/path/ в \some\path\ для windows)
