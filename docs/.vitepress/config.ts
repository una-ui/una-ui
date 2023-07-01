import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types'

const sidebarGuide: DefaultTheme.SidebarItem = {
  text: 'Guide',
  items: [
    { text: 'Introduction', link: '/guide/' },
    { text: 'Installation', link: '/guide/installation' },
    { text: 'Configuration', link: '/guide/configuration' },
    { text: 'Customization', link: '/guide/customization' },
    { text: 'Presets', link: '/guide/presets' },
    { text: 'Themes', link: '/guide/themes' },
  ],
}

const sidebarComponents: DefaultTheme.SidebarItem = {
  items: [
    {
      text: 'Elements',
      collapsed: false,
      items: [
        {
          text: 'Accordion (WIP)',
          link: '/elements/accordion',
        },
        {
          text: 'Alert (WIP)',
          link: '/elements/alert',
        },
        {
          text: 'Avatar (WIP)',
          link: '/elements/avatar',
        },
        {
          text: 'Badge (WIP)',
          link: '/elements/badge',
        },
        {
          text: 'Button (coming soon)',
          link: '/elements/button',
        },
        {
          text: 'Dropdown (WIP)',
          link: '/elements/dropdown',
        },
        {
          text: 'Icon (WIP)',
          link: '/elements/icon',
        },
        {
          text: 'Kbd (WIP)',
          link: '/elements/kbd',
        },
      ],
    },
    {
      text: 'Forms',
      collapsed: false,
      items: [
        {
          text: 'Checkbox (WIP)',
          link: '/forms/checkbox',
        },
        {
          text: 'Datepicker (WIP)',
          link: '/forms/datepicker',
        },
        {
          text: 'File (WIP)',
          link: '/forms/file',
        },
        {
          text: 'forms group (WIP)',
          link: '/forms/forms-group',
        },
        {
          text: 'Input (WIP)',
          link: '/forms/input',
        },
        {
          text: 'Radio (WIP)',
          link: '/forms/radio',
        },
        {
          text: 'Select (WIP)',
          link: '/forms/select',
        },
        {
          text: 'Switch (WIP)',
          link: '/forms/switch',
        },
        {
          text: 'Textarea (WIP)',
          link: '/forms/textarea',
        },
        {
          text: 'Toggle (WIP)',
          link: '/forms/toggle',
        },
      ],
    },
    {
      text: 'Data',
      collapsed: false,
      items: [
        {
          text: 'Table (WIP)',
          link: '/data/table',
        },
      ],
    }, {
      text: 'Navigation',
      collapsed: false,
      items: [
        {
          text: 'Breadcrumb (WIP)',
          link: '/navigation/breadcrumb',
        },
        {
          text: 'Pagination (WIP)',
          link: '/navigation/pagination',
        },
        {
          text: 'Tabs (WIP)',
          link: '/navigation/tabs',
        },
      ],
    },
    {
      text: 'Layout',
      collapsed: false,
      items: [
        {
          text: 'Card (WIP)',
          link: '/layout/card',
        },
        {
          text: 'Divider (WIP)',
          link: '/layout/divider',
        },
        {
          text: 'Skeleton (WIP)',
          link: '/layout/skeleton',
        },
      ],
    },
  ],
}

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
      // insert guide sidebar
      sidebarGuide,
      sidebarComponents,
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
