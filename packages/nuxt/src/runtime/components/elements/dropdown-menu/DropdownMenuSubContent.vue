<script setup lang="ts">
import type { NDropdownMenuSubContentProps } from '../../../types'
import {
  DropdownMenuSubContent,
  type DropdownMenuSubContentEmits,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<NDropdownMenuSubContentProps>()
const emits = defineEmits<DropdownMenuSubContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuSubContent
    v-bind="forwarded"
    :class="cn(
      'dropdown-menu-sub-content data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      props.class,
      forwarded.una?.dropdownMenuSubContent,
    )"
  >
    <slot />
  </DropdownMenuSubContent>
</template>
