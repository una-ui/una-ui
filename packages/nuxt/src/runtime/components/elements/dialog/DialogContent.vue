<script setup lang="ts">
import type { NDialogContentProps, NDialogProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  DialogContent,
  type DialogContentEmits,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '../../../utils'
import DialogClose from './DialogClose.vue'
import DialogOverlay from './DialogOverlay.vue'

const props = defineProps<NDialogContentProps & Pick<NDialogProps, '_dialogOverlay' | 'una'>>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay v-bind="_dialogOverlay" :class="una?.dialogOverlay" />

    <DialogContent
      v-bind="forwarded"
      :class="cn('dialog-content', props.class)"
    >
      <slot />

      <DialogClose />
    </DialogContent>
  </DialogPortal>
</template>
