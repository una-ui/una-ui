<script setup lang="ts">
import type { NIconProps } from '../../types'

defineProps<NIconProps>()
</script>

<template>
  <span icon-base :class="name" />
</template>
