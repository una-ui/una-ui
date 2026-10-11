<script setup lang="ts">
import type { NDrawerDescriptionProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { DrawerDescription } from 'vaul-vue'

import { cn } from '../../utils'

const props = defineProps<NDrawerDescriptionProps>()
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <DrawerDescription
    data-slot="drawer-description"
    v-bind="delegatedProps"
    :class="cn(
      'drawer-description',
      props.una?.drawerDescription,
      props.class,
    )"
  >
    <slot />
  </DrawerDescription>
</template>
