<script setup lang="ts">
import type { NDropdownMenuRootProps } from '../../../types'
import { DropdownMenuRoot, type DropdownMenuRootEmits, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<NDropdownMenuRootProps>()
const emits = defineEmits<DropdownMenuRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuRoot v-bind="forwarded">
    <slot />
  </DropdownMenuRoot>
</template>
