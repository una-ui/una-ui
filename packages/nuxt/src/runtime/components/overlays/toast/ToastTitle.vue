<script setup lang="ts">
import type { NToastTitleProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { ToastTitle } from 'reka-ui'

import { cn } from '../../../utils'

const props = defineProps<NToastTitleProps>()
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <ToastTitle
    v-bind="delegatedProps"
    :class="cn(
      'toast-title',
      props.una?.toastTitle,
      props.class,
    )"
  >
    <slot />
  </ToastTitle>
</template>
