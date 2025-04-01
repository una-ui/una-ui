<script setup lang="ts">
import type { NavigationMenuLinkEmits } from 'reka-ui'
import type { NNavigationMenuLinkProps } from '../../types'
import { NavigationMenuLink, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import Button from '../elements/Button.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NNavigationMenuLinkProps>(), {
  navigationMenuLink: 'ghost-white',
  btn: '~',
  as: Button,
})
const emits = defineEmits<NavigationMenuLinkEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuLink
    v-bind="!props.asChild ? {
      ...$attrs,
      ...forwarded,
      class: cn(
        'navigation-menu-link group',
        props.una?.navigationMenuLink,
        props.class,
      ),
      navigationMenuLink: btn !== '~' ? undefined : navigationMenuLink,
      navigationMenu: btn === '~' ? props.navigationMenu : undefined,
    } : {}"
    :as-child
    :as
    :active
  >
    <slot :active="active" />
  </NavigationMenuLink>
</template>
