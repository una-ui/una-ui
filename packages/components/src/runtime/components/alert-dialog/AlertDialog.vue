<script setup lang="ts">
import type { AlertDialogEmits } from 'reka-ui'
import type { NAlertDialogProps } from '../../types'
import { reactivePick } from '@vueuse/core'
import { AlertDialogRoot, useForwardPropsEmits, VisuallyHidden } from 'reka-ui'
import { computed } from 'vue'
import { randomId } from '../../utils'
import AlertDialogAction from './AlertDialogAction.vue'
import AlertDialogCancel from './AlertDialogCancel.vue'
import AlertDialogContent from './AlertDialogContent.vue'
import AlertDialogDescription from './AlertDialogDescription.vue'
import AlertDialogFooter from './AlertDialogFooter.vue'
import AlertDialogHeader from './AlertDialogHeader.vue'
import AlertDialogTitle from './AlertDialogTitle.vue'
import AlertDialogTrigger from './AlertDialogTrigger.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NAlertDialogProps>(), {
  overlay: true,
  dismissible: true,
})
const emits = defineEmits<AlertDialogEmits & {
  cancel: [Event]
  action: [Event]
}>()
const DEFAULT_TITLE = randomId('alert-dialog-title')
const DEFAULT_DESCRIPTION = randomId('alert-dialog-description')

const title = computed(() => props.title ?? DEFAULT_TITLE)
const description = computed(() => props.description ?? DEFAULT_DESCRIPTION)

const rootProps = reactivePick(props, [
  'open',
  'defaultOpen',
])

const forwarded = useForwardPropsEmits(rootProps, emits)
</script>

<template>
  <AlertDialogRoot
    v-slot="{ open }"
    data-slot="alert-dialog"
    v-bind="forwarded"
  >
    <slot>
      <AlertDialogTrigger
        v-bind="_alertDialogTrigger"
        as-child
      >
        <slot name="trigger" :open />
      </AlertDialogTrigger>

      <AlertDialogContent
        v-bind="_alertDialogContent"
        :_alert-dialog-overlay
        :dismissible
        :una
      >
        <VisuallyHidden v-if="(title === DEFAULT_TITLE || !!$slots.title) || (description === DEFAULT_DESCRIPTION || !!$slots.description)">
          <AlertDialogTitle v-if="title === DEFAULT_TITLE || !!$slots.title">
            {{ title }}
          </AlertDialogTitle>

          <AlertDialogDescription v-if="description === DEFAULT_DESCRIPTION || !!$slots.description">
            {{ description }}
          </AlertDialogDescription>
        </VisuallyHidden>

        <slot name="content">
          <!-- Header -->
          <AlertDialogHeader
            v-if="!!$slots.header || (title !== DEFAULT_TITLE || !!$slots.title) || (description !== DEFAULT_DESCRIPTION || !!$slots.description)"
            v-bind="_alertDialogHeader"
            :una
          >
            <slot name="header">
              <AlertDialogTitle
                v-if="title !== DEFAULT_TITLE || !!$slots.title"
                v-bind="_alertDialogTitle"
                :una
              >
                <slot name="title">
                  {{ title }}
                </slot>
              </AlertDialogTitle>

              <AlertDialogDescription
                v-if="description !== DEFAULT_DESCRIPTION || !!$slots.description"
                v-bind="_alertDialogDescription"
                :una
              >
                <slot name="description">
                  {{ description }}
                </slot>
              </AlertDialogDescription>
            </slot>
          </AlertDialogHeader>

          <!-- Footer -->
          <AlertDialogFooter
            v-bind="_alertDialogFooter"
            :una
          >
            <slot name="footer">
              <slot name="cancel-wrapper">
                <AlertDialogCancel
                  v-bind="_alertDialogCancel"
                  @click="emits('cancel', $event)"
                >
                  <slot name="cancel" />
                </AlertDialogCancel>
              </slot>

              <slot name="action-wrapper">
                <AlertDialogAction
                  v-bind="_alertDialogAction"
                  @click="emits('action', $event)"
                >
                  <slot name="action" />
                </AlertDialogAction>
              </slot>
            </slot>
          </AlertDialogFooter>
        </slot>
      </AlertDialogContent>
    </slot>
  </AlertDialogRoot>
</template>
