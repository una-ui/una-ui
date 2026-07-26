<script setup lang="ts">
import type { NToastProps } from '../../../types'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { toast as sonner } from 'vue-sonner'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'
import Icon from '../../elements/Icon.vue'
import Progress from '../../elements/Progress.vue'

// vue-sonner passes internals like `isPaused` to custom components; without
// this they land on the root as stray attributes.
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<NToastProps>(), {
  showProgress: false,
})

const ICONS = {
  success: 'toast-success-icon',
  error: 'toast-error-icon',
  warning: 'toast-warning-icon',
  info: 'toast-info-icon',
  loading: 'toast-loading-icon',
} as const

const icon = computed(() => props.leading ?? (props.type ? ICONS[props.type] : undefined))

// one button reads better beside the text; two or more need their own row
const inlineActions = computed(() => props.actions?.length === 1)
const stackedActions = computed(() => (props.actions?.length ?? 0) > 1)

// sonner exposes no remaining-time hook, so the bar runs its own timer. It is
// deliberately not synced to sonner's pause-on-hover / pause-on-blur.
const elapsed = ref(0)
let handle: ReturnType<typeof setInterval> | undefined

const remaining = computed(() => {
  if (!props.duration)
    return 100
  return Math.max(0, 100 - (elapsed.value / props.duration) * 100)
})

onMounted(() => {
  if (!props.showProgress || !props.duration)
    return
  const step = 50
  handle = setInterval(() => {
    elapsed.value += step
    if (elapsed.value >= props.duration!)
      clearInterval(handle)
  }, step)
})

onBeforeUnmount(() => clearInterval(handle))

function dismiss() {
  if (props.id !== undefined)
    sonner.dismiss(props.id)
}
</script>

<template>
  <div :class="cn('toast toast-stack', props.una?.toast, props.class)">
    <div :class="cn('toast-row', props.una?.toastRow)">
      <Icon
        v-if="icon"
        :name="icon"
        :class="cn('toast-icon', props.type === 'loading' && 'toast-loading', props.una?.toastIcon)"
      />

      <div :class="cn('toast-content', props.una?.toastContent)">
        <div v-if="title" :class="cn('toast-title', props.una?.toastTitle)">
          {{ title }}
        </div>
        <div v-if="description" :class="cn('toast-description', props.una?.toastDescription)">
          {{ description }}
        </div>
      </div>

      <!-- a lone action sits inline with the text, like sonner's own -->
      <div v-if="inlineActions" :class="cn('toast-actions', props.una?.toastActions)">
        <Button
          v-for="(action, i) in actions"
          :key="i"
          btn="outline-gray"
          size="xs"
          v-bind="action"
          @click="action.onClick?.(); action.dismissOnClick !== false && dismiss()"
        />
      </div>
    </div>

    <div v-if="stackedActions" :class="cn('toast-actions', props.una?.toastActions)">
      <Button
        v-for="(action, i) in actions"
        :key="i"
        btn="outline-gray"
        size="xs"
        v-bind="action"
        @click="action.onClick?.(); action.dismissOnClick !== false && dismiss()"
      />
    </div>

    <Progress
      v-if="showProgress && duration"
      :model-value="remaining"
      :class="cn('toast-progress', props.una?.toastProgress)"
      :progress="progress"
      rounded="none"
    />
  </div>
</template>
