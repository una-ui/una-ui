<script setup lang="ts">
import type { DropdownMenuRootEmits } from 'radix-vue'
import type { NDropdownMenuRootProps } from '../../../types'
import { DropdownMenuRoot, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<NDropdownMenuRootProps>()
const emits = defineEmits<DropdownMenuRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuRoot v-bind="forwarded">
    <slot />
  </DropdownMenuRoot>
</template>
