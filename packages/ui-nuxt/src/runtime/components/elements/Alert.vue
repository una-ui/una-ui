<script setup lang="ts">
import { computed } from 'vue'
import type { NAlertProps } from '../../types'
import NIcon from '../elements/Icon.vue'
import NButton from '../elements/Button.vue'

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
    :class="{ 'alert-default-variant': !hasVariant }"
  >
    <div alert="inner-wrapper">
      <div
        v-if="props.icon !== false"
        alert="icon-wrapper"
      >
        <NIcon
          alert="icon"
          :name="icon"
          aria-hidden="true"
        />
      </div>
      <div
        v-if="title || description"
        alert="content-wrapper"
      >
        <h3 v-if="title" alert="title">
          {{ title }}
        </h3>
        <div v-if="description" alert="description">
          <p>{{ description }}</p>
        </div>
      </div>
      <div
        v-if="closeable"
        alert="close-wrapper"
      >
        <NButton
          alert="close"
          btn="~ square"
          label="alert-close-icon"
          icon
          @click="emit('close')"
        />
      </div>
    </div>
  </div>
</template>
