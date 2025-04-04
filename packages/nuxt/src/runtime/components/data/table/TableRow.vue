<script setup lang="ts">
import type { NTableRowProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { cn } from '../../../utils'

const props = defineProps<NTableRowProps>()

const rootProps = reactiveOmit(props, ['una', 'class'])
</script>

<template>
  <tr
    :class="cn(
      'table-row',
      props.una?.tableRow,
      props.class,
    )"
    v-bind="{ ...rootProps, ...$attrs }"
  >
    <slot />
  </tr>
</template>
