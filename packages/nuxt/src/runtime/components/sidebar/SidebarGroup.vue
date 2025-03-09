<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'
import SidebarGroupLabel from './SidebarGroupLabel.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  label?: string
}>()
</script>

<template>
  <div
    data-sidebar="group"
    :class="cn('sidebar-group', props.class)"
  >
    <slot name="root">
      <SidebarGroupLabel v-if="label">
        <slot name="label">
          {{ label }}
        </slot>
      </SidebarGroupLabel>

      <slot />
    </slot>
  </div>
</template>
