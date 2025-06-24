<script setup lang="ts">
import type { NPinInputSeparatorProps } from '../../types'
import { Primitive, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'
import Icon from '../elements/Icon.vue'

const props = defineProps<NPinInputSeparatorProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <Primitive
    data-slot="pin-input-separator"
    v-bind="forwardedProps"
    :class="cn(
      'pin-input-separator',
      props.una?.pinInputSeparator,
      props.class,
    )"
  >
    <slot>
      <Icon :name="props.separator" />
    </slot>
  </Primitive>
</template>
