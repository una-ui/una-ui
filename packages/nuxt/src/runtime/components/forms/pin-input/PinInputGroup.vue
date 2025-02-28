<script setup lang="ts">
import type { NPinInputGroupProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { cn } from '../../../utils'

const props = defineProps<NPinInputGroupProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <div
    v-bind="delegatedProps"
    :class="cn(
      'pin-input-group',
      props.class,
      props.una?.pinInputGroup,
    )"
  >
    <slot />
  </div>
</template>
