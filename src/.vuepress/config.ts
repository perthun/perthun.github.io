import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Tiian 的学习笔记",
  description: "Tiian 的学习笔记",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
