<script setup lang="ts">
import type { NDialogCloseProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { DialogClose } from 'radix-vue'
import { cn } from '../../../utils'
import Button from '../Button.vue'

const props = defineProps<NDialogCloseProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <DialogClose
    as-child
  >
    <slot>
      <Button
        aria-label="Close"
        icon
        size="xs"
        btn="text-muted square"
        :class="cn('dialog-close', props.class)"
        label="i-radix-icons-cross-2"
        v-bind="delegatedProps"
      />
    </slot>
  </DialogClose>
</template>
