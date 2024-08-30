<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span :class="cn('dropdown-menu-shortcut', props.class)">
    <slot />
  </span>
</template>
