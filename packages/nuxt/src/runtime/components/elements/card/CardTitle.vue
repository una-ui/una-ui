<script setup lang="ts">
import type { NCardTitleProps } from '../../../types/card'
import { cn } from '../../../utils'

const props = defineProps<NCardTitleProps>()
</script>

<template>
  <h3
    :class="
      cn('card-title',
         props.class,
         props.una?.cardTitle,
      )
    "
    :size="size"
  >
    <slot />
  </h3>
</template>
