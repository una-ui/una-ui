<script setup lang="ts">
import type { NSelectSeparator } from '../../../types'
import { SelectSeparator } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<NSelectSeparator>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <SelectSeparator v-bind="delegatedProps" :class="cn('select-separator', props.class)" />
</template>
