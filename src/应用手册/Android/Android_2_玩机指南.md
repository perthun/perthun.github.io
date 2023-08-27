---
title: Android 玩机指南
icon: 
order: 2
date: 2023-08-26
---

## 认识 Android 系统

Android 系统分为原生系统（AOSP）、类原生系统（如 LineageOS）^[[Android本来的样子——类原生Android系统体验](https://www.bilibili.com/read/cv16393669)]、厂商定制系统（如 MIUI、EMUI）。^[[Android 玩机终极指南](https://sspai.com/post/43338)]

在移动端操作系统中，目前 Android 系统的全球市场占有率是最高的，运行 Android 系统的设备主要是智能手机和平板电脑，然而安卓系统还运行在其它产品上，包括手表、电视、数码相机、智能家居、智能眼镜、车载信息娱乐系统、游戏机等等。

Android 玩机社区论坛

- [LineageOS 中文论坛](https://www.lineageos.org.cn/)
- [XDA Forum](https://www.xda-developers.com/)：国外的开发者社区(全英文站)，里面汇聚了国内外顶尖的安卓开发者，拥有最全机型的 ROM，APP，Xposed 框架，游戏资源等全部有汇聚。还有官方提供的 App 如 XDA Labs、XDA Feed，可以方便地查看最新的 Android 动态。
- [机锋论坛](http://bbs.gfan.com/)：算是国内的小XDA论坛吧。
- [酷安网](https://www.coolapk.com/)：一个国内应用市场平台，里面几乎所有 App 有对应的应用吧供酷友交流。也是一个交友、技术交流的社区。
- [安卓巴士](http://www.apkbus.com/)：国内的安卓开发者社区，开发工具、教程、源码等等资源很丰富。
- 手机品牌官方论坛，如华为，小米，魅族都有自己的论坛供粉丝交流。

---

BootLoader

- 引导加载程序，可形象的理解为硬件锁。
- 当 BL 锁住时，手机便之人可官方固件。
- 解锁方式有官解和强解，官解是向官方申请解锁，强解是利用 BUG 来强制解锁 BL、但并不安全。

没有解锁 BL，就无法进行 FastBoot 刷机。

---

Recovery

- 简称 Rec，是手机的工程模式、定位类似 PC 平台的 WinPE，可进行卡刷。
- 官方的 Rec 做了限制，无法刷入第三方的 ROM，所以刷机前一般要先刷入第三方的 Rec 以解除限制和获得更多功能。
- 关机状态下，按`音量上键 + 电源键`即可进入 Recovery。

FastBoot：引导模式，可进行线刷，即USB 数据线连接手机的一种刷机模式

---

Root 权限

- 又称根权限，是 Linux 系统中的超级管理员用户账户。
- 可刷入开源的 [Magisk](https://magiskmanager.com/)，或在 [XDA下载](https://forum.xda-developers.com/apps/magisk)。
- 它可隐藏 Root 不被系统检测到，同时也支持框架功能，被视为 Xposed 框架和 SuperSU 的继任者。

Root 安全性问题

- Root 权限是最高的跟权限，可读写系统下的任意文件。
- 如果不良 App 获取了 Root 权限，就像是把家门钥匙交给坏人，让他任意进出一样。

---

Xposed 框架

- 可以在不修改 APK 的情况下修改系统功能和应用程序的框架，而所有的修改都在内存当中进行，所以只需要停用 Xposed 框架，便能恢复原样。
- 可以用 Xposed 模块实现几乎所有能想到的功能，模块本质也是 APK 文件，但不需要后台运行和开机启动也能起到作用。

获取 Xposed 模块

- 网页端：从[官网](http://repo.xposed.info/module-overview)，[Xposed 中文论坛](http://xposed.appkg.com/category/modules)或者 [XDA 论坛下载](https://forum.xda-developers.com/xposed/modules)
- 手机端：Xposed Installer，酷安 App 或者 XDA Labs 下载
- 社区，手机品牌官方论坛等

Xposed 模块功能强大，因此推荐只在值得信任的网站下载安装，否则可能造成不必要的损失。

---

谷歌服务框架是谷歌公司的系列应用在 Android 上运行的基础软件环境，谷歌公司为 Android 提供了一套系统服务（包括账号、联系人、手机查找等），包括谷歌服务框架在内的一系列应用被称为 GApps。

由于谷歌在中国大陆被屏蔽，所以中国产的手机一般会进行系统定制，把谷歌相关的服务框架全部剔除，替换为自家的云服务和相关应用。

>可刷开源的 microG 代替 Open GApps 和 GMS 来实现谷歌服务。

## 刷机的流程

以小米手机刷入 LineageOS 为例

1. 设置 adb 和 fastboot，并安装小米驱动（利用[解锁程序](https://www.miui.com/unlock/index.html)来安装）
2. BL解锁
3. 刷底包
4. 刷 Rec
5. 刷 ROM

可参考相关教程：[红米 K40 刷入 LineageOS](https://wiki.lineageos.org/devices/alioth/install/variant2)、[小米手机刷 LineageOS 系统操作指南](https://miuiver.com/install-lineageos-on-xiaomi/)、[保姆级适用于Essential PH-1的刷机教程](https://www.bilibili.com/read/cv16642433)，**但具体流程见 ROM 官方发布的教程**。

> [LineageOS WiFi图标感叹号](https://miuiver.com/change-generate_204/)
