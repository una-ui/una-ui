<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li
    data-sidebar="menu-item"
    :class="cn('group/menu_item relative', props.class)"
  >
    <slot />
  </li>
</template>
