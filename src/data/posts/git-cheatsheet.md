---
title: Шпаргалка по git
date: "2019-08-11 06:20:22"
---

|                                                                    |                                                                                             |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| **Первоначальная настройка**                                       |                                                                                             |
| `git config --global -l`                                           | конфиг: показать настройки                                                                  |
| `git config --global credential.helper wincred`                    | конфиг: указать где хранить пароли (для windows)                                            |
| `git config --global user.name me`                                 | конфиг: указать ваше имя для будущих коммитов                                               |
| `git config --global user.email me@gmail.com`                      | конфиг: указать ваш email для будущих коммитов                                              |
| `git config --global color.ui true`                                | конфиг: включить раскрашивание                                                              |
| `git config --global color.diff true`                              | конфиг: включить раскрашивание                                                              |
| `git config --global color.grep true`                              | конфиг: включить раскрашивание                                                              |
| `git config --global color.status true`                            | конфиг: включить раскрашивание                                                              |
| `git config --global core.autocrlf input`                          | конфиг: форсировать LF окончания строк                                                      |
| `git config --global core.safecrlf false`                          | конфиг: форсировать LF окончания строк                                                      |
| `git config --global core.quotepath false`                         | конфиг: отображать unicode названия файлов без экранирования                                |
| `git config --global core.editor = notepad`                        | конфиг: указать редактор по умолчанию (для указания комментариев к коммитам и т.п.)         |
| `git config --global alias.co checkout`                            | конфиг: короткий алиас для checkout                                                         |
| `git config --global alias.br branch`                              | конфиг: короткий алиас для branch                                                           |
| `git config --global alias.ci commit`                              | конфиг: короткий алиас для commit                                                           |
| `git config --global alias.st 'status -s'`                         | конфиг: короткий алиас для status -s                                                        |
| **Начало работы**                                                  |                                                                                             |
| `git init`                                                         | создать локальный репозиторий в текущей папке                                               |
| `git clone [url]`                                                  | скачать удаленный репозиторий                                                               |
| **Базовые операции**                                               |                                                                                             |
| `git status -s`                                                    | показать состояние (что менялось в индексе и рабочей директории)                            |
| `git add .`                                                        | добавить все изменения в индекс                                                             |
| `git commit -m "comment"`                                          | выполнить коммит                                                                            |
| `git commit –allow-empty -m "empty commit"`                        | выполнить коммит, даже если ничего не было изменено                                         |
| **Работа с ветками**                                               |                                                                                             |
| `cat .git/HEAD`                                                    | показать на что указывает HEAD                                                              |
| `git branch -a`                                                    | показать список веток                                                                       |
| `git branch -a -v`                                                 | показать список веток с комментарием из последнего коммита                                  |
| `git branch [new-name]`                                            | создать новую ветку на основе текущей                                                       |
| `git branch [new-name] [old-name]`                                 | создать новую ветку на основе указанной (например, на основе origin/branch-name)            |
| `git branch -b [new-name]`                                         | создать новую ветку на основе текущей и переключиться на нее                                |
| `git branch -b [new-name] [old-name]`                              | создать новую ветку на основе указанной и переключиться на нее                              |
| `git checkout [name]`                                              | переключиться на ветку (фактически направить HEAD на указанную ветку)                       |
| `git cherry -v [name]`                                             | показать коммиты в текущей ветке, которых нет в указанной                                   |
| `git cherry -v HEAD [name]`                                        | показать коммиты в указанной ветке, которых нет в текущей                                   |
| `git cherry -v [name] \| wc -l`                                    | посчитать коммиты в текущей ветке, которых нет в указанной                                  |
| `git merge [name]`                                                 | смержить в текущую ветку коммиты из указанной ветки (например, из origin/branch-name)       |
| `git branch -d [name]`                                             | удалить локальную ветку                                                                     |
| **Изменение истории**                                              |                                                                                             |
| `git rebase [name]`                                                | переписать коммиты текущей ветку после коммитов в указанной ветке                           |
| `git commit --amend -m "new comment"`                              | добавить изменения в последний коммит (опция --no-edit если не надо менять комментарий)     |
| `git reset HEAD`                                                   | удалить из текущий все коммиты после указанного, оставив все изменения в рабочей директории |
| `git reset HEAD~1 && git add . && git commit -m 'new comment'`     | склеить последний коммит с предпоследним                                                    |
| `git reset --hard HEAD`                                            | удалить из текущий ветки ВСЕ изменения после указанного коммита, затерев рабочую директорию |
| `git clean -fd -- .`                                               | удалить из рабочей директории untracked файлы                                               |
| **Теги**                                                           |                                                                                             |
| `git tag`                                                          | показать список локальных тегов                                                             |
| `git tag -n3`                                                      | показать список локальных тегов, включая не больше трех строк комментариев                  |
| `git tag -l v1.*`                                                  | показать список локальных тегов, подходящих под шаблон                                      |
| `git tag [name]`                                                   | пометить тегом текущий HEAD                                                                 |
| `git tag [name] -m "comment"`                                      | пометить тегом текущий HEAD вместе с комментарием                                           |
| `git tag [name] some-commit-hash`                                  | пометить тегом определенный коммит                                                          |
| `git tag -d [name]`                                                | удалить локальный тег                                                                       |
| **Синхронизация репозиториев**                                     |                                                                                             |
| `git ls-remote [url]`                                              | показать, что есть в удаленном репозитории (ветки, теги, пулл-реквесты)                     |
| `git ls-remote origin`                                             | показать, что есть в origin репозитории                                                     |
| `git remote -v`                                                    | показать привязанные удаленные репозитории                                                  |
| `git remote add origin [url]`                                      | добавить указанный репозиторий под именем origin                                            |
| `git remote show origin`                                           | показать инфу об origin репозитории                                                         |
| `git fetch origin --prune`                                         | скачать origin репозиторий, не применяя к локальным веткам (в .git/refs/remotes/origin)     |
| `git fetch origin pull/[pull-request-id]/head:[local-branch-name]` | скачать pull request в локальную ветку                                                      |
| `git pull origin [name]`                                           | = fetch origin + merge origin/[branch-name]                                                 |
| `git pull origin [name] --rebase`                                  | = fetch origin + merge origin/[branch-name] + rebase (т.е. избегаем merge коммита)          |
| `git push origin [name]`                                           | запушить ветку или тег                                                                      |
| `git push origin :[name]`                                          | удалить ветку или тег в origin репозитории (локальная ветка останется, если есть)           |
| `git push origin :refs/tags/[tag-name]`                            | удалить тег в origin репозитории (вариант без путаницы с ветками)                           |
| `git push origin --follow-tags`                                    | запушить теги с комментариями                                                               |
| `git branch -u origin/[name]`                                      | привязать текущую локальную ветку к ветке в origin репозитории                              |
| `git branch --unset-upstream`                                      | отвязать текущую локальную ветку от ветки в origin репозитории                              |
| **Логи**                                                           |                                                                                             |
| `git log --oneline`                                                | показать всю историю коммитов                                                               |
| `git log --oneline -10`                                            | показать последние 10 коммитов                                                              |
| `git log --graph --date iso --pretty=format:"%H [%cd] %an: '%s'"`  | показать всю историю коммитов (хэш коммита, дата, автор, комментарий)                       |
| `git log --oneline --follow some-file`                             | показать историю коммитов для конкретного файла                                             |
| `git diff some-file`                                               | показать изменения в файле                                                                  |
| `git blame some-file`                                              | показать кто/что/когда правил в файле                                                       |
| **Разное**                                                         |                                                                                             |
| `git update-index --chmod=+x path/to/file"`                        | добавить признак исполняемого файла                                                         |
| `git update-index --chmod=-x path/to/file`                         | удалить признак исполняемого файла                                                          |
| **todo**                                                           |                                                                                             |
| `git stash`                                                        |                                                                                             |
| `git stash list`                                                   |                                                                                             |
| `git stash pop`                                                    |                                                                                             |
| `git stash drop`                                                   |                                                                                             |
| `git stash apply`                                                  |                                                                                             |
| `git gc`                                                           |                                                                                             |

И бонусом парочка небольших алиасов для однострочных логов

```bash
git config --global alias.lg "log --pretty=format:'%C(Yellow)%h%C(reset) %C(Cyan)%ae%C(reset) %C(Green)(%cr)%C(reset) %C(White)%s%C(reset)' --graph --all"
git config --global alias.lol "log --oneline --graph --decorate"
```

<!--

todo:
- git cherry-pick commit4
- git stash save "stash name" && git stash
- git config --global alias.last 'log -1 HEAD'
- git show HEAD~1
- git lol iss53 ^master - какие коммиты есть в iss53 которых нет в master (== git cherry -v ?)
- git lg --name-status - показать какие файлы менялись
- git lg --stat - показать какие файлы менялись

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
