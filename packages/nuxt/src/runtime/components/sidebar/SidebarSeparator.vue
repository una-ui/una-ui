<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type Separator from '../elements/Separator.vue'
import { cn } from '../../utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <Separator
    data-sidebar="separator"
    :class="cn('mx-2 w-auto bg-sidebar-border', props.class)"
  >
    <slot />
  </Separator>
</template>
