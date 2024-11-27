import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/web-site/',
  title: "cxyi7的个人网站",
  description: "cxyi7的个人网站站点",
  lastUpdated: true,

  themeConfig: {
    search: {
      provider: 'local'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 移动端 - 外观
    darkModeSwitchLabel: '外观',

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '菜单',


    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页',link: '/home' },
      { text: '工作',link: '/job/' },
      { text: '生活',link: '/life/' },
      { text: '网站',link: '/site/' }
    ],


    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍',link: '/home' },
          { text: '更新日志',link: '/update-log' }
        ]
      },
      {
        text: '工作',
        collapsed: false,
        items: [
          { text: '面试',link: '/job/interview/' },
          { text: '收藏',link: '/job/collect/' },
          { text: '技术文章',link: '/job/article/' },
          { text: '脚手架',link: '/job/scaffold/' },
          { text: '组件库',link: '/job/componentLibrary/' },
          { text: '方法库',link: '/job/methodLibrary/' },
        ]
      },
      {
        text: '生活',
        collapsed: false,
        items: [
          { text: '随笔',link: '/life/essay/' },
          { text: '点子',link: '/life/idea/' },
          { text: '旅游',link: '/life/travel/' },
        ]
      },
      {
        text: '网站',
        collapsed: false,
      }
    ],

    // socialLinks: [
    //   { icon: 'github',link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
