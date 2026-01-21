<script setup lang="ts">
import type { NCommandShortcutProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NCommandShortcutProps>()
</script>

<template>
  <span :class="cn('command-shortcut', props.class)">
    <slot />
  </span>
</template>
