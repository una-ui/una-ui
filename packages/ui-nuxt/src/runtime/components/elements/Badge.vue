<script setup lang="ts">
import { computed } from 'vue'
import type { NBadgeProps } from '../../types'
import NIcon from './Icon.vue'

const props = defineProps<NBadgeProps>()

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
      { 'badge-default-variant': !hasVariant && !isBaseVariant },
      nv?.badge,
    ]"
  >
    <NIcon
      v-if="icon"
      badge="icon-base"
      :class="nv?.badgeIconBase"
      :name="icon"
    />

    <slot>
      {{ label }}
    </slot>

    <button
      v-if="closable"
      badge="close"
      :class="nv?.badgeClose"
      group
      @click="emit('close')"
    >
      <NIcon
        :name="nv?.badgeCloseIcon ?? 'badge-close-icon'"
        :class="nv?.badgeCloseIconBase"
        class="close-icon-base"
      />
      <span class="absolute -inset-0.25em" />
    </button>
  </span>
</template>
