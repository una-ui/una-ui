<script setup lang="ts">
import type { NSidebarInsetProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSidebarInsetProps>()
</script>

<template>
  <main
    data-slot="sidebar-inset"
    :class="cn(
      'sidebar-inset',
      props.una?.sidebarInset,
      props.class,
    )"
  >
    <slot />
  </main>
</template>
