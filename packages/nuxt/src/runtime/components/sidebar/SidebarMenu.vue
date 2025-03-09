<script setup lang="ts" generic="T extends { id?: string | number } | Record<string, any>">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'
import SidebarMenuItem from './SidebarMenuItem.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  items?: T[]
  /**
   * Property from each item to use as a key
   * @default 'id'
   */
  itemKey?: keyof T
}>()

function getKey(item: T) {
  if (props.itemKey)
    return item[props.itemKey]
  return 'id' in item ? item.id : JSON.stringify(item)
}
</script>

<template>
  <ul
    data-sidebar="menu"
    :class="cn('sidebar-menu', props.class)"
  >
    <slot>
      <SidebarMenuItem v-for="item in items" :key="getKey(item)">
        <slot name="item" :item="item" />
      </SidebarMenuItem>
    </slot>
  </ul>
</template>
