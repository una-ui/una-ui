<script setup lang="ts">
import type { NCardActionProps } from '../../../types/card'
import { cn } from '../../../utils'

const props = defineProps<NCardActionProps>()
</script>

<template>
  <div
    data-slot="card-action"
    :class="cn(
      'card-action',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
