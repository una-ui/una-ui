<script setup lang="ts">
import type { NAvatarImageProps } from '../../../types'
import { AvatarImage } from 'radix-vue'
import { cn } from '../../../utils'

const props = defineProps<NAvatarImageProps>()
</script>

<template>
  <AvatarImage
    v-bind="props"
    :src="src!"
    :class="cn(
      'avatar-image',
      una?.avatarImage,
      props.class,
    )"
  />
</template>
