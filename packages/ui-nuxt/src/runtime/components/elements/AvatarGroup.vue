<script setup lang="ts">
import type { NAvatarGroupProps } from '../../types'
import NAvatarGroupDefaultSlot from '../slots/AvatarGroupDefault'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NAvatarGroupProps>()
</script>

<template>
  <div
    avatar-group
    v-bind="$attrs"
  >
    <NAvatarGroupDefaultSlot
      :max="max"
      :avatar="props"
    >
      <slot />
    </NAvatarGroupDefaultSlot>
  </div>
</template>
