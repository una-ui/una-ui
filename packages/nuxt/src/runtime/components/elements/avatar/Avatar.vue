<script setup lang="ts">
import type { NAvatarProps } from '../../../types'
import { AvatarRoot } from 'reka-ui'
import { cn } from '../../../utils'
import AvatarFallback from './AvatarFallback.vue'
import AvatarImage from './AvatarImage.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NAvatarProps>(), {
  as: 'span',
  size: 'md',
  rounded: 'full',
  square: '2.5em',
  avatar: 'soft',
})
</script>

<template>
  <AvatarRoot
    :class="cn(
      'avatar',
      una?.avatarRoot,
      props.class,
    )"
    :size
    :rounded
    :square
    :avatar
    v-bind="{ ..._avatarRoot, ...$attrs }"
  >
    <slot>
      <AvatarImage
        v-if="src"
        :src
        :una
        :alt
        v-bind="_avatarImage"
      />
    </slot>

    <AvatarFallback
      :label="label || alt?.split(' ').map(word => word[0]).join('').slice(0, 2)"
      :icon
      v-bind="_avatarFallback"
      :una
    >
      <slot name="fallback" />
    </AvatarFallback>
  </AvatarRoot>
</template>
