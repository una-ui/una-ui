<script setup lang="ts">
import type { NSidebarInsetProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NSidebarInsetProps>()
</script>

<template>
  <main
    :class="cn(
      'sidebar-inset',
      props.class,
    )"
  >
    <slot />
  </main>
</template>
