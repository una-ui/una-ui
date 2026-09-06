<script setup lang="ts">
defineProps<{
  projects: {
    name: string
    url: string
    icon: string
  }[]
}>()

const { isMobile } = useSidebar()
</script>

<template>
  <NSidebarGroup class="group-data-[collapsible=icon]:hidden">
    <NSidebarGroupLabel>
      Projects
    </NSidebarGroupLabel>
    <NSidebarMenu>
      <NSidebarMenuItem v-for="item in projects" :key="item.name">
        <NSidebarMenuButton as-child>
          <a :href="item.url">
            <NIcon :name="item.icon" />
            <span>{{ item.name }}</span>
          </a>
        </NSidebarMenuButton>
        <NDropdownMenu
          :_dropdown-menu-content="{
            side: isMobile ? 'bottom' : 'right',
            align: isMobile ? 'end' : 'start',
            sideOffset: 4,
          }"
          :items="[
            {
              leading: 'i-lucide-folder text-muted-foreground',
              label: 'View Project',
            },
            {
              leading: 'i-lucide-forward text-muted-foreground',
              label: 'Share Project',
            },
            {},
            {
              leading: 'i-lucide-trash text-muted-foreground',
              label: 'Delete Project',
            },
          ]"
        >
          <NSidebarMenuAction show-on-hover>
            <NIcon name="i-lucide-more-horizontal" class="text-sidebar-foreground/70" />
          </NSidebarMenuAction>
        </NDropdownMenu>
      </NSidebarMenuItem>

      <NSidebarMenuItem>
        <NSidebarMenuButton class="text-sidebar-foreground/70">
          <NIcon name="i-lucide-more-horizontal" class="text-sidebar-foreground/70" />
          <span>More</span>
        </NSidebarMenuButton>
      </NSidebarMenuItem>
    </NSidebarMenu>
  </NSidebarGroup>
</template>
