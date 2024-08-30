<script setup lang="ts">
import { computed } from 'vue'
import {
  DropdownMenuContent,
  type DropdownMenuContentEmits,
  DropdownMenuPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import type { NDropdownMenuContentProps } from '../../../types'
import { cn } from '../../../utils'

const props = withDefaults(
  defineProps<NDropdownMenuContentProps>(),
  {
    sideOffset: 4,
  },
)
const emits = defineEmits<DropdownMenuContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      v-bind="forwarded"
      :class="cn(
        'dropdown-menu-content',
        props.class,
      )"
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
