---
title: 关于github的pages配置部署总结
date: 2021-08-08 23:06:44
author: zhengyekun
updated: 2021-08-09 00:01:11
tags: 
  - 分享
  - pages
---
# 关于github的pages配置部署总结

虽然说gitee国内网络更好，但是很遗憾暂时维护状态，github使用手机流量网速还是可以接受的(当然或许是假想，不过很多局域网限制的确比较多)

这个现在可以部署多个路径项目，我已经部署三个项目上去，以项目名区分，这个现在都支持了

## 部署

从`deploy.sh`基本上可以看到基本逻辑就是在打包的文件创建一个库进行管理，然后将这些打包的文件部署到远程库的`gh-pages`分支，而这个分支在github平台上是要手动设置为GitHub pages的访问分支

在GitHub这个项目的setting的`GitHub pages`点击进行进行设置，选择`gh-pages`分支何root根路径，因为推送的`index.html`就是根路径

之后访问`https://brucephoebus.github.io/vipabc-interview-experience/`(参考)这个路径就可以看出相应效果

这种方式并不是分支管理，而是强行推送到指定库的指定分支去覆盖，这样就没办法开源部署，不过也没必要

> GitHub pages的访问比github本身的访问好很多，可能是不同服务器的问题

## 注意事项

#### 根路径是库的项目名

vuepress的config的base需要设置项目名，这个平台库名叫什么就是什么，gitee自动抹平大小写，但是github还是有大小写之分的，所以同一小写吧

> 参考：[部署 VuePress 到 GitHub Pages (超详细)](https://juejin.cn/post/6844904122873806856#comment)
