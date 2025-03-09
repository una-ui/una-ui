<script setup lang="ts">
import type { NToastInfoProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NToastInfoProps>()
</script>

<template>
  <div
    :class="cn(
      'toast-info',
      props.una?.toastInfo,
      props.class,
    )"
  >
    <slot />
  </div>
</template>
