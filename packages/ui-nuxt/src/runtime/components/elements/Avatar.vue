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
  if (props.fallback)
    return props.fallback

  return props.alt?.split(' ').map(word => word[0]).join('').slice(0, 2)
})
</script>

<template>
  <span
    :avatar="avatar"
    class="avatar"
    :class="{ 'avatar-default-variant': !hasVariant && !isBaseVariant }"
  >
    <slot v-bind="{ isLoading, error, isReady }">
      <!-- fallback -->
      <slot
        v-if="error || !isReady || isLoading && !placeholder"
        name="fallback"
      >
        <span
          avatar="fallback"
        >
          {{ placeholder }}
        </span>
      </slot>

      <!-- image -->
      <img
        v-else
        avatar="src"
        :src="src"
        :alt="alt"
        loading="lazy"
      >
    </slot>
  </span>
</template>
