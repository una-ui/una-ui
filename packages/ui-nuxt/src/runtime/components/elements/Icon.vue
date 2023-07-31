<script setup lang="ts">
import type { NVIconProps } from '../../types'

defineProps<NVIconProps>()
</script>

<template>
  <span icon-base :class="name" />
</template>
