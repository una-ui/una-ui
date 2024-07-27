<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <thead
    :class="cn('[&_tr]:border-b border-base', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </thead>
</template>
