<script setup lang="ts">
import type { NAlertProps } from '../../types'
import { computed } from 'vue'
import { cn } from '../../utils'
import Icon from '../elements/Icon.vue'
import AlertClose from './AlertClose.vue'
import AlertDescription from './AlertDescription.vue'
import AlertTitle from './AlertTitle.vue'

const props = withDefaults(defineProps<NAlertProps>(), {
  alert: 'text-gray',
  icon: false,
  closable: false,
  size: 'sm',
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

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
    data-slot="alert"
    role="alert"
    :size
    :class="cn(
      'alert',
      props.una?.alert,
      props.class,
    )"
    :alert
  >
    <slot>
      <slot v-if="$slots.icon || props.icon !== false" name="icon">
        <Icon :name="icon" />
      </slot>

      <AlertTitle
        v-if="title || $slots.title"
        :size
        :una
        v-bind="props._alertTitle"
      >
        <slot name="title">
          {{ title }}
        </slot>
      </AlertTitle>

      <AlertDescription
        v-if="description || $slots.description"
        :size
        :una
        v-bind="props._alertDescription"
      >
        <slot name="description">
          {{ description }}
        </slot>
      </AlertDescription>

      <AlertClose
        v-if="$slots.close || props.closable"
        :size
        v-bind="props._alertClose"
        :una
        @click="emit('close')"
      >
        <slot name="close" />
      </AlertClose>

      <slot v-if="$slots.actions" name="actions" />
    </slot>
  </div>
</template>
