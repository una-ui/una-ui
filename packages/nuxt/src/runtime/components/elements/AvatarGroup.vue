<script setup lang="ts">
import type { NAvatarGroupProps } from '../../types'
import NAvatarGroupDefaultSlot from '../slots/AvatarGroupDefault'

const props = withDefaults(defineProps<NAvatarGroupProps>(), {
  max: 3,
})
</script>

<template>
  <div
    avatar-group
    :size
    :class="una?.avatarGroup"
  >
    <NAvatarGroupDefaultSlot
      :max
      :avatar="props"
    >
      <slot />
    </NAvatarGroupDefaultSlot>
  </div>
</template>
