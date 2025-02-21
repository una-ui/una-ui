<script setup lang="ts">
import type { SelectRootEmits } from 'reka-ui'
import type { NSelectRootProps } from '../../../types'
import { SelectRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NSelectRootProps>()
const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <SelectRoot
    :class="cn(
      'select-root',
      props.class,
      props.una?.selectRoot,
    )"
    v-bind="forwarded"
  >
    <slot />
  </SelectRoot>
</template>
