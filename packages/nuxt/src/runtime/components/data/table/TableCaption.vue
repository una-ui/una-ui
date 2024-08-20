<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableCaptionProps } from '../../../types'

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
