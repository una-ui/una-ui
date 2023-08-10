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
    <slot v-bind="{ isLoading, error, isReady }">
      <!-- fallback -->
      <slot
        v-if="error || !isReady || isLoading"
        name="fallback"
      >
        <!-- placeholder fallback -->
        <span
          v-if="placeholder"
          avatar="fallback"
        >
          {{ placeholder }}
        </span>

        <!-- img fallback -->
        <img
          v-else-if="fallback"
          avatar="src"
          :src="fallback"
        >

        <NIcon
          v-else
          size="1.5em"
          name="i-heroicons-user-20-solid"
        />
      </slot>

      <!-- image -->
      <img
        v-else
        avatar="src"
        :src="src"
        :alt="alt"
      >
    </slot>
  </span>
</template>
