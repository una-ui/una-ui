<script setup lang="ts">
import type { NSidebarFooterProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSidebarFooterProps>()
</script>

<template>
  <div
    data-sidebar="footer"
    :class="cn('sidebar-footer', props.class)"
  >
    <slot />
  </div>
</template>
