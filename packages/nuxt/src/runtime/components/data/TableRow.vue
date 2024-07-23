<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <tr
    :class="cn('border-b border-base transition-colors hover:bg-muted data-[state=selected]:bg-muted', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </tr>
</template>
