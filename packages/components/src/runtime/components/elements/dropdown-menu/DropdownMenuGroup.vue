<script setup lang="ts">
import type { NDropdownMenuGroupProps } from '../../../types'
import { DropdownMenuGroup } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NDropdownMenuGroupProps>()
</script>

<template>
  <DropdownMenuGroup
    v-bind="props"
    :class="cn(
      'dropdown-menu-group',
      props.una?.dropdownMenuGroup,
      props.class,
    )"
  >
    <slot />
  </DropdownMenuGroup>
</template>
