<script setup lang="ts">
import type { NNavigationMenuListProps } from '../../types'
import { NavigationMenuList, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NNavigationMenuListProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

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
