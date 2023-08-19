---
title: VuePress
date: 2023-07-29
order: 1
---

[VuePress](https://v2.vuepress.vuejs.org/zh/guide/) 是一个以 Markdown 为中心的静态网站生成器。你可以使用 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

> ~~图片会生成，但附件不会。~~

## 准备运行环境

搭建 VuePress 的运行环境。^[[VuePress-Theme-Hope 小白教程](https://theme-hope.vuejs.press/zh/cookbook/tutorial/env.html)]

- 下载 [Node.js](https://nodejs.org/zh-cn) 的长期维护版，在安装过程中，保持所有默认设置，一路下一步即可。
- 下载并安装 [Pnpm](https://pnpm.io/)，使用 PowerShell 执行 `iwr https://get.pnpm.io/install.ps1 -useb | iex`

## 创建项目

在选定的位置所在文件夹中打开终端，执行以下命令。

```
pnpm create vuepress-theme-hope [dir]
```

> [dir] 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称。  
其中需要注意的是：选择简体中文、需要部署到 GitHub Pages 的工作流、选择 docs 类型。初始化git仓库

可参考官方文档，了解[页面内容](https://theme-hope.vuejs.press/zh/cookbook/tutorial/content.html)和[项目结构](https://theme-hope.vuejs.press/zh/cookbook/tutorial/structure.html)。

## 基本配置

对 VuePress 项目进行基本的配置。

1. 删除案例文件。
2. ~~使用准备好的配置文件覆盖默认配置。~~（可跳过，推送脚本会自动复制）
    1. `deploy.sh` 部署文件
    2. `/src/README.md` 首页
    3. `/src/.vuepress/config.ts`
    4. `/src/.vuepress/theme.ts`
    5. `/src/.vuepress/navbar.ts` 导航栏
    6. `/src/.vuepress/sidebar.ts` 侧边栏
3. 本地仓库的分支修改成 `main`。

## GitHub 仓库设置

设置读写权限：进入仓库，点击 `Setting`、选择 `Actions` 下的 `General`，在 `Workflow permissions` 中选择 `Read and write permissions`。

设置部署分支：`gh-pages`

## 镜像


https://newzone.top/

## 常用命令

- `pnpm docs:dev` 启动开发服务器
- `pnpm docs:build` 构建项目并输出
- `pnpm docs:clean-dev` 清除缓存并启动开发服务器














