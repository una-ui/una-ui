<script setup lang="ts">
import type { NAlertCloseProps } from '../../types'
import { cn } from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NAlertCloseProps>(), {
  label: 'alert-close-icon',
  square: '5',
  btn: '~',
  icon: true,
})
</script>

<template>
  <div
    data-slot="alert-close-wrapper"
    :class="cn(
      'alert-close-wrapper',
      props.una?.alertCloseWrapper,
    )"
  >
    <slot>
      <NButton
        v-bind="{ ...props, ...$attrs }"
        :class="cn(
          props.btn === '~' && 'text-current hover:ring-1 hover:ring-current',
          props.class,
        )"
      />
    </slot>
  </div>
</template>
