<script setup lang="ts">
import type { ToastRootEmits } from 'radix-vue'
import type { NToastProps } from '../../../types'
import { reactivePick } from '@vueuse/core'
import { ToastRoot, useForwardPropsEmits } from 'radix-vue'

import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'
import Progress from '../../elements/Progress.vue'
import ToastAction from './ToastAction.vue'
import ToastClose from './ToastClose.vue'
import ToastDescription from './ToastDescription.vue'
import ToastInfo from './ToastInfo.vue'
import ToastTitle from './ToastTitle.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NToastProps>(), {
  toast: 'solid-white',
  closable: true,
})

const emits = defineEmits<ToastRootEmits>()
const rootProps = useForwardPropsEmits(reactivePick(props, 'as', 'defaultOpen', 'open', 'duration', 'type'), emits)
</script>

<template>
  <ToastRoot
    v-slot="{ remaining, duration }"
    :class="cn(
      'group toast data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
      props.class,
      props.una?.toast,
    )"
    v-bind="rootProps"
    :toast
    @update:open="onOpenChange"
  >
    <slot name="leading">
      <Icon
        v-if="leading"
        :name="leading"
        :class="cn(
          'toast-leading',
          props.una?.toastLeading,
        )"
      />
    </slot>

    <div
      :class="cn(
        'toast-wrapper',
        props.una?.toastWrapper,
      )"
    >
      <slot>
        <ToastInfo
          v-if="$slots.info || $slots.title || $slots.description || title || description"
          v-bind="_toastInfo"
          :una
        >
          <slot name="info">
            <ToastTitle
              v-if="$slots.title || title"
              v-bind="_toastTitle"
              :una
            >
              <slot name="title">
                {{ title }}
              </slot>
            </ToastTitle>

            <ToastDescription
              v-if="$slots.description || description"
              v-bind="_toastDescription"
              :una
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
          <slot name="actions" :actions>
            <ToastAction
              v-for="(action, index) in actions"
              :key="index"
              v-bind="action"
            />
          </slot>
        </div>

        <ToastClose
          v-if="closable"
          v-bind="_toastClose"
          :una
        >
          <slot name="closeIcon" />
        </ToastClose>
      </slot>
    </div>

    <div
      v-if="showProgress"
      class="absolute inset-x-0 bottom-0 !mx-0"
    >
      <Progress
        :progress
        v-bind="_progress"
        :class="cn(
          'toast-progress bg-transparent',
          props.una?.toastProgress,
        )"
        :model-value="remaining / duration * 100"
      />
    </div>
  </ToastRoot>
</template>
