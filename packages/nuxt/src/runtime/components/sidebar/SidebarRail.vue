<script setup lang="ts">
import type { NSidebarRailProps } from '../../types'
import { useSidebar } from '../../composables/useSidebar'
import { cn } from '../../utils'

const props = defineProps<NSidebarRailProps>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <button
    data-sidebar="rail"
    aria-label="Toggle Sidebar"
    :tabindex="-1"
    title="Toggle Sidebar"
    :class="cn(
      'sidebar-rail',
      props.class,
    )"
    @click="toggleSidebar"
  >
    <slot />
  </button>
</template>
