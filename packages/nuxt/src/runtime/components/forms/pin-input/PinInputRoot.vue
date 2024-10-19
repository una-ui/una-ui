<script setup lang="ts">
import type { NPinInputRootProps } from '../../../../runtime/types'
import { reactiveOmit } from '@vueuse/core'
import { PinInputRoot, type PinInputRootEmits, useForwardPropsEmits } from 'radix-vue'
import { cn } from '../../../../runtime/utils'

const props = defineProps<NPinInputRootProps>()
const emits = defineEmits<PinInputRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <PinInputRoot
    v-bind="forwarded"
    :class="cn(
      'pin-input-root',
      props.class,
      props.una?.pinInputRoot,
    )"
  >
    <slot />
  </PinInputRoot>
</template>
