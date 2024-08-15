<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  dataPinned?: 'left' | 'right' | false
}>()
</script>

<template>
  <td
    :class="
      cn(
        'p-4 align-middle [&:has([role=checkbox])]:pr-0',
        { 'sticky bg-base': dataPinned },
        dataPinned === 'left' ? 'left-0' : 'right-0',
        props.class,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </td>
</template>
