<script setup lang="ts" generic="T extends { id?: string | number } | Record<string, any>">
import type { NSidebarMenuProps } from '../../types'
import { cn } from '../../utils'
import SidebarMenuItem from './SidebarMenuItem.vue'

const props = defineProps<NSidebarMenuProps<T>>()

function getKey(item: T) {
  if (props.itemKey)
    return item[props.itemKey]
  return 'id' in item ? item.id : JSON.stringify(item)
}
</script>

<template>
  <ul
    data-slot="sidebar-menu"
    data-sidebar="menu"
    :class="cn(
      'sidebar-menu',
      props.una?.sidebarMenu,
      props.class,
    )"
  >
    <slot>
      <SidebarMenuItem v-for="item in props.items" :key="getKey(item)">
        <slot name="item" :item="item" />
      </SidebarMenuItem>
    </slot>
  </ul>
</template>
