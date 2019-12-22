---
title: Шпаргалка по git
date: "2019-08-11 06:20:22"
---

Условные обозначения:

- LB - local branch - ветка в локальном репозитории
- LM - local master - master ветка в локальном репозитории
- RB - remote branch - ветка в origin репозитории
- RM - remote master - master ветка в origin репозитории
- H - HEAD - ссылка на текущую ветку/тег/коммит
- I - Index/Stage - индекс (что подготовлено к коммиту)
- W - Working Directory - рабочая директория

|                                                                    |                                                                                                |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| **Первоначальная настройка**                                       |                                                                                                |
| `git config --global -l`                                           | конфиг: показать настройки                                                                     |
| `git config --global credential.helper wincred`                    | конфиг: указать где хранить пароли (для windows)                                               |
| `git config --global user.name me`                                 | конфиг: указать ваше имя для будущих коммитов                                                  |
| `git config --global user.email me@gmail.com`                      | конфиг: указать ваш email для будущих коммитов                                                 |
| `git config --global color.ui true`                                | конфиг: включить раскрашивание                                                                 |
| `git config --global color.diff true`                              | конфиг: включить раскрашивание                                                                 |
| `git config --global color.grep true`                              | конфиг: включить раскрашивание                                                                 |
| `git config --global color.status true`                            | конфиг: включить раскрашивание                                                                 |
| `git config --global core.autocrlf input`                          | конфиг: форсировать LF окончания строк                                                         |
| `git config --global core.safecrlf false`                          | конфиг: форсировать LF окончания строк                                                         |
| `git config --global core.quotepath false`                         | конфиг: отображать unicode названия файлов без экранирования                                   |
| `git config --global core.editor = notepad`                        | конфиг: указать редактор по умолчанию (для указания комментариев к коммитам и т.п.)            |
| **Начало работы**                                                  |                                                                                                |
| `git init`                                                         | создать локальный репозиторий в текущей папке                                                  |
| `git clone https://github.com/username/repository.git`             | скачать удаленный репозиторий                                                                  |
| **git remote**                                                     |                                                                                                |
| `git remote -v`                                                    | показать привязанные удаленные репозитории                                                     |
| `git remote add origin https://github.com/username/repository.git` | указать, что локальный репозиторий связан с origin репозиторием                                |
| `git remote prune origin`                                          | удалить ссылки на ветки, которых больше нет в origin репозитории (remotes/origin/\*)           |
| **Работа с индексом**                                              |                                                                                                |
| `git status -s`                                                    | показать состояние (что менялось в **I** и **W**)                                              |
| `git add .`                                                        | добавить изменения в индекс (**W => I**)                                                       |
| `git add some-file`                                                | добавить изменения в индекс (**W => I**) для конкретного файла                                 |
| `git rm some-file`                                                 | удалить файл в **I** и **W**                                                                   |
| `git rm --cached some-file`                                        | удалить файл в **I** (но оставить его в **W**)                                                 |
| `git mv old-file-name new-file-name`                               | переименовать файл в **I** и **W**                                                             |
| `git commit -m "comment"`                                          | совершить коммит (**I => H**)                                                                  |
| **Работа с ветками**                                               |                                                                                                |
| `git branch -a`                                                    | показать список веток                                                                          |
| `git branch branch-name`                                           | создать новую ветку на основе текущей                                                          |
| `git checkout branch-name`                                         | переключиться на ветку (**LB => H => I**)                                                      |
| `git checkout -b branch-name`                                      | создать новую ветку на основе текущей и переключиться на нее (**new LB => H => I**)            |
| `git checkout -b branch-name origin/branch-name`                   | создать новую ветку на основе указанной и переключиться на нее (**new LB => H => I**)          |
| `git branch -m new-branch-name`                                    | переименовать текущую ветку                                                                    |
| `git branch -d branch-name`                                        | удалить локальную ветку (~~**LB**~~)                                                           |
| `git merge branch-name`                                            | смержить изменения из ветки branch-name                                                        |
| `git push origin HEAD`                                             | запушить текущую ветку в такую же ветку в origin репозитории (**LB => RB**)                    |
| `git push origin branch-name`                                      | запушить указанную ветку (когда название ветки совпадает с названием в origin репозитории)     |
| `git push origin local-branch:remote-branch`                       | запушить ветку (когда название ветки отличается от названия в origin репозитории)              |
| `git push origin --all`                                            | запушить все ветки                                                                             |
| `git push origin --tags`                                           | запушить все теги                                                                              |
| `git push origin :remote-branch`                                   | удалить ветку в origin репозитории (~~**RB**~~)                                                |
| `git branch -u origin/remote-branch`                               | привязать текущую локальную ветку к ветке в origin репозитории (**LB ~ RB**)                   |
| `git branch --unset-upstream`                                      | отвязать текущую локальную ветку от ветки в origin репозитории (**LB × RB**)                   |
| **Откаты и чистка**                                                |                                                                                                |
| `git reset`                                                        | **H => I** (**W** - не затрагивается)                                                          |
| `git reset -- some-file`                                           | **H => I** (**W** - не затрагивается) для конкретного файла                                    |
| `git reset --hard`                                                 | **H => I => W**                                                                                |
| `git checkout HEAD -- .`                                           | **H => I => W**                                                                                |
| `git checkout HEAD -- some-file`                                   | **H => I => W** для конкретного файла                                                          |
| `git checkout -- .`                                                | **I => W**                                                                                     |
| `git checkout -- some-file`                                        | **I => W** для конкретного файла                                                               |
| `git clean -fd`                                                    | удалить untracked файлы (которых нет ни в **H** ни в **U**, кроме тех, что в .gitignore)       |
| `git commit --amend -m "new comment"`                              | поменять комментарий к последнему коммиту (использовать только если коммит еще не был запушен) |
| **Логи**                                                           |                                                                                                |
| `git log --oneline`                                                | показать всю историю коммитов                                                                  |
| `git log --oneline -10`                                            | показать последние 10 коммитов                                                                 |
| `git log --graph --date iso --pretty=format:"%H [%cd] %an: '%s'"`  | показать всю историю коммитов (хэш коммита, дата, автор, комментарий)                          |
| `git log --oneline --follow some-file`                             | показать историю коммитов для конкретного файла                                                |
| `git diff some-file`                                               | показать изменения в файле                                                                     |
| `git blame some-file`                                              | показать кто/что/когда правил в файле                                                          |
| `git cherry -v master`                                             | показать коммиты в ветке по сравнению с master                                                 |
| `git cherry -v master \| wc -l`                                    | посчитать коммиты в ветке по сравнению с master                                                |
| **Разное**                                                         |                                                                                                |
| `git update-index --chmod=+x path/to/file"`                        | добавить признак исполняемого файла                                                            |
| `git update-index --chmod=-x path/to/file`                         | удалить признак исполняемого файла                                                             |
| **todo**                                                           |                                                                                                |
| `git fetch --prune`                                                | скачать все изменения в origin репозитории (в .git/refs/remotes/origin)                        |
| `git pull`                                                         | = fetch + merge                                                                                |
| `git remote show origin`                                           |                                                                                                |
| `git stash`                                                        |                                                                                                |
| `git stash list`                                                   |                                                                                                |
| `git stash pop`                                                    |                                                                                                |
| `git stash drop`                                                   |                                                                                                |
| `git stash apply`                                                  |                                                                                                |
| `git rebase`                                                       |                                                                                                |
| `git tag`                                                          | показать список тегов                                                                          |

<!--

| `git fetch --prune`                                                | скачать все изменения в origin репозитории, не применяя их к локальному репозиторию            |

todo:
- git config user.email "579620+zobzn@users.noreply.github.com"
- git commit --amend --reset-author
- git checkout -b <local_branch> origin/<remote_branch>   # скачиваем ветку с центрального репозитория

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
