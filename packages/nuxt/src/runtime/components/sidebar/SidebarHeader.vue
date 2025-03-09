<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-sidebar="header"
    :class="cn('sidebar-header', props.class)"
  >
    <slot />
  </div>
</template>
