<script setup lang="ts">
import type { DialogRootEmits } from 'reka-ui'
import type { NDialogProps } from '../../../types'
import { reactivePick } from '@vueuse/core'
import { DialogRoot, DialogTrigger, useForwardPropsEmits, VisuallyHidden } from 'reka-ui'
import { computed } from 'vue'
import { randomId } from '../../../utils'
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
  overlay: true,
})
const emits = defineEmits<DialogRootEmits>()
const DEFAULT_TITLE = randomId('dialog-title')
const DEFAULT_DESCRIPTION = randomId('dialog-description')

const title = computed(() => props.title ?? DEFAULT_TITLE)
const description = computed(() => props.description ?? DEFAULT_DESCRIPTION)

const rootProps = reactivePick(props, [
  'open',
  'defaultOpen',
  'modal',
])

const rootPropsEmits = useForwardPropsEmits(rootProps, emits)
</script>

<template>
  <DialogRoot v-slot="{ open }" v-bind="rootPropsEmits">
    <slot>
      <DialogTrigger as-child>
        <slot name="trigger" :open />
      </DialogTrigger>

      <component
        :is="!scrollable ? DialogContent : DialogScrollContent"
        v-bind="_dialogContent"
        :_dialog-overlay
        :_dialog-close
        :scrollable
        :show-close
        :dismissible
        :una
      >
        <VisuallyHidden v-if="(title === DEFAULT_TITLE || !!$slots.title) || (description === DEFAULT_DESCRIPTION || !!$slots.description)">
          <DialogTitle v-if="title === DEFAULT_TITLE || !!$slots.title">
            {{ title }}
          </DialogTitle>

          <DialogDescription v-if="description === DEFAULT_DESCRIPTION || !!$slots.description">
            {{ description }}
          </DialogDescription>
        </VisuallyHidden>

        <slot name="content">
          <DialogHeader
            v-if="!!$slots.header || (title !== DEFAULT_TITLE || !!$slots.title) || (description !== DEFAULT_DESCRIPTION || !!$slots.description)"
            v-bind="_dialogHeader"
            :una
          >
            <slot name="header">
              <DialogTitle
                v-if="$slots.title || title !== DEFAULT_TITLE"
                v-bind="_dialogTitle"
                :una
              >
                <slot name="title">
                  {{ title }}
                </slot>
              </DialogTitle>

              <DialogDescription
                v-if="$slots.description || description !== DEFAULT_DESCRIPTION"
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
          <slot name="body" />

          <DialogFooter
            v-if="$slots.footer"
            v-bind="_dialogFooter"
            :una
          >
            <slot name="footer" />
          </DialogFooter>
        </slot>
      </component>
    </slot>
  </DialogRoot>
</template>
