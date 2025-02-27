<script setup lang="ts">
import type { NCardTitleProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NCardTitleProps>()
</script>

<template>
  <h3
    :class="
      cn(
        'card-title',
        props.una?.cardTitle,
        props.class,
      )
    "
  >
    <slot />
  </h3>
</template>
