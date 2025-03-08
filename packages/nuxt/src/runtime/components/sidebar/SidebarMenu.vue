<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ul
    data-sidebar="menu"
    :class="cn('sidebar-menu', props.class)"
  >
    <slot />
  </ul>
</template>
