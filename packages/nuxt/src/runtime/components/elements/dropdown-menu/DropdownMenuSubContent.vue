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
      'dropdown-menu-sub-content',
      props.class,
      forwarded.una?.dropdownMenuSubContent,
    )"
  >
    <slot />
  </DropdownMenuSubContent>
</template>
