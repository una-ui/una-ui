<script setup lang="ts">
import type { NAvatarProps } from '../../../types'
import { AvatarRoot } from 'radix-vue'
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
    as-child
  >
    <component
      :is="as"
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
      <slot :props>
        <AvatarImage
          v-if="src"
          :src
          :una
          v-bind="_avatarImage"
        />
      </slot>

      <AvatarFallback
        :avatar
        :label="label || alt?.split(' ').map(word => word[0]).join('').slice(0, 2)"
        :icon
        v-bind="_avatarFallback"
        :una
      >
        <slot name="fallback" />
      </AvatarFallback>
    </component>
  </AvatarRoot>
</template>
