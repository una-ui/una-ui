<script setup lang="ts">
import type { ToastRootEmits } from 'radix-vue'
import type { NToastProps, Toaster } from '../../../types'
import { useState } from '#app'
import { useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'

import Icon from '../../elements/Icon.vue'
import ToastAction from './ToastAction.vue'
import ToastClose from './ToastClose.vue'
import ToastDescription from './ToastDescription.vue'
import ToastInfo from './ToastInfo.vue'
import ToastProvider from './ToastProvider.vue'
import ToastRoot from './ToastRoot.vue'
import ToastTitle from './ToastTitle.vue'
import ToastViewport from './ToastViewport.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NToastProps>(), {
  una: () => ({
    toastDefaultVariant: 'toast-default-variant',
  }),
})
const emits = defineEmits<ToastRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
const toasts = useState<Toaster[]>('toasts', () => [])

const toastVariants = ['soft', 'outline'] as const
const hasVariant = computed(() => toastVariants.some(toastVariant => props.toast?.includes(toastVariant)))
const isBaseVariant = computed(() => props.toast?.includes('~'))
</script>

<template>
  <ToastProvider
    v-bind="_toastProvider"
  >
    <ToastRoot
      :class="cn(
        'toast',
        props.class,
        !hasVariant && !isBaseVariant ? una?.toastDefaultVariant : '',
        props.una?.toast,
      )"
      :toast="toast"
      v-bind="{ ...$attrs, forwarded }"
    >
      <slot name="root">
        <ToastInfo
          v-if="$slots.info || $slots.title || $slots.description || title || description"
          v-bind="_toastInfo"
        >
          <slot name="info">
            <ToastTitle
              v-if="$slots.title || title"
              v-bind="_toastTitle"
            >
              <slot name="title">
                {{ title }}
              </slot>
            </ToastTitle>
            <ToastDescription
              v-if="$slots.description || description"
              v-bind="_toastDescription"
            >
              <slot name="description">
                {{ description }}
              </slot>
            </ToastDescription>
          </slot>
        </ToastInfo>
        <div
          v-if="actions"
          class="toast-actions"
        >
          <ToastAction
            v-for="(action, index) in actions"
            :key="index" v-bind="{ ...action, ..._toastAction }"
            @click="action.click"
          >
            <slot name="actions" />
          </ToastAction>
        </div>
        <div
          v-else-if="$slots.actions"
          class="toast-actions"
        >
          <ToastAction
            v-bind="_toastAction"
          >
            <slot name="actions" />
          </ToastAction>
        </div>
        <ToastClose v-if="closable" v-bind="_toastClose">
          <slot name="closeIcon">
            <Icon
              :name="_toastClose?.una?.toastCloseIcon ?? 'toast-close-icon'"
              :class="cn(
                _toastClose?.una?.toastCloseIconBase,
                'toast-close-icon-base',
              )"
              aria-hidden="true"
            />
          </slot>
        </ToastClose>
      </slot>
    </ToastRoot>

    <ToastViewport :toasts v-bind="_toastViewport" />
  </ToastProvider>
</template>
