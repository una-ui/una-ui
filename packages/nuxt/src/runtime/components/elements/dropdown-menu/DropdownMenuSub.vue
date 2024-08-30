<script setup lang="ts">
import {
  DropdownMenuSub,
  type DropdownMenuSubEmits,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '../../../utils'
import type { NDropdownMenuSubProps } from '../../../types'

const props = defineProps<NDropdownMenuSubProps>()
const emits = defineEmits<DropdownMenuSubEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DropdownMenuSub
    v-bind="forwarded"
    :class="cn('dropdown-menu-sub', props.class)"
  >
    <slot />
  </DropdownMenuSub>
</template>
