<script setup lang="ts">
import type { AlertDialogEmits } from 'reka-ui'
import type { NAlertDialogProps } from '../../../types'
import { reactivePick } from '@vueuse/core'
import { AlertDialogRoot, AlertDialogTrigger, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { randomId } from '../../../utils'
import AlertDialogAction from './AlertDialogAction.vue'
import AlertDialogCancel from './AlertDialogCancel.vue'
import AlertDialogContent from './AlertDialogContent.vue'
import AlertDialogDescription from './AlertDialogDescription.vue'
import AlertDialogTitle from './AlertDialogTitle.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NAlertDialogProps>(), {
  overlay: true,
})
const emits = defineEmits<AlertDialogEmits>()
const DEFAULT_TITLE = randomId('alert-dialog-title')
const DEFAULT_DESCRIPTION = randomId('alert-dialog-description')

const title = computed(() => props.title ?? DEFAULT_TITLE)
const description = computed(() => props.description ?? DEFAULT_DESCRIPTION)

const rootProps = reactivePick(props, [
  'open',
  'defaultOpen',
])

const rootPropsEmits = useForwardPropsEmits(rootProps, emits)
</script>

<template>
  <AlertDialogRoot v-slot="{ open }" v-bind="rootPropsEmits">
    <AlertDialogTrigger as-child>
      <slot name="trigger" :open />
    </AlertDialogTrigger>

    <AlertDialogContent
      v-bind="_alertDialogContent"
      :_alert-dialog-overlay
      :_alert-dialog-cancel
      :_alert-dialog-action
      :prevent-close
      :una
    >
      <slot name="content">
        <AlertDialogTitle
          v-if="title !== DEFAULT_TITLE || !!$slots.title"
          :_alert-dialog-title
          :una
        >
          <slot name="title">
            {{ title }}
          </slot>
        </AlertDialogTitle>

        <AlertDialogDescription
          v-if="description !== DEFAULT_DESCRIPTION || !!$slots.description"
          :_alert-dialog-description
          :una
        >
          <slot name="description">
            {{ description }}
          </slot>
        </AlertDialogDescription>
      </slot>

      <slot name="controls">
        <div class="flex justify-end gap-4">
          <AlertDialogCancel
            :_alert-dialog-cancel
          />
          <AlertDialogAction
            :_alert-dialog-action
          />
        </div>
      </slot>
    </AlertDialogContent>
  </AlertDialogRoot>
</template>
