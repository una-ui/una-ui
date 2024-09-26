<script setup lang="ts">
import type { NDialogProps } from '../../../types'
import { reactivePick } from '@vueuse/core'
import { DialogRoot, type DialogRootEmits, DialogTrigger, useForwardPropsEmits } from 'radix-vue'
import DialogContent from './DialogContent.vue'
import DialogDescription from './DialogDescription.vue'
import DialogFooter from './DialogFooter.vue'
import DialogHeader from './DialogHeader.vue'
import DialogTitle from './DialogTitle.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NDialogProps>()
const emits = defineEmits<DialogRootEmits>()

const rootProps = reactivePick(props, [
  'open',
  'defaultOpen',
  'modal',
])

const rootPropsEmits = useForwardPropsEmits(rootProps, emits)
</script>

<template>
  <DialogRoot v-slot="{ open }" v-bind="rootPropsEmits">
    <DialogTrigger as-child>
      <slot name="trigger" :open />
    </DialogTrigger>

    <DialogContent
      v-bind="{ ..._dialogContent }"
      :_dialog-overlay
      :_dialog-close
      :una
    >
      <slot name="content">
        <DialogHeader
          v-if="props.title || props.description || $slots.header"
          v-bind="_dialogHeader"
        >
          <slot name="header">
            <DialogTitle
              v-if="props.title"
              v-bind="_dialogTitle"
              :class="una?.dialogTitle"
            >
              <slot name="title">
                {{ title }}
              </slot>
            </DialogTitle>

            <DialogDescription
              v-if="props.description"
              v-bind="_dialogDescription"
            >
              <slot name="description">
                {{ description }}
              </slot>
            </DialogDescription>
          </slot>
        </DialogHeader>

        <!-- body -->
        <slot />

        <DialogFooter
          v-if="$slots.footer"
          v-bind="_dialogFooter"
        >
          <slot name="footer" />
        </DialogFooter>
      </slot>
    </DialogContent>
  </DialogRoot>
</template>
