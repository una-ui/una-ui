<script setup lang="ts">
import type { DialogContentEmits } from 'reka-ui'
import type { NSheetContentProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'
import SheetClose from './SheetClose.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NSheetContentProps>()
const emits = defineEmits<DialogContentEmits>()
const contentProps = reactiveOmit(props, ['sheet', 'class', '_sheetClose', '_sheetPortal', '_sheetOverlay'])
const forwarded = useForwardPropsEmits(contentProps, emits)
const contentEvents = computed(() => {
  if (props.preventClose) {
    return {
      pointerDownOutside: (e: Event) => e.preventDefault(),
      interactOutside: (e: Event) => e.preventDefault(),
      escapeKeyDown: (e: Event) => e.preventDefault(),
      closeAutoFocus: (e: Event) => e.preventDefault(),
    }
  }

  return {
    closeAutoFocus: (e: Event) => e.preventDefault(),
  }
})
</script>

<template>
  <DialogPortal
    v-bind="_sheetPortal"
    :class="cn('sheet-content-portal', props.una?.sheetContentPortal, props._sheetPortal?.class)"
  >
    <DialogOverlay
      v-bind="_sheetOverlay"
      :class="cn('sheet-content-overlay', props.una?.sheetContentOverlay, props._sheetOverlay?.class)"
    />
    <DialogContent
      :sheet
      :class="cn('sheet-content', props.una?.sheetContent, props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
      v-on="contentEvents"
    >
      <slot />

      <SheetClose
        :class="cn('sheet-content-close', props.una?.sheetContentClose)"
        v-bind="_sheetClose"
      />
    </DialogContent>
  </DialogPortal>
</template>
