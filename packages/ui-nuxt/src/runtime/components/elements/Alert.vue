<script setup lang="ts">
import { computed } from 'vue'
import type { NAlertProps } from '../../types'
import NIcon from '../elements/Icon.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NAlertProps>(), {
  icon: false,
})

const emit = defineEmits<{ (...args: any): void }>()

const alertVariants = ['soft', 'outline', 'border', '~'] as const
const hasVariant = computed(() => alertVariants.some(alertVariants => props.alert?.includes(alertVariants)))

const alertClassVariants = computed(() => {
  const icon = {
    info: props.nv?.alertInfoIcon ?? 'alert-info-icon',
    success: props.nv?.alertSuccessIcon ?? 'alert-success-icon',
    warning: props.nv?.alertWarningIcon ?? 'alert-warning-icon',
    error: props.nv?.alertErrorIcon ?? 'alert-error-icon',
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
    :class="{ 'alert-default-variant': !hasVariant }"
  >
    <div
      alert="inner-wrapper"
      :class="nv?.alertInnerWrapper"
    >
      <div
        v-if="props.icon !== false"
        alert="icon-wrapper"
        :class="nv?.alertIconWrapper"
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
          v-if="title || description"
          alert="content-wrapper"
          :class="nv?.alertContentWrapper"
        >
          <slot v-if="title" name="title">
            <h3
              alert="title"
              :class="nv?.alertTitle"
            >
              {{ title }}
            </h3>
          </slot>
          <slot v-if="description" name="description">
            <div
              alert="description"
              :class="nv?.alertDescription"
            >
              <p>{{ description }}</p>
            </div>
          </slot>
        </div>
      </slot>

      <div
        v-if="closable"
        alert="close-wrapper"
        :class="nv?.alertCloseWrapper"
      >
        <div
          alert="close-inner-wrapper"
          :class="nv?.alertCloseInnerWrapper"
        >
          <NButton
            alert="close"
            :class="nv?.alertClose"
            btn="~ square"
            @click="emit('close')"
          >
            <slot name="close-icon">
              <NIcon
                alert="close-icon"
                :class="`${nv?.alertCloseIconBase} alert-close-icon-base`"
                :name="nv?.alertCloseIcon ?? 'alert-close-icon'"
                aria-hidden="true"
              />
            </slot>
          </NButton>
        </div>
      </div>
    </div>
  </div>
</template>
