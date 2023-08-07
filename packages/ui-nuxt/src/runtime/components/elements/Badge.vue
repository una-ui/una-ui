<script setup lang="ts">
import { computed } from 'vue'
import type { NBadgeProps } from '../../types'

const props = defineProps<NBadgeProps>()

const badgeVariants = ['solid', 'soft', 'outline', '~'] as const
const hasVariant = computed(() => badgeVariants.some(badgeVariants => props.badge?.includes(badgeVariants)))
</script>

<template>
  <span
    :badge="badge"
    :class="{ 'badge-default-variant': !hasVariant }"
  >
    <slot>
      {{ label }}
    </slot>
  </span>
</template>
