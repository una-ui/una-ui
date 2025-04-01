<script setup lang="ts">
import type { NavigationMenuLinkEmits } from 'reka-ui'
import type { NNavigationMenuListItemProps } from '../../types'
import { useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
import NavigationMenuLink from './NavigationMenuLink.vue'

const props = defineProps<NNavigationMenuListItemProps>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuLink
    v-bind="forwarded"
    :class="cn(
      'navigation-menu-content-item',
      props.una?.navigationMenuContentItem,
      props.class,
    )"
  >
    <slot>
      <div
        :class="cn(
          'navigation-menu-content-item-wrapper',
          props.una?.navigationMenuContentItemWrapper,
        )"
      >
        <p
          :class="cn(
            'navigation-menu-content-item-label',
            props.una?.navigationMenuContentItemLabel,
          )"
        >
          {{ label }}
        </p>
        <p
          v-if="description" :class="cn(
            'navigation-menu-content-item-description',
            props.una?.navigationMenuContentItemDescription,
          )"
        >
          {{ description }}
        </p>
      </div>
    </slot>
  </NavigationMenuLink>
</template>
