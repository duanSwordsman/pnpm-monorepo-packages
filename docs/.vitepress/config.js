import { demoBlockPlugin } from 'vitepress-theme-demoblock'
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
  ]
}
const config = {
  server: {
    port: 8080
  },
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      md.use(demoBlockPlugin)
    }
  }
}

export default config