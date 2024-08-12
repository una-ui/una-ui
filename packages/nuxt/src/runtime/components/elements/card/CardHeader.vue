<script setup lang="ts">
import type { NCardHeaderProps } from '../../../types/card'
import { cn } from '../../../utils'

const props = defineProps<NCardHeaderProps>()
</script>

<template>
  <div
    :class="cn(
      props.class,
      props.una?.cardHeader,
    )"
  >
    <slot />
  </div>
</template>
