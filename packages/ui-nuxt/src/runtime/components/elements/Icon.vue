<script setup lang="ts">
import type { NVIconProps } from '../../types'

defineProps<NVIconProps>()
</script>

<template>
  <span class="flex-none" :class="name" />
</template>
