<script setup lang="ts">
import type { NDialogProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { DialogRoot, type DialogRootEmits, DialogTrigger, useForwardPropsEmits } from 'radix-vue'
import { computed, useSlots } from 'vue'
import { cn } from '../../../utils'
import DialogContent from './DialogContent.vue'
import DialogDescription from './DialogDescription.vue'
import DialogFooter from './DialogFooter.vue'
import DialogHeader from './DialogHeader.vue'
import DialogTitle from './DialogTitle.vue'

const props = defineProps<NDialogProps>()
const emits = defineEmits<DialogRootEmits>()

const rootProps = reactiveOmit(props, [
  'open',
  'defaultOpen',
  'modal',
])

const forwarded = useForwardPropsEmits(rootProps, emits)

const slots = useSlots()

const hasTitle = computed(() => {
  return !!(props.title || slots.title)
})

const hasDescription = computed(() => {
  return !!(props.description || slots.description)
})

const contentAriaProps = computed(() => {
  // remove the aria-describedby attribute from the dialog when there is no description provided
  if (hasDescription.value) {
    return {}
  }
  return { 'aria-describedby': undefined }
})
</script>

<template>
  <DialogRoot v-slot="{ open }" v-bind="forwarded">
    <DialogTrigger as-child>
      <slot name="trigger" :open />
    </DialogTrigger>

    <DialogContent
      v-bind="{ ..._dialogContent, ...contentAriaProps }"
      :class="cn(_dialogContent?.class, una?.dialogContent)"
      :_dialog-overlay
      :_dialog-close
      :una
    >
      <slot name="content">
        <!-- header -->
        <DialogHeader
          v-if="hasTitle || hasDescription || $slots.header"
          v-bind="_dialogHeader"
          :class="cn(_dialogHeader?.class, una?.dialogHeader)"
        >
          <slot name="header">
            <DialogTitle
              v-if="hasTitle"
              v-bind="_dialogTitle"
              :class="una?.dialogTitle"
            >
              <slot name="title">
                {{ title }}
              </slot>
            </DialogTitle>

            <DialogDescription
              v-if="hasDescription"
              v-bind="_dialogDescription"
              :class="cn(_dialogDescription?.class, una?.dialogDescription)"
            >
              <slot name="description">
                {{ description }}
              </slot>
            </DialogDescription>
          </slot>
        </DialogHeader>

        <!-- content -->
        <slot />

        <DialogFooter
          v-if="$slots.footer"
          v-bind="_dialogFooter"
          :class="cn(_dialogFooter?.class, una?.dialogFooter)"
        >
          <slot name="footer" />
        </DialogFooter>
      </slot>
    </DialogContent>
  </DialogRoot>
</template>
