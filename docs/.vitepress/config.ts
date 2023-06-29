import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Nexvelt UI',
  description: 'The Next Level UI Technology.',

  lastUpdated: true,
  cleanUrls: true,
  appearance: 'dark',

  themeConfig: {
    logo: {
      light: '/logo-solid.svg',
      dark: '/logo-solid-dark.svg',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' },
        ],
      },
      {
        text: 'Elements',
        items: [
          { text: 'Alert', link: '/components/alert' },
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Button', link: '/elements/button' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nexvelt/ui' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Phojie Rengel',
    },

    search: {
      provider: 'local',
    },
  },

  markdown: {
    theme: 'one-dark-pro',
  },
})
