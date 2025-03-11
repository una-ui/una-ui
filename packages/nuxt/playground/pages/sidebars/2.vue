<script setup lang="ts">
definePageMeta({
  layout: false,
})

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
  <NSidebarProvider>
    <NSidebar
      collapsible="offcanvas"
      variant="floating"
    >
      <NSidebarHeader>
        <TeamSwitcher :teams="data.teams" />
      </NSidebarHeader>
      <NSidebarContent>
        <NavMain :items="data.navMain" />
        <NavProjects :projects="data.projects" />
      </NSidebarContent>
      <NSidebarFooter>
        <NavUser :user="data.user" />
      </NSidebarFooter>
      <NSidebarRail />
    </NSidebar>

    <NSidebarInset>
      <header class="h-16 flex shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar_wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <NSidebarTrigger class="-ml-1" />
          <NSeparator orientation="vertical" class="mx-0 h-4" />
          <NBreadcrumb
            breadcrumb-active="text-black"
            :items="[
              {
                label: 'Components',
                to: '#',
              },
              {
                label: 'Sidebar',
                to: '#',
              },
            ]"
          />
        </div>
      </header>
    </NSidebarInset>
  </NSidebarProvider>
</template>
