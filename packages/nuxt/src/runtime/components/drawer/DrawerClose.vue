<script setup lang="ts">
import type { NDrawerCloseProps } from '../../types'
import { DrawerClose } from 'vaul-vue'

const props = withDefaults(defineProps<NDrawerCloseProps>(), {
  square: undefined,
})
</script>

<template>
  <DrawerClose
    data-slot="drawer-close"
    v-bind="props"
  >
    <slot />
  </DrawerClose>
</template>
