---
title: git规范
date: 2021-07-20 11:29:19
author: 郑烨锟
updated: 2021-07-22 16:31:39
tags: 	
 - git
 - 规范
---
# git规范

## 规范１：

* 所有特性开发，均开分支feature/{id}-feature-short-name，{id}为特性的redmine任务号；

* 所有bug修复，均开分支bugfix/{id}-bug-short-name，{id}为bug的redmine号。

## 规范２：

* master为稳定分支，进入此分支的代码都必须经过review；

* develop为下一个即将发布的版本开发分支，一旦版本开发完毕，转到release/{version}分支，进行最后的完善以及bug修复。

## 规范３：

* 所有bugix分支,feature分支开发完成后，需merge到developer分支时，都需在提交Gitlab中提交Merge Request进行Code Review；

* release分支，需merge到master分支时，也需在Gitlab中提交Merge Requst，进行Code Review；

* 首先由各组组长Code Review，再由Wellming Review；

* Wellming的代码，由各组组长Review。

## 规范４：

* 新增的Service方法及类，需写单元测试；

* 单元测试也纳入Code Review；

* 需单元测试跑通后才能提交代码；

* 测试集成一旦BUILD失败，请立即修复。

## 规范５：

* GIT COMMIT 日志，需写清楚本次提交的内容；

* 一次COMMIT只做一件事情。

## 提交信息

Commit message一般包括三部分

[Header](#header) | [Body](#body) | [Footer](#footer)
### Header

  type(scope)：subject

* type：用于说明commit的类别，规定为如下几种
* feat：新增功能；
* fix：修复bug；
* docs：修改文档；
* refactor：代码重构，未新增任何功能和修复任何bug；
* build：改变构建流程，新增依赖库、工具等（例如webpack修改）；
* style：仅仅修改了空格、缩进等，不改变代码逻辑；
* perf：改善性能和体现的修改；
* chore：非src和test的修改；
* test：测试用例的修改；
* ci：自动化流程配置修改；
* revert：回滚到上一个版本；
* scope：【可选】用于说明commit的影响范围
* subject：commit的简要说明，尽量简短

### Body

对本次commit的详细描述，可分多行

### Footer

* 不兼容变动：需要描述相关信息
* 关闭指定Issue：输入Issue信息
