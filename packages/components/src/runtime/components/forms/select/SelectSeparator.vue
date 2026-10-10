<script setup lang="ts">
import type { NSelectSeparator } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { SelectSeparator } from 'reka-ui'

import { cn } from '../../../utils'

const props = defineProps<NSelectSeparator>()
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <SelectSeparator
    v-bind="delegatedProps"
    :class="cn(
      'select-separator',
      props.una?.selectSeparator,
      props.class,
    )"
  />
</template>
