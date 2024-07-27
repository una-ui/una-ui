<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <caption
    :class="cn('mt-4 text-sm text-muted', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </caption>
</template>
