<script setup lang="ts">
import type { NToastDescriptionProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { ToastDescription } from 'reka-ui'

import { cn } from '../../../utils'

const props = defineProps<NToastDescriptionProps>()
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <ToastDescription
    v-bind="delegatedProps"
    :class="cn(
      'toast-description',
      props.una?.toastDescription,
      props.class,
    )"
  >
    <slot />
  </ToastDescription>
</template>
