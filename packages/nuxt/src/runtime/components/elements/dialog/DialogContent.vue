<script setup lang="ts">
import type { NDialogContentProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  DialogContent,
  type DialogContentEmits,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '../../../utils'
import DialogClose from './DialogClose.vue'
import DialogOverlay from './DialogOverlay.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NDialogContentProps>(), {
  showClose: true,
})
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, ['class', 'una', '_dialogOverlay', '_dialogClose'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      v-bind="_dialogOverlay"
      :una
    />

    <DialogContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn(
        'dialog-content',
        props.una?.dialogContent,
        props.class,
      )"
      @interact-outside="event => {
        if (preventClose) return event.preventDefault()
      }"
      @escape-key-down="(event:any) => {
        if (preventClose) return event.preventDefault()
      }"
    >
      <slot />

      <DialogClose
        v-if="showClose"
        v-bind="_dialogClose"
      />
    </DialogContent>
  </DialogPortal>
</template>
