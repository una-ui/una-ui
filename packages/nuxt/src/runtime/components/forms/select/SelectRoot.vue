<script setup lang="ts">
import type { SelectRootEmits } from 'radix-vue'
import { SelectRoot, useForwardPropsEmits } from 'radix-vue'
import type { NSelectRootProps } from '../../../types'
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
