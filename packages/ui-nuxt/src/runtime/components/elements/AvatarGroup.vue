<script setup lang="ts">
import type { NAvatarGroupProps } from '../../types'
import NAvatarGroupDefaultSlot from '../slots/AvatarGroupDefault'
import { omitProps } from '../../utils'

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
      :avatar="omitProps(props, ['max'])"
    >
      <slot />
    </NAvatarGroupDefaultSlot>
  </div>
</template>
