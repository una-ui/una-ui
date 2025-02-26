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
          :_dropdownMenuContent="{
            side: isMobile ? 'bottom' : 'right',
            align: isMobile ? 'end' : 'start',
            sideOffset: 4,
          }"
        >
          <NSidebarMenuAction show-on-hover>
            <NIcon name="i-lucide-more-horizontal" class="text-sidebar-foreground/70" />
            <span class="sr-only">More</span>
          </NSidebarMenuAction>

          <template #content>
            <NDropdownMenuItem>
              <NIcon name="i-lucide-folder" class="text-muted-foreground" />
              <span>View Project</span>
            </NDropdownMenuItem>
            <NDropdownMenuItem>
              <NIcon name="i-lucide-forward" class="text-muted-foreground" />
              <span>Share Project</span>
            </NDropdownMenuItem>
            <NDropdownMenuSeparator />
            <NDropdownMenuItem>
              <NIcon name="i-lucide-trash" class="text-muted-foreground" />
              <span>Delete Project</span>
            </NDropdownMenuItem>
          </template>
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
