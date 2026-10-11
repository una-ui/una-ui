<script setup lang="ts">
import type { NNavigationMenuItemProps } from '../../types'
import { NavigationMenuItem } from 'reka-ui'

const props = defineProps<NNavigationMenuItemProps>()
</script>

<template>
  <NavigationMenuItem v-bind="props">
    <slot />
  </NavigationMenuItem>
</template>
