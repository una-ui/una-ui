<script setup lang="ts">
import { computed } from 'vue'
import type { NBadgeProps } from '../../types'
import NIcon from './Icon.vue'
import NButton from './Button.vue'

const props = defineProps<NBadgeProps>()

const badgeVariants = ['solid', 'soft', 'outline', '~'] as const
const hasVariant = computed(() => badgeVariants.some(badgeVariants => props.badge?.includes(badgeVariants)))
</script>

<template>
  <span
    :badge="badge"
    :class="{ 'badge-default-variant': !hasVariant }"
  >
    <NIcon size="1.5" name="i-tabler-circle-filled" />
    <slot>
      {{ label }}
    </slot>

    <button
      badge="close"
      size="xs"
    >
      <NIcon
        name="badge-close-icon"
        class="close-icon-base"
      />
    </button>

    <NButton
      badge="close"
      size="xs"
      btn="~"
    >
      <NIcon
        name="badge-close-icon"
        class="close-icon-base"
      />
    </NButton>
  </span>
</template>
