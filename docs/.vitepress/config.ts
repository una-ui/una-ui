import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Nexvelt UI',
  description: 'The next level UI',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo.svg',
      dark: '/logo-dark.svg',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/index' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nexvelt/ui' },
    ],
  },
})
