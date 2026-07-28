<script setup lang="ts">
import type { NToastAction, NToastProps } from '../../../types'
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { cn, omitProps } from '../../../utils'
import { TOASTER_CLOSE_INJECTION_KEY } from '../../../utils/injectionKeys'
import Button from '../../elements/Button.vue'
import Icon from '../../elements/Icon.vue'
import Progress from '../../elements/Progress.vue'

// vue-sonner passes internals beyond the declared props; keep strays off the root
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

// falls back to the Toaster's setting, then to on — matching what vue-sonner
// resolves for standard toasts. Loading toasts stay closeless, as they do there.
const toasterClose = inject(TOASTER_CLOSE_INJECTION_KEY, undefined)
const hasClose = computed(() =>
  props.type !== 'loading' && (props.closeButton ?? toasterClose?.value.closeButton ?? true),
)
const closeAriaLabel = computed(() => toasterClose?.value.closeButtonAriaLabel ?? 'Close toast')

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

      <!-- `label` is an icon name here, not text — `toast-close-icon` carries
           its own size, so the glyph matches the one in the Toaster's slot -->
      <Button
        v-if="hasClose"
        square
        btn="ghost-muted"
        size="xs"
        data-close-button="true"
        :aria-label="closeAriaLabel"
        :class="cn('toast-close', props.una?.toastClose)"
        icon
        label="toast-close-icon"
        @click="emit('closeToast')"
      />
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
