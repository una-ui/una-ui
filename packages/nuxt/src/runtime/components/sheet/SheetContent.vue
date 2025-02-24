<script setup lang="ts">
import type { DialogContentEmits } from 'reka-ui'
import type { NSheetContentProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { cva } from 'class-variance-authority'
import { DialogContent, DialogOverlay, DialogPortal, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import SheetClose from './SheetClose.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NSheetContentProps>(), {
})

const emits = defineEmits<DialogContentEmits>()

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
            'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
            'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

const contentProps = reactiveOmit(props, ['side', 'class', '_sheetClose', '_sheetPortal', '_sheetOverlay'])

const forwarded = useForwardPropsEmits(contentProps, emits)
</script>

<template>
  <DialogPortal
    v-bind="_sheetPortal"
  >
    <DialogOverlay
      v-bind="_sheetOverlay"
      :class="cn('fixed inset-0 z-50 data-[state=closed]:animate-out data-[state=open]:animate-in bg-black/80 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0', props._sheetOverlay?.class)"
    />
    <DialogContent
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <SheetClose
        class="absolute right-4 top-4"
        v-bind="_sheetClose"
      />
    </DialogContent>
  </DialogPortal>
</template>
