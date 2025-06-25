<script setup lang="ts">
import type { PinInputRootEmits } from 'reka-ui'
import type { NPinInputRootProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { PinInputRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NPinInputRootProps>()
const emits = defineEmits<PinInputRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PinInputRoot
    data-slot="pin-input"
    v-bind="forwarded"
    :class="cn(
      'pin-input',
      props.class,
      props.una?.pinInputRoot,
    )"
  >
    <slot />
  </PinInputRoot>
</template>
