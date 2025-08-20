<script setup lang="ts">
import type { NToastViewportProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { ToastViewport } from 'reka-ui'

import { cn } from '../../../utils'

const props = defineProps<NToastViewportProps>()
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <ToastViewport
    v-bind="delegatedProps"
    :class="cn(
      'toast-viewport',
      props.una?.toastViewport,
      props.class,
    )"
  />
</template>
