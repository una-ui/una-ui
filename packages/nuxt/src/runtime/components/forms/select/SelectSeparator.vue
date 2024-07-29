<script setup lang="ts">
import { computed } from 'vue'
import { SelectSeparator } from 'radix-vue'
import { cn } from '../../../utils'
import type { NSelectSeparator } from '../../../types'

const props = defineProps<NSelectSeparator>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <SelectSeparator v-bind="delegatedProps" :class="cn('-mx-1 my-1 h-px bg-muted', props.class)" />
</template>
