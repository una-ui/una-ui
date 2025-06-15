<script setup lang="ts">
import type { NBadgeProps } from '../../types'

import { cn } from '../../utils'
import NIcon from './Icon.vue'

const props = withDefaults(defineProps<NBadgeProps>(), {
  size: 'md',
  badge: 'soft-gray',
})

const emit = defineEmits(['close'])
</script>

<template>
  <span
    :badge
    :class="cn(
      'badge',
      una?.badge,
      props.class,
    )"
    :size
  >
    <NIcon
      v-if="icon"
      badge="icon-base"
      :class="una?.badgeIconBase"
      :name="icon"
      :size
    />

    <slot>
      <span class="badge-label">
        {{ label }}
      </span>
    </slot>

    <button
      v-if="closable"
      badge="close"
      :class="una?.badgeClose"
      :size
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
