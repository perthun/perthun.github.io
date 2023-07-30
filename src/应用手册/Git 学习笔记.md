---
title: Git 学习笔记
---

**有待完善**

Git 是目前世界上最先进的分布式版本控制系统，简单而实用。^[[廖雪峰的 Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600)]

- 所有的版本控制系统，其实只能跟踪文本文件的改动，比如 txt 文件，网页，所有的程序代码等等，Git 也不例外。
- 建议使用 UTF-8 编码，并且不使用 Windows 自带的记事本。

Git 的基本概念

- 工作区：创建仓库的目录。
- 版本库：`.git` 文件夹，内部最重要的有称为 `index` 的暂存区、 Git 自动创建的第一个分支 `master`。
- `HEAD` 指针指向分支，分支指向当前的 `commit`。

## 安装 Git 和创建仓库

Windows 安装 [Git](https://git-scm.com/download/win)。

安装完成后，还需要设置用户名和邮箱：

```
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"
```

创建仓库

```
# 加载某个目录
$ cd [dir]
# 创建仓库
$ git init
```

完成后，这个目录就变成了一个仓库，会出现一个 `.git` 文件夹，这是 Git 用来跟踪管理仓库的，当前能看到的目录就变成了工作区。

> 也可以在已经有东西的目录创建仓库。  
Git 只能管理仓库目录下的文件（包括子目录）。

```
# 将文件添加到暂存区
$ git add [file]
# 将所有文件添加到暂存区
$ git add -A

# 将文件提交到当前分支
$ git commit -m '说明'
```

Git 只会对已经提交到分支的文件进行版本管理。

## 版本管理

Git 跟踪并管理的是修改而不是文件，只有添加到暂存区的修改，才能提交到当前分支。

查看仓库状态

```
# 查看仓库当前的状态，文件有无修改、是否添加和提交
$ git status
```

比较文件差异

```
# 比较工作区指定文件与暂存区之间的差异，如果暂存区没有该文件、才会与版本库最新版本进行比较
$ git diff [file]
# 比较工作区指定文件和版本库最新版本的差异
$ git diff HEAD -- [file]
```

撤销修改和版本回退

```
# 丢弃工作区的修改，回到暂存区的状态，暂存区为空则回到当前分支的状态
$ git checkout -- [file]
# 撤销暂存区的修改
$ git reset HEAD [file]

# 查看提交日志，且在一行显示
$ git log --pretty=oneline

# 恢复到上个版本
$ git reset --hard HEAD^
# 恢复到上上个版本
$ git reset --hard HEAD^^
# 恢复到往上100个版本
$ git reset --hard HEAD~100
# 恢复到指定版本
$ git reset [commit id]

# 查看历史命令——恢复到历史版本后，log 命令看不到最新的版本
$ git reflog
```

删除文件也是一个修改，需要 `commit`。

> `git checkout xxx` 是切换另一个分支。

Git 的 `reset` 命令有三个参数
- `--soft` 仅移动本地区（分支）的 `HEAD` 指针。
- `--mixed` 移动本地库的 `HEAD` 指针，并重置暂存区。
- `--hard` 移动本地库的 `HEAD` 指针，并重置暂存区和工作区。

## 远程仓库

```
# 创造SSH Key
$ ssh-keygen -t rsa -C "youremail@example.com"
# 输出公钥
$ cat ~/.ssh/id_rsa.pub
```

在 GitHub 中添加公钥，可以在账户下添加，也可以在仓库下添加。

```
# 测试 SSH 密钥
$ ssh -T git@github.com
```

```
# 添加远程库
$ git remote add [name] [ssh url]
# 克隆本地库
$ git clone [ssh url]

# 拉取远程库
$ git pull -u [name] master
# 推送到远程库
$ git push -u [name] master
# 查看远程库信息
$ git remote -v
# 删除远程库（解除绑定）
$ git remote rm [name]

```

`-u` 参数把本地的 `master` 分支和远程的 `master` 分支关联，以后使用 `git push` 即可推送。

## 分支管理

因为分支功能用得少（不用），所以简单记录下用法，[可参考教程](https://www.liaoxuefeng.com/wiki/896043488029600/900003767775424)。

- `master`：默认创建的、主分支，要求稳定
- `dev`：工作分支
- `feature`：新功能分支，完成合并到主分支、放弃则删除
- `bug`：临时创建用于修复 bug 的分支


~~更改分支名称~~

```
# 查看分支
$ git branch
# 创建分支
$ git branch [name]
# 切换分支
$ git switch [name]
# 创建并切换分支
$ git switch -c [name]
# 合并指定分支到当前分支
$ git merge [name]
# 删除分支
$ git branch -d [name]

# 查看分支合并图
$ git log --graph
```

当 Git 无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。
解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。


分支合并时默认使用 `Fast forward` 模式，但删除分支后，会丢失分支历史信息。
可使用参数 `--no-ff` 禁用该模式、需要加上 `-m '说明'`，合并时会生成一个新的 `commit`。

~~可以隐藏当前工作场景~~
~~可以将commit复制到其他分支~~
~~多人协作时，其他人也修改了这个分支。可以先拉取下来，有冲突则解决冲突，并在本地提交，然后推送到远程~~

## 标签管理

为 `commit` 添加一个标签
