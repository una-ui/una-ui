<script setup lang="ts">
import type { NCardDescriptionProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NCardDescriptionProps>()
</script>

<template>
  <p
    data-slot="card-description"
    :class="cn(
      'card-description',
      props.una?.cardDescription,
      props.class,
    )"
  >
    <slot />
  </p>
</template>
