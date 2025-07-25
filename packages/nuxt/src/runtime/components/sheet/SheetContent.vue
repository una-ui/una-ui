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

const props = withDefaults(defineProps<NSheetContentProps>(), {
  sheet: 'right',
  overlay: true,
  showClose: true,
})
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
    v-bind="props._sheetPortal"
    :class="cn('sheet-portal', props.una?.sheetPortal, props._sheetPortal?.class)"
  >
    <DialogOverlay
      v-if="props.overlay"
      v-bind="_sheetOverlay"
      :class="cn(
        'data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
        'sheet-overlay',
        props.una?.sheetOverlay,
        props._sheetOverlay?.class,
      )"
    />
    <DialogContent
      v-bind="{ ...forwarded, ...$attrs }"
      :sheet
      :class="cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
        'sheet-content',
        props.una?.sheetContent,
        props.class,
      )"
      v-on="contentEvents"
    >
      <slot />

      <SheetClose
        v-if="props.showClose"
        :class="cn('sheet-close', props.una?.sheetClose)"
        v-bind="props._sheetClose"
      />
    </DialogContent>
  </DialogPortal>
</template>
