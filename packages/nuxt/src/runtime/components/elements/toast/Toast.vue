<script setup lang="ts">
import type { ToastRootEmits } from 'radix-vue'
import type { NToastProps } from '../../../types'
import { useForwardPropsEmits } from 'radix-vue'

import { computed } from 'vue'
import { cn } from '../../../utils'
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
          v-bind="forwarded._toastInfo"
        >
          <slot name="info">
            <ToastTitle
              v-if="$slots.title || title"
              v-bind="forwarded._toastTitle"
            >
              <slot name="title">
                {{ title }}
              </slot>
            </ToastTitle>
            <ToastDescription
              v-if="$slots.description || description"
              v-bind="forwarded._toastDescription"
            >
              <slot name="description">
                {{ description }}
              </slot>
            </ToastDescription>
          </slot>
        </ToastInfo>
        <div v-if="actions" class="flex flex-shrink-0 items-center gap-2">
          <ToastAction v-for="(action, index) in actions" :key="index" v-bind="{ ...action, ...forwarded._toastAction }" @click="action.click" />
        </div>
        <ToastClose v-if="closable" v-bind="forwarded._toastClose" />
      </slot>
    </ToastRoot>

    <ToastViewport v-bind="forwarded._toastViewport" />
  </ToastProvider>
</template>
