#!/usr/bin/env sh
###
 # @title: 部署配置文件
 # @date: 2021-08-08 22:29:58
 # @author: zhengyekun
 # @updated: 2021-08-08 23:19:43
 # @tags: 
 #   - 部署
### 对于这个脚本，请在git bash执行，或干脆设置VSCode的控制台为git bash

# 确保脚本抛出遇到的错误
set -e

# 如果没有打包先进行项目打包
# npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 这里到这个打包位置创建个库管理，然后部署到远程gh-pages分支
git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/BrucePhoebus/VIPABC-interview-experience.git master:gh-pages

cd -
