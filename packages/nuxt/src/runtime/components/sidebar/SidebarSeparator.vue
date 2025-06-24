<script setup lang="ts">
import type { NSidebarSeparatorProps } from '../../types'
import { cn } from '../../utils'
import Separator from '../elements/Separator.vue'

const props = defineProps<NSidebarSeparatorProps>()
</script>

<template>
  <Separator
    data-slot="sidebar-separator"
    data-sidebar="separator"
    :class="cn(
      'sidebar-separator',
      props.una?.sidebarSeparator,
      props.class,
    )"
  >
    <slot />
  </Separator>
</template>
