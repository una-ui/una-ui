<script setup lang="ts">
import type { NSheetDescriptionProps } from '../../types'
import { DialogDescription } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NSheetDescriptionProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <DialogDescription
    :class="cn('text-sm text-muted', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogDescription>
</template>
a
