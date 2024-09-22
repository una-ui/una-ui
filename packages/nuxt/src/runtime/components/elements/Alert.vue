<script setup lang="ts">
import type { NAlertProps } from '../../types'
import { computed } from 'vue'
import NButton from '../elements/Button.vue'
import NIcon from '../elements/Icon.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NAlertProps>(), {
  icon: false,
})

const emit = defineEmits(['close'])

const slots = defineSlots<{
  default?: any
  title?: any
  description?: any
  icon?: any
  closeIcon?: any
}>()

const alertVariants = ['soft', 'outline', 'border'] as const
const hasVariant = computed(() => alertVariants.some(alertVariants => props.alert?.includes(alertVariants)))
const isBaseVariant = computed(() => props.alert?.includes('~'))

const alertClassVariants = computed(() => {
  const icon = {
    info: 'alert-info-icon',
    success: 'alert-success-icon',
    warning: 'alert-warning-icon',
    error: 'alert-error-icon',
    default: '',
  }

  // TODO: simplify and optimize this
  const alertType = props.alert ? (props.alert.includes('info') ? 'info' : (props.alert.includes('success') ? 'success' : (props.alert.includes('warning') ? 'warning' : (props.alert.includes('error') ? 'error' : 'default')))) : 'default'

  return {
    icon: icon[alertType],
  }
})

const icon = computed(() => {
  if (props.icon === '' || props.icon === undefined || props.icon === true)
    return alertClassVariants.value.icon

  return props.icon.toString()
})
</script>

<template>
  <div
    v-bind="$attrs"
    :alert="alert"
    class="alert"
    :class="[
      { 'alert-default-variant': !hasVariant && !isBaseVariant },
      una?.alert,
    ]"
  >
    <div
      alert="inner-wrapper"
      :class="una?.alertInnerWrapper"
    >
      <div
        v-if="props.icon !== false"
        alert="icon-wrapper"
        :class="una?.alertIconWrapper"
      >
        <slot name="icon">
          <NIcon
            alert="icon-base"
            :name="icon"
            aria-hidden="true"
          />
        </slot>
      </div>

      <slot>
        <div
          alert="content-wrapper"
          :class="una?.alertContentWrapper"
        >
          <div
            v-if="slots.title || title"
            alert="title"
            :class="una?.alertTitle"
          >
            <slot name="title">
              <div>
                {{ title }}
              </div>
            </slot>
          </div>
          <div
            v-if="slots.description || description"
            alert="description"
            :class="una?.alertDescription"
          >
            <slot name="description">
              <p>
                {{ description }}
              </p>
            </slot>
          </div>
        </div>
      </slot>

      <div
        v-if="slots.closeIcon || closable"
        alert="close-wrapper"
        :class="una?.alertCloseWrapper"
      >
        <div
          alert="close-inner-wrapper"
          :class="una?.alertCloseInnerWrapper"
        >
          <NButton
            alert="close"
            :class="una?.alertClose"
            btn="~"
            square
            @click="emit('close')"
          >
            <slot name="closeIcon">
              <NIcon
                :class="`${una?.alertCloseIconBase} alert-close-icon-base`"
                :name="una?.alertCloseIcon ?? 'alert-close-icon'"
                aria-hidden="true"
              />
            </slot>
          </NButton>
        </div>
      </div>
    </div>
  </div>
</template>
