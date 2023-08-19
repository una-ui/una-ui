<script setup lang="ts">
import type { NAvatarGroupProps } from '../../types'
import NAvatarGroupDefaultSlot from '../slots/AvatarGroupDefault'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NAvatarGroupProps>(), {
  max: 3,
})
</script>

<template>
  <div
    avatar-group
    v-bind="$attrs"
    :class="una?.avatarGroup"
  >
    <NAvatarGroupDefaultSlot
      :max="max"
      :avatar="props"
    >
      <slot />
    </NAvatarGroupDefaultSlot>
  </div>
</template>
