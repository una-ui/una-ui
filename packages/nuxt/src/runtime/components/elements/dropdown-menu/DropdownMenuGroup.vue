<script setup lang="ts">
import { DropdownMenuGroup } from 'radix-vue'
import type { NDropdownMenuGroupProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NDropdownMenuGroupProps>()
</script>

<template>
  <DropdownMenuGroup
    v-bind="props"
    :class="cn('dropdown-menu-group', props.class)"
  >
    <slot />
  </DropdownMenuGroup>
</template>
