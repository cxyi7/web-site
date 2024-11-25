import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/web-site/',
  title: "cxyi7的个人网站",
  description: "cxyi7的个人网站站点",
  lastUpdated: true,
  search: {
    provider: 'local'
  },
  themeConfig: {
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
          { text: '自我介绍',link: '/home' },
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
