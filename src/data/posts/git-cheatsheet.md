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

|                                                                   |                                                                                              |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Первоначальная настройка**                                      |                                                                                              |
| `git config --global -l`                                          | конфиг: показать настройки                                                                   |
| `git config --global credential.helper wincred`                   | конфиг: указать где хранить пароли (для windows)                                             |
| `git config --global user.name me`                                | конфиг: указать ваше имя для будущих коммитов                                                |
| `git config --global user.email me@gmail.com`                     | конфиг: указать ваш email для будущих коммитов                                               |
| `git config --global color.ui true`                               | конфиг: включить раскрашивание                                                               |
| `git config --global color.diff true`                             | конфиг: включить раскрашивание                                                               |
| `git config --global color.grep true`                             | конфиг: включить раскрашивание                                                               |
| `git config --global color.status true`                           | конфиг: включить раскрашивание                                                               |
| `git config --global core.autocrlf input`                         | конфиг: форсировать LF окончания строк                                                       |
| `git config --global core.safecrlf false`                         | конфиг: форсировать LF окончания строк                                                       |
| `git config --global core.quotepath false`                        | конфиг: отображать unicode названия файлов без экранирования                                 |
| `git config --global core.editor = notepad`                       | конфиг: указать редактор по умолчанию (для указания комментариев к коммитам и т.п.)          |
| `git config --global alias.co checkout`                           | конфиг: короткий алиас для checkout                                                          |
| `git config --global alias.br branch`                             | конфиг: короткий алиас для branch                                                            |
| `git config --global alias.ci commit`                             | конфиг: короткий алиас для commit                                                            |
| `git config --global alias.st 'status -s'`                        | конфиг: короткий алиас для status -s                                                         |
| **Начало работы**                                                 |                                                                                              |
| `git init`                                                        | создать локальный репозиторий в текущей папке                                                |
| `git clone [url]`                                                 | скачать удаленный репозиторий                                                                |
| **git remote**                                                    |                                                                                              |
| `git remote -v`                                                   | показать привязанные удаленные репозитории                                                   |
| `git remote add origin [url]`                                     | указать, что локальный репозиторий связан с origin репозиторием                              |
| `git fetch --prune`                                               | скачать origin репозиторий, не применяя к локальным веткам (в .git/refs/remotes/origin)      |
| `git remote prune origin`                                         | удалить ссылки на ветки, которых больше нет в origin репозитории (remotes/origin/\*)         |
| **Работа с индексом**                                             |                                                                                              |
| `git status -s`                                                   | показать состояние (что менялось в **I** и **W**)                                            |
| `git add .`                                                       | добавить изменения в индекс (**W => I**)                                                     |
| `git add some-file`                                               | добавить изменения в индекс (**W => I**) для конкретного файла                               |
| `git rm some-file`                                                | удалить файл в **I** и **W**                                                                 |
| `git rm --cached some-file`                                       | удалить файл в **I** (но оставить его в **W**)                                               |
| `git mv old-file-name new-file-name`                              | переименовать файл в **I** и **W**                                                           |
| `git commit -m "comment"`                                         | совершить коммит (**I => H**)                                                                |
| `git commit –allow-empty -m "empty commit"`                       | совершить коммит, даже если ничего не было изменено                                          |
| **Работа с ветками**                                              |                                                                                              |
| `cat .git/HEAD`                                                   | показать на что указывает HEAD                                                               |
| `git branch -a`                                                   | показать список веток                                                                        |
| `git checkout branch-name`                                        | переключиться на ветку (фактически направить HEAD на указанную ветку)                        |
| `git branch new-branch-name`                                      | создать новую ветку на основе текущей                                                        |
| `git branch new-branch-name old-branch-name`                      | создать новую ветку на основе указанной (например, на основе origin/branch-name)             |
| `git branch -d old-branch-name`                                   | удалить локальную ветку (~~**LB**~~)                                                         |
| `git merge from-branch-name`                                      | смержить в текущую ветку коммиты из ветки from-branch-name (например, из origin/branch-name) |
| `git push origin HEAD`                                            | запушить текущую ветку в такую же ветку в origin репозитории (**LB => RB**)                  |
| `git push origin branch-name`                                     | запушить указанную ветку (когда название ветки совпадает с названием в origin репозитории)   |
| `git push origin local-branch:remote-branch`                      | запушить ветку (когда название ветки отличается от названия в origin репозитории)            |
| `git push origin --all`                                           | запушить все ветки                                                                           |
| `git push origin :remote-branch`                                  | удалить ветку в origin репозитории (~~**RB**~~)                                              |
| `git branch -u origin/remote-branch`                              | привязать текущую локальную ветку к ветке в origin репозитории (**LB ~ RB**)                 |
| `git branch --unset-upstream`                                     | отвязать текущую локальную ветку от ветки в origin репозитории (**LB × RB**)                 |
| `git rebase`                                                      |                                                                                              |
| **Откаты и чистка**                                               |                                                                                              |
| `git reset --hard HEAD`                                           | **H => I => W**                                                                              |
| `git reset HEAD -- .`                                             | **H => I**                                                                                   |
| `git checkout -- .`                                               | **I => W**                                                                                   |
| `git clean -fd -- .`                                              | удалить untracked файлы (которых нет ни в **H** ни в **I**, кроме тех, что в .gitignore)     |
| `git commit --amend -m "new comment"`                             | поменять комментарий к последнему коммиту (лучше не допускать, и пушить прийдется с --force) |
| `git reset --hard HEAD~1`                                         | удалить последний коммит из текущей ветки (лучше не допускать, и пушить прийдется с --force) |
| **Теги**                                                          |                                                                                              |
| `git tag`                                                         | показать список локальных тегов                                                              |
| `git tag -n3`                                                     | показать список локальных тегов, включая не больше трех строк комментариев                   |
| `git tag -l v1.*`                                                 | показать список локальных тегов, подходящих под шаблон                                       |
| `git ls-remote --tags origin`                                     | показать список тегов в origin репозитории                                                   |
| `git tag some-tag`                                                | пометить тегом текущий HEAD                                                                  |
| `git tag some-tag -m "comment"`                                   | пометить тегом текущий HEAD вместе с комментарием                                            |
| `git tag some-tag some-commit-hash`                               | пометить тегом определенный коммит                                                           |
| `git tag -d some-tag`                                             | удалить локальный тег                                                                        |
| `git push origin --delete some-tag`                               | удалить тег в origin репозитории                                                             |
| `git push origin --follow-tags`                                   | запушить теги с комментариями                                                                |
| `git push origin --tags`                                          | запушить все теги                                                                            |
| `git push origin some-tag`                                        | запушить конкретный тег                                                                      |
| **Логи**                                                          |                                                                                              |
| `git log --oneline`                                               | показать всю историю коммитов                                                                |
| `git log --oneline -10`                                           | показать последние 10 коммитов                                                               |
| `git log --graph --date iso --pretty=format:"%H [%cd] %an: '%s'"` | показать всю историю коммитов (хэш коммита, дата, автор, комментарий)                        |
| `git log --oneline --follow some-file`                            | показать историю коммитов для конкретного файла                                              |
| `git diff some-file`                                              | показать изменения в файле                                                                   |
| `git blame some-file`                                             | показать кто/что/когда правил в файле                                                        |
| `git cherry -v master`                                            | показать коммиты в ветке по сравнению с master                                               |
| `git cherry -v master \| wc -l`                                   | посчитать коммиты в ветке по сравнению с master                                              |
| **Разное**                                                        |                                                                                              |
| `git update-index --chmod=+x path/to/file"`                       | добавить признак исполняемого файла                                                          |
| `git update-index --chmod=-x path/to/file`                        | удалить признак исполняемого файла                                                           |
| **todo**                                                          |                                                                                              |
| `git pull`                                                        | = fetch + merge                                                                              |
| `git remote show origin`                                          |                                                                                              |
| `git stash`                                                       |                                                                                              |
| `git stash list`                                                  |                                                                                              |
| `git stash pop`                                                   |                                                                                              |
| `git stash drop`                                                  |                                                                                              |
| `git stash apply`                                                 |                                                                                              |
| `git gc`                                                          |                                                                                              |

И бонусом небольшой алиас для однострочных логов

```bash
git config --global alias.lg 'log --pretty=format:"%C(Yellow)%h%C(reset) %C(Cyan)%ae%C(reset) %C(Green)(%cr)%C(reset) %C(White)%s%C(reset)" --graph --all'
```

<!--

todo:
- git config user.email "579620+zobzn@users.noreply.github.com"
- git commit --amend --reset-author
- git cherry-pick commit4
- git stash save "stash name" && git stash
- git pull --rebase origin branch
- git config --global alias.last 'log -1 HEAD'
- git show HEAD~1

$ git reset [коммит]
Отменяет все коммиты после заданного, оставляя все изменения в рабочей директории
$ git reset --hard [коммит]
Сбрасывает всю историю вместе с состоянием рабочей директории до указанного коммита.

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
