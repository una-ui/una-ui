<script lang="ts" setup>
import type { NDrawerTriggerProps } from '../../types'
import { DrawerTrigger } from 'vaul-vue'

const props = defineProps<NDrawerTriggerProps>()
</script>

<template>
  <DrawerTrigger
    data-slot="drawer-trigger"
    v-bind="props"
  >
    <slot />
  </DrawerTrigger>
</template>
