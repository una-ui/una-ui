<script setup lang="ts">
defineProps<{
  dashboards: {
    name: string
    url: string
    icon: string
  }[]
}>()

const { isMobile } = useSidebar()
</script>

<template>
  <NSidebarGroup
    class="group-data-[collapsible=icon]:hidden"
    label="Dashboards"
  >
    <NSidebarMenu :items="dashboards">
      <template #item="{ item }">
        <NSidebarMenuButton as-child>
          <NLink
            :to="item.url"
            active-class="bg-sidebar-accent text-sidebar-accent-foreground"
          >
            <NIcon :name="item.icon" />
            <span>{{ item.name }}</span>
          </NLink>
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
              label: 'View Dashboard',
            },
            {
              leading: 'i-lucide-forward text-muted-foreground',
              label: 'Share Dashboard',
            },
            {},
            {
              leading: 'i-lucide-trash text-muted-foreground',
              label: 'Delete Dashboard',
            },
          ]"
        >
          <NSidebarMenuAction show-on-hover>
            <NIcon name="i-lucide-more-horizontal" class="text-sidebar-foreground/70" />
          </NSidebarMenuAction>
        </NDropdownMenu>
      </template>
    </NSidebarMenu>
  </NSidebarGroup>
</template>
