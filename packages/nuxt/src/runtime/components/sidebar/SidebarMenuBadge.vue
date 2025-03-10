<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="menu-badge"
    :class="cn(
      'sidebar-menu-badge',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
