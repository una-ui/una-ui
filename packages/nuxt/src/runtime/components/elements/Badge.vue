<script setup lang="ts">
import { computed } from 'vue'

import type { NBadgeProps } from '../../types'
import NIcon from './Icon.vue'

const props = withDefaults(defineProps<NBadgeProps>(), {
  una: () => ({
    badgeDefaultVariant: 'badge-default-variant',
  }),
})

const emit = defineEmits<{ (...args: any): void }>()

const badgeVariants = ['solid', 'soft', 'outline'] as const
const hasVariant = computed(() => badgeVariants.some(badgeVariants => props.badge?.includes(badgeVariants)))
const isBaseVariant = computed(() => props.badge?.includes('~'))
</script>

<template>
  <span
    :badge="badge"
    class="badge"
    :class="[
      !hasVariant && !isBaseVariant ? una?.badgeDefaultVariant : '',
      una?.badge,
    ]"
  >
    <NIcon
      v-if="icon"
      badge="icon-base"
      :class="una?.badgeIconBase"
      :name="icon"
    />

    <slot>
      {{ label }}
    </slot>

    <button
      v-if="closable"
      badge="close"
      :class="una?.badgeClose"
      group
      @click="emit('close')"
    >
      <NIcon
        :name="una?.badgeCloseIcon ?? 'badge-close-icon'"
        :class="una?.badgeCloseIconBase"
        badge="close-icon-base"
      />
      <span class="absolute -inset-0.25em" />
    </button>
  </span>
</template>
