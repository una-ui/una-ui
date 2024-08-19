<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableRowProps } from '../../../types'

const props = defineProps<NTableRowProps>()
</script>

<template>
  <tr
    :class="cn('border-b border-base hover:bg-muted data-[state=selected]:bg-muted', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </tr>
</template>
