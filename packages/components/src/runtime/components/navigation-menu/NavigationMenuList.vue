<script setup lang="ts">
import type { NNavigationMenuListProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuList, useForwardProps } from 'reka-ui'

import { cn } from '../../utils'

const props = defineProps<NNavigationMenuListProps>()
const delegatedProps = reactiveOmit(props, ['class'])

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuList
    v-bind="forwardedProps"
    :class="
      cn(
        'group',
        'navigation-menu-list',
        props.orientation === 'vertical' ? 'navigation-menu-list-vertical' : 'navigation-menu-list-horizontal',
        props.una?.navigationMenuList,
        props.class,
      )
    "
  >
    <slot />
  </NavigationMenuList>
</template>
