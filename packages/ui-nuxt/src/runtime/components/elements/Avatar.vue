<script setup lang="ts">
import { useImage } from '@vueuse/core'
import { computed } from 'vue'
import type { NAvatarProps } from '../../types'

const props = withDefaults(defineProps<NAvatarProps>(), {
  delay: 0,
})

const { isLoading, error, isReady } = useImage({ src: props?.src ?? '' }, { delay: props.delay })

const avatarVariants = ['solid', 'soft', 'outline'] as const
const hasVariant = computed(() => avatarVariants.some(avatarVariants => props.avatar?.includes(avatarVariants)))
const isBaseVariant = computed(() => props.avatar?.includes('~'))

const placeholder = computed(() => {
  if (props.label)
    return props.label

  return props.alt?.split(' ').map(word => word[0]).join('').slice(0, 2)
})
</script>

<template>
  <span
    :avatar="avatar"
    class="avatar"
    :class="{ 'avatar-default-variant': !hasVariant && !isBaseVariant }"
  >
    <slot
      v-if="error || !isReady || isLoading"
      name="fallback"
    >

      <!-- img fallback -->
      <img
        v-if="fallback"
        avatar="src"
        :src="fallback"
        :alt="alt ?? 'avatar'"
      >

      <!-- placeholder fallback -->
      <span
        v-else-if="placeholder"
        avatar="label"
      >
        {{ placeholder }}
      </span>

      <!-- icon fallback -->
      <NIcon
        v-else
        avatar="icon-base"
        name="avatar-icon"
      />
    </slot>

    <slot v-else v-bind="{ isLoading, error, isReady }">
      <!-- image -->
      <img
        avatar="src"
        :src="src"
        :alt="alt"
      >
    </slot>
  </span>
</template>
