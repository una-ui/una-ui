<script setup lang="ts">
import type { DropdownMenuSubContentEmits } from 'reka-ui'
import type { NDropdownMenuSubContentProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  DropdownMenuSubContent,
  useForwardPropsEmits,
} from 'reka-ui'

import { cn } from '../../../utils'

const props = defineProps<NDropdownMenuSubContentProps>()
const emits = defineEmits<DropdownMenuSubContentEmits>()
const delegatedProps = reactiveOmit(props, ['class'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuSubContent
    v-bind="forwarded"
    :class="cn(
      'dropdown-menu-sub-content data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      forwarded.una?.dropdownMenuSubContent,
      props.class,
    )"
  >
    <slot />
  </DropdownMenuSubContent>
</template>
