<script setup lang="ts">
import type { NDrawerOverlayProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { DrawerOverlay } from 'vaul-vue'

import { cn } from '../../utils'

const props = defineProps<NDrawerOverlayProps>()
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <DrawerOverlay
    data-slot="drawer-overlay"
    v-bind="delegatedProps"
    :class="cn(
      'drawer-overlay',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      props.una?.drawerOverlay,
      props.class,
    )"
  />
</template>
