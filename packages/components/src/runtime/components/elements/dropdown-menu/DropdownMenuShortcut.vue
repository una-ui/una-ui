<script setup lang="ts">
import type { NDropdownMenuShortcutProps } from '../../../types/dropdown-menu'
import { cn } from '../../../utils'

const props = defineProps<NDropdownMenuShortcutProps>()
</script>

<template>
  <span
    :class="cn(
      'dropdown-menu-shortcut',
      props.una?.dropdownMenuShortcut,
      props.class,
    )"
  >
    <slot>
      {{ props.value }}
    </slot>
  </span>
</template>
