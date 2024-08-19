<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableBodyProps } from '../../../types'

const props = defineProps<NTableBodyProps>()
</script>

<template>
  <tbody
    :class="cn('[&_tr:last-child]:border-0 border-base', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </tbody>
</template>
