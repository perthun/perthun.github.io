import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as t,c,a as e,b as i,d,e as s}from"./app-1e709901.js";const r={},o=s('<p><strong>有待完善</strong></p><p>Git 是目前世界上最先进的分布式版本控制系统，简单而实用。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><ul><li>所有的版本控制系统，其实只能跟踪文本文件的改动，比如 txt 文件，网页，所有的程序代码等等，Git 也不例外。</li><li>建议使用 UTF-8 编码，并且不使用 Windows 自带的记事本。</li></ul><p>Git 的基本概念</p><ul><li>工作区：创建仓库的目录。</li><li>版本库：<code>.git</code> 文件夹，内部最重要的有称为 <code>index</code> 的暂存区、 Git 自动创建的第一个分支 <code>master</code>。</li><li><code>HEAD</code> 指针指向分支，分支指向当前的 <code>commit</code>。</li></ul><h2 id="安装-git-和创建仓库" tabindex="-1"><a class="header-anchor" href="#安装-git-和创建仓库" aria-hidden="true">#</a> 安装 Git 和创建仓库</h2>',6),v={href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"},u=s(`<p>安装完成后，还需要设置用户名和邮箱：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git config --global user.name &quot;Your Name&quot;
$ git config --global user.email &quot;email@example.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 加载某个目录
$ cd [dir]
# 创建仓库
$ git init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成后，这个目录就变成了一个仓库，会出现一个 <code>.git</code> 文件夹，这是 Git 用来跟踪管理仓库的，当前能看到的目录就变成了工作区。</p><blockquote><p>也可以在已经有东西的目录创建仓库。<br> Git 只能管理仓库目录下的文件（包括子目录）。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 将文件添加到暂存区
$ git add [file]
# 将所有文件添加到暂存区
$ git add -A

# 将文件提交到当前分支
$ git commit -m &#39;说明&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git 只会对已经提交到分支的文件进行版本管理。</p><h2 id="版本管理" tabindex="-1"><a class="header-anchor" href="#版本管理" aria-hidden="true">#</a> 版本管理</h2><p>Git 跟踪并管理的是修改而不是文件，只有添加到暂存区的修改，才能提交到当前分支。</p><p>查看仓库状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看仓库当前的状态，文件有无修改、是否添加和提交
$ git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>比较文件差异</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 比较工作区指定文件与暂存区之间的差异，如果暂存区没有该文件、才会与版本库最新版本进行比较
$ git diff [file]
# 比较工作区指定文件和版本库最新版本的差异
$ git diff HEAD -- [file]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>撤销修改和版本回退</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 丢弃工作区的修改，回到暂存区的状态，暂存区为空则回到当前分支的状态
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除文件也是一个修改，需要 <code>commit</code>。</p><blockquote><p><code>git checkout xxx</code> 是切换另一个分支。</p></blockquote><p>Git 的 <code>reset</code> 命令有三个参数</p><ul><li><code>--soft</code> 仅移动本地区（分支）的 <code>HEAD</code> 指针。</li><li><code>--mixed</code> 移动本地库的 <code>HEAD</code> 指针，并重置暂存区。</li><li><code>--hard</code> 移动本地库的 <code>HEAD</code> 指针，并重置暂存区和工作区。</li></ul><h2 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创造SSH Key
$ ssh-keygen -t rsa -C &quot;youremail@example.com&quot;
# 输出公钥
$ cat ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 GitHub 中添加公钥，可以在账户下添加，也可以在仓库下添加。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 测试 SSH 密钥
$ ssh -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 添加远程库
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-u</code> 参数把本地的 <code>master</code> 分支和远程的 <code>master</code> 分支关联，以后使用 <code>git push</code> 即可推送。</p><h2 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理" aria-hidden="true">#</a> 分支管理</h2>`,27),m={href:"https://www.liaoxuefeng.com/wiki/896043488029600/900003767775424",target:"_blank",rel:"noopener noreferrer"},b=s(`<ul><li><code>master</code>：默认创建的、主分支，要求稳定</li><li><code>dev</code>：工作分支</li><li><code>feature</code>：新功能分支，完成合并到主分支、放弃则删除</li><li><code>bug</code>：临时创建用于修复 bug 的分支</li></ul><p><s>更改分支名称</s></p><p>$ git branch -m [old name] [new name]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看分支
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 Git 无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。<br> 解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交。</p><p>分支合并时默认使用 <code>Fast forward</code> 模式，但删除分支后，会丢失分支历史信息。<br> 可使用参数 <code>--no-ff</code> 禁用该模式、需要加上 <code>-m &#39;说明&#39;</code>，合并时会生成一个新的 <code>commit</code>。</p><p><s>可以隐藏当前工作场景</s><br><s>可以将commit复制到其他分支</s><br><s>多人协作时，其他人也修改了这个分支。可以先拉取下来，有冲突则解决冲突，并在本地提交，然后推送到远程</s></p><h2 id="标签管理" tabindex="-1"><a class="header-anchor" href="#标签管理" aria-hidden="true">#</a> 标签管理</h2><p>为 <code>commit</code> 添加一个标签</p><hr class="footnotes-sep">`,10),g={class:"footnotes"},p={class:"footnotes-list"},h={id:"footnote1",class:"footnote-item"},x={href:"https://www.liaoxuefeng.com/wiki/896043488029600",target:"_blank",rel:"noopener noreferrer"},f=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function _($,k){const n=a("ExternalLinkIcon");return t(),c("div",null,[o,e("p",null,[i("Windows 安装 "),e("a",v,[i("Git"),d(n)]),i("。")]),u,e("p",null,[i("因为分支功能用得少（不用），所以简单记录下用法，"),e("a",m,[i("可参考教程"),d(n)]),i("。")]),b,e("section",g,[e("ol",p,[e("li",h,[e("p",null,[e("a",x,[i("廖雪峰的 Git 教程"),d(n)]),i(),f])])])])])}const E=l(r,[["render",_],["__file","Git 学习笔记.html.vue"]]);export{E as default};
