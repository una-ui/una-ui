<script setup lang="ts">
// This is sample data.
const data = {
  user: {
    name: 'Phojie Rengel',
    email: 'phojrengel@gmail.com',
    avatar: '/avatars/phojie.png',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: 'i-lucide-gallery-vertical-end',
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: 'i-lucide-audio-waveform',
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: 'i-lucide-command',
      plan: 'Free',
    },
  ],
  dashboards: [
    {
      name: 'Default',
      url: '/dashboards/default',
      icon: 'i-lucide-home',
    },
    {
      name: 'Project Management',
      url: '/dashboards/project-management',
      icon: 'i-lucide-folder',
    },
  ],
  navMain: [
    {
      title: 'Components',
      icon: 'i-lucide-square-terminal',
      url: '/components',
      isActive: true,
      items: [
        {
          title: 'Accordion',
          url: '/components/accordion',
          badge: 'deprecated' as const,
        },
        {
          title: 'Avatar',
          url: '/components/avatar',
        },
        {
          title: 'Breadcrumb',
          url: '/components/breadcrumb',
        },
        {
          title: 'Button',
          url: '/components/button',
        },
        {
          title: 'Card',
          url: '/components/card',
        },
        {
          title: 'Checkbox',
          url: '/components/checkbox',
        },
        {
          title: 'Collapsible',
          url: '/components/collapsible',
        },
        {
          title: 'Dialog',
          url: '/components/dialog',
        },
        {
          title: 'Dropdown Menu',
          url: '/components/dropdown-menu',
        },
        {
          title: 'Forms',
          url: '/components/forms',
        },
        {
          title: 'Navigation Menu',
          url: '/components/navigation-menu',
        },
        {
          title: 'Pagination',
          url: '/components/pagination',
        },
        {
          title: 'Popover',
          url: '/components/popover',
        },
        {
          title: 'Progress',
          url: '/components/progress',
        },
        {
          title: 'Radio Group',
          url: '/components/radio-group',
        },
        {
          title: 'Scroll Area',
          url: '/components/scroll-area',
        },
        {
          title: 'Select',
          url: '/components/select',
        },
        {
          title: 'Separator',
          url: '/components/separator',
        },
        {
          title: 'Sheet',
          url: '/components/sheet',
          badge: 'new' as const,
        },
        {
          title: 'Sidebar',
          url: '/components/sidebar',
          badge: 'hot' as const,
        },
        {
          title: 'Skeleton',
          url: '/components/skeleton',
        },
        {
          title: 'Slider',
          url: '/components/slider',
        },
        {
          title: 'Switch',
          url: '/components/switch',
        },
        {
          title: 'Table',
          url: '/components/table',
        },
        {
          title: 'Tabs',
          url: '/components/tabs',
        },
        {
          title: 'Toast',
          url: '/components/toast',
        },
        {
          title: 'Toggle',
          url: '/components/toggle',
        },
        {
          title: 'Tooltip',
          url: '/components/tooltip',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: 'i-lucide-bot',
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: 'i-lucide-book-open',
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: 'i-lucide-settings-2',
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: 'i-lucide-frame',
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: 'i-lucide-pie-chart',
    },
    {
      name: 'Travel',
      url: '#',
      icon: 'i-lucide-map',
    },
  ],
}
</script>

<template>
  <NSidebar
    collapsible="icon"
  >
    <template #header>
      <TeamSwitcher :teams="data.teams" />
    </template>
    <template #content>
      <NavDashboards :dashboards="data.dashboards" />
      <NavMain :items="data.navMain" />
      <NavProjects :projects="data.projects" />
    </template>
    <template #footer>
      <NavUser :user="data.user" />
    </template>
  </NSidebar>
</template>
