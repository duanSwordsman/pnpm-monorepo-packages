import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import nav from './links/navbar'
import sidebar from './links/sidebar'

export default defineConfig({
  title: 'Vitepress',
  description: '使用 Vitepress 搭建组件库文档站点。',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  base: process.env.BASE || '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  markdown: {
    headers: {
      level: [0, 0]
    },

    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less'
      })
    }
  },

  themeConfig: {
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    logo: '/undraw_welcome_cats_thqn.svg',
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/duanSwordsman/pnpm-monorepo-packages' }
    ],
    footer: {
      copyright: 'Copyright © 2022-present'
    }
  }
})
