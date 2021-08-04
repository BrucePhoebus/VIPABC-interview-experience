---
title: eslint规范
date: 2021-07-20 18:12:42
author: 郑烨锟
updated: 2021-07-26 10:13:09
tags: 	
 - 规范
 - eslint
---
# eslint规范

## VSCode开发保存即检查规范问题并修正

> 注：这里推荐使用VSCode

1. 安装ESLint插件，让工具支持检查

2. setting设置让vscode支持保存即检查修正

```js
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // 保存时格式化
  "editor.formatOnSave": false,
  // prettier 设置语句末尾加分号
  "prettier.eslintIntegration": true,   // 与eslint整合
  "prettier.semi": false,
  "prettier.printWidth": 140,
  //配置eslint
  "eslint.autoFixOnSave": true,  //  启用保存时自动修复,默认只支持.js文件
  "eslint.validate": [
     "javascript",  //  用eslint的规则检测js文件
     {
       "language": "vue",   // 检测vue文件
       "autoFix": true   //  为vue文件开启保存自动修复的功能
     },
     {
       "language": "html",
       "autoFix": true
     },
  ],
}
```

> 注：这里需要花点时间处理eslint和prettier的冲突问题，这是存在的问题，有些同时因为吗，没有调和好导致一直处于报错状态，甚至想要放弃使用eslint所有检查，建议花点时间创造一个良好的工具环境

3. 关于关闭eslint

* 虽然初期要适应eslint是件麻烦的事情，虽然很有促进进步的意义，但是为了不妨碍项目进度，有些时候关闭eslint也是个选择

* 对于vue项目，主要是关闭运行时检查，让不影响项目开发；或直接修改`.eslintrc.js`文件，关闭对应的规则项：`"off"`/`0`。并且可能需要调整工具的检查，有时候可能不小心配成了严格检查

```json
// 通过vue.config.js根配置处设置这个，关闭eslint插件运行时检查，注意重启
{
  lintOnSave: false,
}
```

## eslint规则

```js
rules: {
  // 允许console打印在控制台
  'no-console': 'off',
  // 线上禁用debugger
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'generator-star-spacing': 'off',
  'comma-dangle': 'off',
  'spaced-comment': 'off',
  'space-before-function-parent': 'off',
  'no-trailing-spaces': ["warn", { "ignoreComments": true }],
  'no-mixed-operators': 0,
  'no-unused-vars': 0,
  'vue/max-attributes-per-line': [
    2,
    {
      'singleline': 5,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }
  ],
  'vue/require-v-for-key': 0,
  'vue/attribute-hyphenation': 0,
  'vue/html-self-closing': 0,
  'vue/component-name-in-template-casing': 0,
  'vue/html-closing-bracket-spacing': 0,
  'vue/singleline-html-element-content-newline': 0,
  'vue/no-unused-components': 0,
  'vue/multiline-html-element-content-newline': 0,
  'vue/no-use-v-if-with-v-for': 0,
  'vue/html-closing-bracket-newline': 0,
  'vue/no-parsing-error': 0,
  'vue/html-indent': 0,
  'vue/name-property-casing': ['warn', 'kebab-case'],
  'no-tabs': 0,
  // 单引号
  'quotes': 0,
  'semi': [0],  // 句尾逗号不报错
  'comma-dangle': 0,  // 尾随逗号不报错
  'no-delete-var': 2,
  'prefer-const': [
    2,
    {
      'ignoreReadBeforeAssign': false
    }
  ],
  'template-curly-spacing': 'off',
  // 缩进使用tab
  'indent': 'off',
  'space-before-function-paren': 'off',
  'no-mixed-spaces-and-tabs': 'off',
}
```

> 这里或许有很多是`"off"`/`0`，主要是团队开发，很多限制影响快速开发进度，亦或者有些限制完全没有必要，这个需要慢慢完善

#### 重要规则说明

1. 缩进使用tab

> 缩进请使用tab，如果想要4个空格显示可以通过工具自行配置
