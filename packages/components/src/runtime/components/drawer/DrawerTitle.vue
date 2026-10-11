<script setup lang="ts">
import type { NDrawerTitleProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { DrawerTitle } from 'vaul-vue'

import { cn } from '../../utils'

const props = defineProps<NDrawerTitleProps>()
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <DrawerTitle
    data-slot="drawer-title"
    v-bind="delegatedProps"
    :class="cn(
      'drawer-title',
      props.una?.drawerTitle,
      props.class,
    )"
  >
    <slot />
  </DrawerTitle>
</template>
