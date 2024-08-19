<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableCaptionProps } from '../../../types'

const props = defineProps<NTableCaptionProps>()
</script>

<template>
  <caption
    :class="cn('mt-4 text-sm text-muted', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </caption>
</template>
