import { sidebar } from "vuepress-theme-hope";

// 参考 https://github.com/rockbenben/LearnData/blob/main/docs/.vuepress/sidebar.ts
// 若要根据不同的目录配置多个不同的侧边栏，则参考 https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/docs/theme/src/.vuepress/sidebar/zh.ts

export default sidebar([
  {
    text: "会计实操",                // 菜单显示的文本
    icon: "",                              // 菜单的图标
    prefix: "/会计实操/",                // 页面的路径前缀
    link: "",                              // 点击后跳转的地址
    // collapsible: true,           // 菜单是否可折叠
    children: "structure",        // 自动扫描子目录
  },
  {
    text: "应用手册",
    icon: "",
    prefix: "/应用手册/",
    link: "",
    children: "structure",
  }
  ]);
