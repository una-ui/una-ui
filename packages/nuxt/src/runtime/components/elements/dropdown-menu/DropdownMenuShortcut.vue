<script setup lang="ts">
import { cn } from '../../../utils'
import type { NDropdownMenuShortcutProps } from '../../../types/dropdown-menu'

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
