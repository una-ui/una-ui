<script setup lang="ts">
import type { NSelectGroupProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { SelectGroup } from 'reka-ui'

import { cn } from '../../../utils'

const props = defineProps<NSelectGroupProps>()
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <SelectGroup
    :class="cn(
      'select-group',
      props.una?.selectGroup,
      props.class,
    )"
    v-bind="delegatedProps"
  >
    <slot />
  </SelectGroup>
</template>
