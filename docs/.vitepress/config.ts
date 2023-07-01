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
      {
        text: 'Guide',
        link: '/guide/',
        activeMatch: '^/guide/',
      },
      {
        text: 'Merchandise',
        link: 'https://www.thegithubshop.com/',
        target: '_self',
        rel: 'sponsored',
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Configuration', link: '/guide/configuration' },
          { text: 'Customization', link: '/guide/customization' },
          { text: 'Presets', link: '/guide/presets' },
          { text: 'Themes', link: '/guide/themes' },
        ],
      },
      {
        text: 'Components',
        items: [
          {
            text: 'Elements',
            collapsed: false,
            items: [
              {
                text: 'Accordion (Coming Soon)',
                link: '/elements/accordion',
              },
              {
                text: 'Alert (Coming Soon)',
                link: '/elements/alert',
              },
              {
                text: 'Avatar (Coming Soon)',
                link: '/elements/avatar',
              },
              {
                text: 'Badge (Coming Soon)',
                link: '/elements/badge',
              },
              {
                text: 'Button (WIP)',
                link: '/elements/button',
              },
              {
                text: 'Dropdown (Coming Soon)',
                link: '/elements/dropdown',
              },
              {
                text: 'Icon (Coming Soon)',
                link: '/elements/icon',
              },
              {
                text: 'Kbd (Coming Soon)',
                link: '/elements/kbd',
              },
            ],
          },
        ],
      },
    ],

    editLink: {
      pattern: 'https://github.com/nexvelt/ui/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },

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
