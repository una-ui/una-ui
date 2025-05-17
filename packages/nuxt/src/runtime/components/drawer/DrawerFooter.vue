<script setup lang="ts">
import type { NDrawerFooterProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NDrawerFooterProps>()
</script>

<template>
  <div
    data-slot="drawer-footer"
    :class="cn('drawer-footer', props.class)"
  >
    <slot />
  </div>
</template>
