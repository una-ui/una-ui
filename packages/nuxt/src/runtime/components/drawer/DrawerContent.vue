<script lang="ts" setup>
import type { DialogContentEmits } from 'reka-ui'
import type { NDrawerContentProps } from '../../types'
import { useForwardPropsEmits } from 'reka-ui'
import { DrawerContent, DrawerPortal } from 'vaul-vue'
import { cn } from '../../utils'
import DrawerOverlay from './DrawerOverlay.vue'

const props = defineProps<NDrawerContentProps>()
const emits = defineEmits<DialogContentEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerContent
      data-slot="drawer-content"
      v-bind="forwarded"
      :class="cn(
        'drawer-content',
        'drawer-content-top',
        'drawer-content-bottom',
        'drawer-content-right',
        'drawer-content-left',
        props.class,
      )"
    >
      <div :class="cn('drawer-content-handle')" />
      <!-- <div class="group-data-[vaul-drawer-direction=bottom]/drawer-content:block mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted" /> -->
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>
