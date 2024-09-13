<script setup lang="ts">
import type { NKbdProps } from '../../types'
import { computed } from 'vue'

const props = defineProps<NKbdProps>()

const kbdVariants = ['solid', 'outline'] as const
const hasVariant = computed(() => kbdVariants.some(kbdVariants => props.kbd?.includes(kbdVariants)))
const isBaseVariant = computed(() => props.kbd?.includes('~'))
</script>

<template>
  <kbd
    class="kbd"
    :kbd="kbd"
    :class="[
      { 'kbd-default-variant': !hasVariant && !isBaseVariant },
      una?.kbd,
    ]"
  >
    <slot>
      {{ label }}
    </slot>
  </kbd>
</template>
