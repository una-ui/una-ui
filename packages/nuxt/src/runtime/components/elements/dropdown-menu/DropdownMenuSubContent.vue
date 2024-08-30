<script setup lang="ts">
import { computed } from 'vue'
import {
  DropdownMenuSubContent,
  type DropdownMenuSubContentEmits,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '../../../utils'
import type { NDropdownMenuSubContentProps } from '../../../types'

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
    :class="cn('dropdown-menu-sub-content', props.class)"
  >
    <slot />
  </DropdownMenuSubContent>
</template>
