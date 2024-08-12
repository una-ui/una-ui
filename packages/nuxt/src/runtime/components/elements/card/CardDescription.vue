<script setup lang="ts">
import type { NCardDescriptionProps } from '../../../types/card'
import { cn } from '../../../utils'

const props = defineProps<NCardDescriptionProps>()
</script>

<template>
  <p
    :class="cn(
      'card-description',
      props.class,
      props.una?.cardSubtitle,
    )"
    :size="size"
  >
    <slot />
  </p>
</template>
