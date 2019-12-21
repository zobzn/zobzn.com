---
title: Полезности в git
date: "2019-08-11 06:20:22"
---

|                                                                    |                                                                                     |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| **Начало работы**                                                  |                                                                                     |
| `git init`                                                         | создать пустой локальный репозиторий в текущей папке                                |
| `git add README.md`                                                | добавить файл README.md в индекс (помечаем, что хотим его закоммитить)              |
| `git commit -m "first commit"`                                     | закоммитить изменения (то что в индексе, а именно README.md)                        |
| `git remote add origin https://github.com/username/repository.git` | указать, что локальный репозиторий связан с origin репозиторием                     |
| `git push -u origin master`                                        | запушить коммиты из локального репозитория в origin репозиторий                     |
| **Продолжение работы на другом компьютере**                        |                                                                                     |
| `git clone https://github.com/username/repository.git`             | создать локальный репозиторий на основе origin репозитория                          |
| **Ветки**                                                          |                                                                                     |
| `git branch`                                                       | показать список локальных веток                                                     |
| `git branch -a`                                                    | показать список локальных и удаленных веток                                         |
| `git branch branch-name`                                           | создать новую ветку                                                                 |
| `git checkout branch-name`                                         | переключиться на ветку                                                              |
| `git checkout -b branch-name`                                      | создать ветку и переключиться на нее                                                |
| `git checkout -b local-branch-name origin/remote-branch-name`      | скачать ветку с центрального репозитория и переключиться на нее                     |
| `git branch -m new-branch-name`                                    | переименовать текущую ветку                                                         |
| `git branch -d branch-name`                                        | удалить локальную ветку                                                             |
| `git branch --delete branch-name`                                  | удалить локальную ветку                                                             |
| `git push origin :branch-name`                                     | удалить ветку в origin репозитории                                                  |
| `git push origin --delete branch-name`                             | удалить ветку в origin репозитории (git >= 1.7)                                     |
| `git push origin local-branch:remote-branch`                       | запушить ветку когда название отличается от удаленной                               |
| `git branch -u origin/remote-branch`                               | привязать текущую локальную ветку к удаленной ветке                                 |
| `git branch --unset-upstream`                                      | отвязать текущую локальную ветку от удаленной ветки                                 |
| **Статус, логи**                                                   |                                                                                     |
| `git remote -v`                                                    | показать привязанные удаленные репозиториям                                         |
| `git status -s`                                                    | показать состояние локального репозитория                                           |
| `git log --oneline`                                                | показать всю историю коммитов                                                       |
| `git log --oneline -10`                                            | показать последние 10 коммитов                                                      |
| `git log --graph --date iso --pretty=format:"%H [%cd] %an: '%s'"`  | показать всю историю коммитов (хэш коммита, дата, автор, комментарий)               |
| `git diff some-file`                                               | показать изменения в файле                                                          |
| `git blame some-file`                                              | показать кто/что/когда правил в файле                                               |
| `git cherry -v master`                                             | показать коммиты в ветке по сравнению с master                                      |
| `git cherry -v master \| wc -l`                                    | посчитать коммиты в ветке по сравнению с master                                     |
| **Чистка и правки**                                                |                                                                                     |
| `git reset --hard HEAD`                                            | откатить изменения в ранее закоммиченных файлах (не трогая untracked файлы)         |
| `git clean -fd`                                                    | удалить untracked файлы (кроме тех, что в .gitignore)                               |
| `git commit --amend -m "new comment"`                              | поменять комментарий к последнему коммиту (пока он еще не был запушен)              |
| **Разное**                                                         |                                                                                     |
| `git update-index --chmod=+x path/to/file"`                        | добавить признак исполняемого файла                                                 |
| `git update-index --chmod=-x path/to/file`                         | удалить признак исполняемого файла                                                  |
| **Конфиг**                                                         |                                                                                     |
| `git config --global -l`                                           | конфиг: показать настройки                                                          |
| `git config --global credential.helper wincred`                    | конфиг: указать где хранить пароли                                                  |
| `git config --global user.name me`                                 | конфиг: указать ваше имя для будущих коммитов                                       |
| `git config --global user.email me@gmail.com`                      | конфиг: указать ваш email для будущих коммитов                                      |
| `git config --global color.ui true`                                | конфиг: включить раскрашивание                                                      |
| `git config --global color.diff true`                              | конфиг: включить раскрашивание                                                      |
| `git config --global color.grep true`                              | конфиг: включить раскрашивание                                                      |
| `git config --global color.status true`                            | конфиг: включить раскрашивание                                                      |
| `git config --global core.autocrlf input`                          |                                                                                     |
| `git config --global core.safecrlf false`                          |                                                                                     |
| `git config --global core.quotepath false`                         |                                                                                     |
| `git config --global core.editor = notepad`                        | конфиг: указать редактор по умолчанию (для указания комментариев к коммитам и т.п.) |

<!--
git remote show origin
-->

<!--
git config user.email "579620+zobzn@users.noreply.github.com"
git commit --amend --reset-author
-->

Отправить изменения из рабочей копии в центральный репозиторий

```bash
git push origin master       # только master ветка
git push origin --all        # все ветки
git push origin --tags       # все теги
```

Скачать к себе ветку из центрального репозитория

```bash
# закачиваем все центральные изменения
git fetch
# удаляем локальную ветку если она есть
git branch -d <local_branch>
# скачиваем ветку с центрального репозитория
git checkout -b <local_branch> origin/<remote_branch>
```

<!--
сгенерировать token для composer
https://github.com/settings/tokens

указать токен для composer
composer config --global github-oauth.github.com 2983569283568927365987236598
-->

<style>

.article-body table {
    max-width: 100%;
    font-size: 14px;
}

.article-body table thead,
.article-body table tfoot {
    display: none;
}

.article-body table td strong {
    font-weight: bold;
    font-size: 16px;
}

.article-body table th:empty,
.article-body table td:empty {
    display: none;
}


.article-body code {
    word-break: break-word;
    font-weight: bold;
    font-size: 14px;
    color: #e83e8c;
}

@media (max-width: 1023px) {
    .article-body table {
        display: block;
    }
    .article-body table tbody {
        display: block;
    }
    .article-body table tr {
        flex-direction: column;
        margin: 20px 0;
        display: flex;
        border: none;
    }
    .article-body table th,
    .article-body table td {
        display: block;
        margin: 2px 0;
        padding: 0;
    }
    .article-body table th:first-child,
    .article-body table td:first-child {
        /* order: 1; */
    }
}

</style>
