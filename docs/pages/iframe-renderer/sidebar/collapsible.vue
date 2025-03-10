<script setup lang="ts">
// This is sample data.
const data = {
  user: {
    name: 'Phojie Rengel',
    email: 'phojrengel@gmail.com',
    avatar: '/images/phojie.png',
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
  navMain: [
    {
      title: 'Playground',
      url: '#',
      icon: 'i-lucide-square-terminal',
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
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
      <NavMain :items="data.navMain" />
      <NavProjects :projects="data.projects" />
    </template>
    <template #footer>
      <NavUser :user="data.user" />
    </template>
  </NSidebar>
</template>
