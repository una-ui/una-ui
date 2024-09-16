<script setup lang="ts">
import type { NTableCaptionProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NTableCaptionProps>()
</script>

<template>
  <caption
    :class="cn(
      'table-caption',
      props.class,
      props?.una?.tableCaption,
    )"
    v-bind="$attrs"
  >
    <slot />
  </caption>
</template>
