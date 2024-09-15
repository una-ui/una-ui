<script setup lang="ts">
import type { NDialogProps } from '../../types'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue'

import { cn } from '../../utils'
import Button from '../elements/Button.vue'

defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<NDialogProps>(), {
  dialog: '',
  overlay: true,
  transition: true,
})

const openState = defineModel<boolean>('open')

function preventClosure(event: Event): void {
  if (props.persist)
    event.preventDefault()
}
</script>

<template>
  <DialogRoot
    v-slot="{ open }"
    v-model:open="openState"
    modal
  >
    <DialogTrigger as-child>
      <slot name="trigger" :open />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay
        v-if="overlay"
        :class="cn('dialog-overlay', una?.overlay)"
      />
      <DialogContent
        :dialog
        :class="cn('dialog-content', una?.content)"
        v-bind="{
          ..._dialogContent,
          ...($slots.description || description ? {} : { 'aria-describedby': undefined }),
        }"
        @interact-outside="preventClosure"
        @escape-key-down="preventClosure"
      >
        <slot name="content">
          <DialogTitle
            v-if="$slots.title || title"
            :class="cn('dialog-title', una?.title)"
          >
            <slot name="title">
              {{ title }}
            </slot>
          </DialogTitle>
          <DialogDescription
            v-if="$slots.description || description"
            :class="cn('dialog-description', una?.description)"
          >
            <slot name="description">
              {{ description }}
            </slot>
          </DialogDescription>
          <slot />
          <DialogClose v-if="!persist" as-child>
            <Button
              btn="~ square"
              :class="cn('dialog-close', una?.close)"
              icon label="i-close"
              aria-label="Close"
              v-bind="_dialogClose"
            />
          </DialogClose>
        </slot>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
