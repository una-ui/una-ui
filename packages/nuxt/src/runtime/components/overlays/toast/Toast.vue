<script setup lang="ts">
import type { NToastAction, NToastProps } from '../../../types'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { cn, omitProps } from '../../../utils'
import Button from '../../elements/Button.vue'
import Icon from '../../elements/Icon.vue'
import Progress from '../../elements/Progress.vue'

// vue-sonner may pass more internals than the ones declared as props; keep any
// strays off the root element.
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<NToastProps>(), {
  showProgress: false,
})

// vue-sonner listens for this on custom components — it dismisses through the
// exit animation and respects `dismissible`.
const emit = defineEmits<{ closeToast: [] }>()

const ICONS = {
  success: 'toast-success-icon',
  error: 'toast-error-icon',
  warning: 'toast-warning-icon',
  info: 'toast-info-icon',
  loading: 'toast-loading-icon',
} as const

const icon = computed(() => props.leading ?? (props.type ? ICONS[props.type] : undefined))

// one button reads better beside the text; two or more need their own row,
// except sonner's own action/cancel pair, which stays inline as upstream has it
const inline = computed(() => props.inlineActions || props.actions?.length === 1)
const stackedActions = computed(() => (props.actions?.length ?? 0) > 0 && !inline.value)

// sonner exposes no remaining-time hook, so the bar runs its own timer, held
// while `isPaused` — the exact condition sonner pauses auto-dismiss on.
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
  // wall-clock deltas, not a fixed step — intervals get throttled in
  // backgrounded tabs and the bar would fall behind the real countdown
  let last = performance.now()
  handle = setInterval(() => {
    const now = performance.now()
    if (!props.isPaused)
      elapsed.value += now - last
    last = now
    if (elapsed.value >= props.duration!)
      clearInterval(handle)
  }, 50)
})

onBeforeUnmount(() => clearInterval(handle))

// `onClick` must not reach the Button — v-bind would register it as a second
// click listener and fire it twice.
function bindings(action: NToastAction) {
  return omitProps(action, ['onClick', 'dismissOnClick', 'class'])
}

function onAction(action: NToastAction) {
  action.onClick?.()
  if (action.dismissOnClick !== false)
    emit('closeToast')
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
      <div v-if="inline" :class="cn('toast-actions', props.una?.toastActions)">
        <Button
          v-for="(action, i) in actions"
          :key="i"
          btn="outline-gray"
          size="xs"
          v-bind="bindings(action)"
          :class="cn('toast-action', action.class)"
          @click="onAction(action)"
        />
      </div>
    </div>

    <div v-if="stackedActions" :class="cn('toast-actions', props.una?.toastActions)">
      <Button
        v-for="(action, i) in actions"
        :key="i"
        btn="outline-gray"
        size="xs"
        v-bind="bindings(action)"
        :class="cn('toast-action', action.class)"
        @click="onAction(action)"
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
