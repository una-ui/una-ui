<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <th
    :class="cn('h-12 px-4 text-left align-middle font-medium text-muted [&:has([role=checkbox])]:pr-0', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </th>
</template>
