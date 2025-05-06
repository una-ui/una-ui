<script lang="ts" setup>
import type { NDrawerCloseProps } from '../../types'
import { DrawerClose } from 'vaul-vue'

const props = defineProps<NDrawerCloseProps>()
</script>

<template>
  <DrawerClose
    data-slot="drawer-close"
    v-bind="props"
  >
    <slot />
  </DrawerClose>
</template>
