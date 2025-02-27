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
                <NSidebarMenuSubButton as-child>
                  <NLink :to="subItem.url">
                    <span>{{ subItem.title }}</span>
                  </NLink>
                </NSidebarMenuSubButton>
              </NSidebarMenuSubItem>
            </NSidebarMenuSub>
          </NCollapsibleContent>
        </NSidebarMenuItem>
      </NCollapsible>
    </NSidebarMenu>
  </NSidebarGroup>
</template>
