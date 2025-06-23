<script setup lang="ts">
import type { NPinInputGroupProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { Primitive, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NPinInputGroupProps>()
const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Primitive
    data-slot="pin-input-group"
    v-bind="forwardedProps"
    :class="cn('pin-input-group', props.class)"
  >
    <slot />
  </Primitive>
</template>
