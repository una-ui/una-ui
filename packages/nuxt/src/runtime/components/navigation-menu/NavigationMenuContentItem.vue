<script setup lang="ts">
import type { NavigationMenuLinkEmits } from 'reka-ui'
import type { NNavigationMenuListItemProps } from '../../types'
import { useForwardPropsEmits } from 'reka-ui'
import NavigationMenuLink from './NavigationMenuLink.vue'

const props = defineProps<NNavigationMenuListItemProps>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <NavigationMenuLink v-bind="forwarded" class="navigation-menu-content-item">
    <slot>
      <div class="navigation-menu-content-item-wrapper">
        <div class="navigation-menu-content-item-label">
          {{ label }}
        </div>
        <p v-if="description" class="navigation-menu-content-item-description">
          {{ description }}
        </p>
      </div>
    </slot>
  </NavigationMenuLink>
</template>
