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
    :class="[
      { 'avatar-default-variant': !hasVariant && !isBaseVariant },
      { 'animate-pulse': isLoading && skeleton && src },
      una?.avatar,
    ]"
  >
    <template v-if="!icon">
      <slot
        v-if="!skeleton"
        v-bind="{ isLoading, error, isReady, ...props }"
      >
        <img
          v-if="isReady && !error"
          avatar="src"
          :src="src"
          :alt="alt"
          :class="una?.avatarSrc"
        >

        <img
          v-else-if="fallback"
          avatar="src"
          :src="fallback"
          :alt="alt ?? 'avatar'"
          :class="una?.avatarFallback"
        >

        <span
          v-else-if="placeholder"
          avatar="label"
          :class="una?.avatarLabel"
        >
          {{ placeholder }}
        </span>

        <NIcon
          v-else
          avatar="fallback-icon-base"
          :name="una?.avatarFallbackIcon ?? 'avatar-fallback-icon'"
          :class="una?.avatarFallbackIcon"
        />
      </slot>
    </template>

    <template v-else>
      <NIcon
        avatar="icon-base"
        :class="una?.avatarIconBase"
        :name="icon"
      />
    </template>
  </span>
</template>
