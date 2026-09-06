<script setup lang="ts">
defineProps<{
  items: {
    title: string
    url: string
    icon?: string
    isActive?: boolean
    items?: {
      title: string
      url: string
      badge?: 'new' | 'hot' | 'beta' | 'deprecated'
    }[]
  }[]
}>()
</script>

<template>
  <NSidebarGroup>
    <NSidebarGroupLabel>Platform</NSidebarGroupLabel>
    <NSidebarMenu>
      <NCollapsible
        v-for="item in items"
        :key="item.title"
        as-child
        :default-open="item.isActive"
        class="group/collapsible"
      >
        <NSidebarMenuItem>
          <NCollapsibleTrigger as-child>
            <NSidebarMenuButton :tooltip="item.title">
              <NIcon v-if="item.icon" :name="item.icon" />
              <span>{{ item.title }}</span>
              <NIcon name="i-lucide-chevron-right" class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </NSidebarMenuButton>
          </NCollapsibleTrigger>
          <NCollapsibleContent>
            <NSidebarMenuSub>
              <NSidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                <NSidebarMenuSubButton :to="subItem.url" :is-active="subItem.url === $route.path">
                  <span>{{ subItem.title }}</span>
                  <NBadge
                    v-if="subItem.badge"
                    size="10px"
                    :badge="subItem.badge === 'new' ? 'solid-lime' : subItem.badge === 'hot' ? 'solid-orange' : subItem.badge === 'beta' ? 'solid-blue' : 'solid-red'"
                    class="ml-auto capitalize"
                  >
                    {{ subItem.badge }}
                  </NBadge>
                </NSidebarMenuSubButton>
              </NSidebarMenuSubItem>
            </NSidebarMenuSub>
          </NCollapsibleContent>
        </NSidebarMenuItem>
      </NCollapsible>
    </NSidebarMenu>
  </NSidebarGroup>
</template>
