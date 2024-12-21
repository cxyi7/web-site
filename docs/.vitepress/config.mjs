import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  base: '/web-site/',
  title: "cxyi7的个人网站",
  description: "cxyi7的个人网站站点",
  // lastUpdated: true,

  themeConfig: {
    search: {
      provider: 'local',
      options: {
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈'
            }
          }
        }
      }
    },

    // 最后更新时间
    // lastUpdated: {
    //   text: '最后更新时间',
    //   formatOptions: {
    //     dateStyle: 'full',
    //     timeStyle: 'medium'
    //   }
    // },

    // 文章翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '页面导航'
    },


    // 移动端 - 外观
    darkModeSwitchLabel: '外观',

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '菜单',


    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/home' },
      { text: '工作', link: '/job/' },
      { text: '生活', link: '/life/' },
      { text: '网站', link: '/site/' }
    ],


    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/home' },
          { text: '更新日志', link: '/update-log' }
        ]
      },
      {
        text: '工作',
        items: [
          {
            text: '程序员',
            link: '/job/programmer/',
            collapsed: true,
            items: [
              { text: '面试', link: '/job/programmer/interview/' },
              { text: '收藏', link: '/job/programmer/collect/' },
              {
                text: '技术文章', link: '/job/programmer/article/',
                collapsed: true,
                items: [
                  {
                    text: 'vitepress的使用和部署',
                    link: '/job/programmer/article/20241128-vitepress',
                  },
                ]
              },
              { text: '脚手架', link: '/job/programmer/scaffold/' },
              { text: '组件库', link: '/job/programmer/componentLibrary/' },
              { text: '方法库', link: '/job/programmer/methodLibrary/' },
            ]
          },
          {
            text: '产品经理',
            link: '/job/productManager/',
            collapsed: true,
            items: [
              { text: '面试', link: '/job/productManager/interview/' },
              { text: '收藏', link: '/job/productManager/collect/' },
            ]
          },
          {
            text: '设计师',
            link: '/job/designer/',
            collapsed: true,
            items: [
              { text: '收藏', link: '/job/designer/collect/' },
            ]
          },
          {
            text: '销售',
            link: '/job/sales/',
            collapsed: true,
            items: [
              { text: '收藏', link: '/job/sales/collect/' },
            ]
          }
        ]
      },
      {
        text: '生活',
        items: [
          {
            text: '随笔',
            link: '/life/essay/',
            collapsed: true,
            items: [
              {
                text: '产品启示录观后感',
                link: '/life/essay/20241202-thingk',
              },
              {
                text: '关于复利的理解',
                link: '/life/essay/20241204-thingk',
              },
              {
                text: '关于职场裙带关系',
                link: '/life/essay/20241206-thingk',
              },
              {
                text: '关于跳槽的想法',
                link: '/life/essay/20241217-thingk',
              },
            ]
          },
          {
            text: '点子',
            link: '/life/idea/',
            collapsed: true,
            items: [
              {
                text: '站得高看的确实远',
                link: '/life/idea/20241219-idea',
              },
              {
                text: '做正确的事情',
                link: '/life/idea/20241221-idea',
              },
            ]
          },
          { text: '旅游', link: '/life/travel/' },
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
