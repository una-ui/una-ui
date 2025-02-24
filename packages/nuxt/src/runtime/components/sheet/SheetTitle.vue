<script setup lang="ts">
import type { NSheetTitleProps } from '../../types'
import { DialogTitle } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NSheetTitleProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DialogTitle
    :class="cn('sheet-title', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogTitle>
</template>
