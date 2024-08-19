<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableHeaderProps } from '../../../types'

const props = defineProps<NTableHeaderProps>()
</script>

<template>
  <thead
    :class="cn('[&_tr]:border-b border-base', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </thead>
</template>
