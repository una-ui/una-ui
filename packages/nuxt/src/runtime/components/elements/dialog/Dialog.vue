<script setup lang="ts">
import type { NDialogProps } from '../../../types'
import { reactivePick } from '@vueuse/core'
import { DialogRoot, type DialogRootEmits, DialogTrigger, useForwardPropsEmits } from 'reka-ui'
import DialogContent from './DialogContent.vue'
import DialogDescription from './DialogDescription.vue'
import DialogFooter from './DialogFooter.vue'
import DialogHeader from './DialogHeader.vue'
import DialogScrollContent from './DialogScrollContent.vue'
import DialogTitle from './DialogTitle.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NDialogProps>(), {
  showClose: true,
})
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

    <component
      :is="!scrollable ? DialogContent : DialogScrollContent"
      v-bind="_dialogContent"
      :_dialog-overlay
      :_dialog-close
      :una
      :scrollable
      :show-close
      :prevent-close
      :aria-describedby="props.description ? 'dialog-description' : undefined"
    >
      <slot name="content">
        <DialogHeader
          v-bind="_dialogHeader"
          :class="!props.title && !props.description && !$slots.title && !$slots.description && !$slots.header ? 'sr-only' : undefined"
          :una
        >
          <slot name="header">
            <DialogTitle
              v-bind="_dialogTitle"
              :class="!props.title && !$slots.title ? 'sr-only' : undefined"
              :una
            >
              <slot name="title">
                {{ title }}
              </slot>
            </DialogTitle>

            <DialogDescription
              v-if="props.description || $slots.description"
              v-bind="_dialogDescription"
              :una
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
          :una
        >
          <slot name="footer" />
        </DialogFooter>
      </slot>
    </component>
  </DialogRoot>
</template>
