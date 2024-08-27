<script setup lang="ts">
import { DropdownMenuRoot, type DropdownMenuRootEmits, useForwardPropsEmits } from 'radix-vue'
import type { NDropdownMenuRootProps } from '../../../types'

const props = defineProps<NDropdownMenuRootProps>()
const emits = defineEmits<DropdownMenuRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuRoot v-bind="forwarded">
    <slot />
  </DropdownMenuRoot>
</template>
