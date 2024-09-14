<script setup lang="ts">
import type { NDropdownMenuShortcutProps } from '../../../types/dropdown-menu'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NDropdownMenuShortcutProps>(), {
  size: 'sm',
})
</script>

<template>
  <span
    :class="cn(
      'dropdown-menu-shortcut',
      props.class,
      props.una?.dropdownMenuShortcut,
    )"
  >
    <slot>
      {{ props.value }}
    </slot>
  </span>
</template>
