<script setup lang="ts">
import { computed } from 'vue'
import {
  DropdownMenuSeparator,
} from 'radix-vue'
import { cn } from '../../../utils'
import type { NDropdownMenuSeparatorProps } from '../../../types'
import Separator from '../Separator.vue'

const props = defineProps<NDropdownMenuSeparatorProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DropdownMenuSeparator
    as-child
  >
    <div class="relative -mx-1">
      <Separator
        v-bind="delegatedProps"
        :class="cn('my-1', props.class)"
      />
    </div>
  </DropdownMenuSeparator>
</template>
