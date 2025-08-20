<script setup lang="ts">
import type { NCommandShortcutProps } from '../../types'
import { cn } from '../../utils'

const props = defineProps<NCommandShortcutProps>()
</script>

<template>
  <span :class="cn('ml-auto text-xs tracking-widest text-muted', props.class)">
    <slot />
  </span>
</template>
