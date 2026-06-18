<script setup lang="ts">
import type { NSidebarGroupActionProps } from '../../types'
import { Primitive } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NSidebarGroupActionProps>(), {
  as: 'button',
  asChild: false,
})
</script>

<template>
  <Primitive
    data-slot="sidebar-group-action"
    data-sidebar="group-action"
    :as="as"
    :as-child="asChild"
    :class="cn(
      'sidebar-group-action',
      props.una?.sidebarGroupAction,
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
