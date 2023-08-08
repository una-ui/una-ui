<script setup lang="ts">
import { computed } from 'vue'
import type { NBadgeProps } from '../../types'
import NIcon from './Icon.vue'

const props = defineProps<NBadgeProps>()

const emit = defineEmits<{ (...args: any): void }>()

const badgeVariants = ['solid', 'soft', 'outline', '~'] as const
const hasVariant = computed(() => badgeVariants.some(badgeVariants => props.badge?.includes(badgeVariants)))
</script>

<template>
  <span
    :badge="badge"
    :class="{ 'badge-default-variant': !hasVariant }"
  >
    <slot name="icon">
      <NIcon
        v-if="icon"
        badge="icon-base"
        :name="icon"
      />
    </slot>
    <slot>
      {{ label }}
    </slot>

    <button
      v-if="closable"
      badge="close"
      size="xs"
      group
      @click="emit('close')"
    >
      <NIcon
        name="badge-close-icon"
        class="close-icon-base"
      />
    </button>
  </span>
</template>
