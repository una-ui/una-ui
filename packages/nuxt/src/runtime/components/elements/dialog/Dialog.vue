<script setup lang="ts">
import type { NDialogProps } from '../../../types'
import { DialogRoot, type DialogRootEmits, DialogTrigger, useForwardPropsEmits } from 'radix-vue'
import { omitProps } from '../../../utils'
import DialogContent from './DialogContent.vue'
import DialogDescription from './DialogDescription.vue'
import DialogHeader from './DialogHeader.vue'
import DialogTitle from './DialogTitle.vue'

const props = defineProps<NDialogProps>()
const emits = defineEmits<DialogRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogRoot v-bind="omitProps(forwarded, ['title', 'description'])">
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>

    <DialogContent>
      <!-- header -->
      <DialogHeader
        v-if="title || description || $slots.header || $slots.title || $slots.description"
      >
        <slot name="header">
          <DialogTitle>
            <slot name="title">
              {{ title }}
            </slot>
          </DialogTitle>

          <DialogDescription>
            <slot name="description">
              {{ description }}
            </slot>
          </DialogDescription>
        </slot>
      </DialogHeader>

      <!-- content -->
      <slot />
    </DialogContent>
  </DialogRoot>
</template>
