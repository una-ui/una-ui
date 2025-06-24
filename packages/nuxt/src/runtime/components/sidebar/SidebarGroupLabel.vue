<script setup lang="ts">
import type { NSidebarGroupLabelProps } from '../../types'
import { Primitive } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NSidebarGroupLabelProps>(), {
  as: 'div',
  asChild: false,
})
</script>

<template>
  <Primitive
    data-slot="sidebar-group-label"
    data-sidebar="group-label"
    :as="as"
    :as-child="asChild"
    :class="cn(
      'sidebar-group-label',
      props.una?.sidebarGroupLabel,
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
