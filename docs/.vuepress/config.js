/* 
  全局配置文件
*/
const moment = require('moment');

module.exports = {
  title: '面经笔记', // 设置网站标题
  description: '面经工作学习笔记',
  base: '/vipabc-interview-experience/', // 设置站点根路径
  dest: 'docs/.vuepress/dist', // 设置打包输出目录
  port: 8888,
  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.png' }
    ]
  ],
  themeConfig: {
    // 添加导航栏
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '面经',
        link: '/interview/'
      },
      {
        text: '分享',
        link: '/Share/'
      },
      {
        text: '算法',
        link: '/Algorithm/'
      },
      {
        text: '问题',
        link: '/Question/'
      },
      {
        text: '规范',
        link: '/Standard/'
      },
      {
        text: '相关帮助',
        link: '/help/'
      },
      {
        text: 'gitLab',
        link: 'https://gitee.com/s_phoebus/vipabc-interview-experience',
      },
    ],
    // 为以下路由添加左侧边栏 
    sidebar: {
      '/Algorithm/': [
        '',
      ],
      '/help/': [
        '',
        'git入门',
        'markdown语法',
        'vuepress使用经验指南',
      ],
      '/Standard/': [
        '',
        '编码规范',
        'git规范',
        '注释规范',
        'eslint规范',
      ],
      '/Question/': [
        '',
        '关于VuePress使用的一些问题',
        'Vue/'
      ],
      '/interview/': [
        '',
        '面试中建议问的一些问题',
        '面试中的注意事项',
        '面试中比较尖锐的问题',
        '面试中难的技术问题',
        '关于外包的一些想法',
      ],
      '/Share/': [
        '',
        '一些经验推荐',
        '一些书籍的推荐',
        '关于前端体系化的一些整理',
        '整理一些有益的练习程序',
        '关于github的pages配置部署总结',
        'git远程库和fork开源库等操作经验总结',
      ],
      '/Book/': [
        '',
      ]
    },
    sidebarDepth: 2, // 左侧导航显示的层级
    lastUpdated: '更新时间'
  },
  plugins: {
    '@vuepress/back-to-top': true,
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    },
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    "vuepress-plugin-code-copy": true,
    "vuepress-plugin-nuggets-style-copy": {
      copyText: "复制代码",
      tip: {
        content: "复制成功!",
      },
    },
  },
  markdown: {
    // 显示代码行号
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  chainWebpack: {
    resolve: {
      alias: {
        '@alias': './public'
      }
    }
  },
}