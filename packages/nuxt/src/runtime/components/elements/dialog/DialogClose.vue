<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { DialogClose, type DialogCloseProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../Button.vue'

const props = defineProps<DialogCloseProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
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
