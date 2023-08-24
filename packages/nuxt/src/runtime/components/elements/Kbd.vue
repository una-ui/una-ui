<script setup lang="ts">
import { computed } from 'vue'
import type { NKbdProps } from '../../types'

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
