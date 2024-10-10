<script setup lang="ts">
import type { NToastInfoProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NToastInfoProps>()
</script>

<template>
  <div
    :class="cn(
      'toast-info',
      props.class,
      props.una?.toastInfo,
    )"
  >
    <slot />
  </div>
</template>
