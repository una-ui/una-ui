import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types'

/* guide items */
const Guides: DefaultTheme.NavItemWithLink[] = [
  { text: 'Introduction', link: '/guide/' },
  { text: 'Installation', link: '/guide/installation' },
  { text: 'Configuration', link: '/guide/configuration' },
  { text: 'Customization', link: '/guide/customization' },
  { text: 'Presets', link: '/guide/presets' },
  { text: 'Theming', link: '/guide/theming' },
]

/* component items */
const Components: DefaultTheme.NavItemWithChildren[] = [
  {
    text: 'Elements',
    items: [
      {
        text: '🔴 Accordion',
        link: '/elements/accordion',
      },
      {
        text: '🔴 Alert',
        link: '/elements/alert',
      },
      {
        text: '🔴 Avatar',
        link: '/elements/avatar',
      },
      {
        text: '🔴 Badge',
        link: '/elements/badge',
      },
      {
        text: '🟡 Button',
        link: '/elements/button',
      },
      {
        text: '🔴 Dropdown',
        link: '/elements/dropdown',
      },
      {
        text: '🔴 Icon',
        link: '/elements/icon',
      },
      {
        text: '🔴 Kbd',
        link: '/elements/kbd',
      },
    ],
  },
  {
    text: 'Forms',
    items: [
      {
        text: '🔴 Checkbox',
        link: '/forms/checkbox',
      },
      {
        text: '🔴 Datepicker',
        link: '/forms/datepicker',
      },
      {
        text: '🔴 File',
        link: '/forms/file',
      },
      {
        text: '🔴 Form group',
        link: '/forms/form-group',
      },
      {
        text: '🔴 Input',
        link: '/forms/input',
      },
      {
        text: '🔴 Radio',
        link: '/forms/radio',
      },
      {
        text: '🔴 Select',
        link: '/forms/select',
      },
      {
        text: '🔴 Switch',
        link: '/forms/switch',
      },
      {
        text: '🔴 Textarea',
        link: '/forms/textarea',
      },
      {
        text: '🔴 Toggle',
        link: '/forms/toggle',
      },
    ],
  },
  {
    text: 'Data',
    items: [
      {
        text: '🔴 Table',
        link: '/data/table',
      },
    ],
  },
  {
    text: 'Navigation',
    items: [
      {
        text: '🔴 Breadcrumb',
        link: '/navigation/breadcrumb',
      },
      {
        text: '🔴 Pagination',
        link: '/navigation/pagination',
      },
      {
        text: '🔴 Tabs',
        link: '/navigation/tabs',
      },
    ],
  },
  {
    text: 'Layout',
    items: [
      {
        text: '🔴 Card',
        link: '/layout/card',
      },
      {
        text: '🔴 Divider',
        link: '/layout/divider',
      },
      {
        text: '🔴 Skeleton',
        link: '/layout/skeleton',
      },
    ],
  },
]

const SidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: 'Guide',
    items: Guides,
  },
]

const SidebarComponents: DefaultTheme.Sidebar = [
  {
    text: 'Components',
    items: Components,
  },
]

/* Nav */
const Nav: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
  {
    text: 'Guide',
    items: [
      {
        text: 'Guide',
        items: Guides,
      },
    ],
    activeMatch: '^/guide/',
  },
]

const isDev = process.env.NODE_ENV === 'development'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'NexveltUI',
  description: 'The Next Level UI Technology.',

  head: [
    !isDev
      ? ['script', {
          'defer': 'true',
          'data-domain': 'ui.nexvelt.com',
          'src': 'https://plausible.io/js/script.js',
        }]
      : ['script', {}],
    !isDev
      ? ['script', {
          defer: 'true',
          src: '/_vercel/insights/script.js',
        }]
      : ['script', {}],
  ],

  lastUpdated: true,
  cleanUrls: true,
  appearance: 'dark',

  themeConfig: {
    logo: {
      light: '/logo-solid.svg',
      dark: '/logo-solid-dark.svg',
    },
    nav: Nav,

    sidebar: [
      // insert guide sidebar
      ...SidebarGuide,
      ...SidebarComponents,
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
