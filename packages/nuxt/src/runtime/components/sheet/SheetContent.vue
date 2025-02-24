<script setup lang="ts">
import type { DialogContentEmits } from 'reka-ui'
import type { NSheetContentProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import SheetClose from './SheetClose.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NSheetContentProps>(), {
})

const emits = defineEmits<DialogContentEmits>()

const contentProps = reactiveOmit(props, ['sheet', 'class', '_sheetClose', '_sheetPortal', '_sheetOverlay'])

const forwarded = useForwardPropsEmits(contentProps, emits)
</script>

<template>
  <DialogPortal
    v-bind="_sheetPortal"
    :class="cn('sheet-content-portal', props._sheetPortal?.class)"
  >
    <DialogOverlay
      v-bind="_sheetOverlay"
      :class="cn('sheet-content-overlay', props._sheetOverlay?.class)"
    />
    <DialogContent
      :sheet
      :class="cn('sheet-content', props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <SheetClose
        class="sheet-content-close"
        v-bind="_sheetClose"
      />
    </DialogContent>
  </DialogPortal>
</template>
