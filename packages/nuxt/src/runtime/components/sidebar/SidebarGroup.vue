<script setup lang="ts">
import type { NSidebarGroupProps } from '../../types'
import { cn } from '../../utils'
import SidebarGroupLabel from './SidebarGroupLabel.vue'

const props = defineProps<NSidebarGroupProps>()
</script>

<template>
  <div
    data-sidebar="group"
    :class="cn('sidebar-group', props.class)"
  >
    <slot name="root">
      <SidebarGroupLabel v-if="props.label">
        <slot name="label">
          {{ props.label }}
        </slot>
      </SidebarGroupLabel>

      <slot />
    </slot>
  </div>
</template>
