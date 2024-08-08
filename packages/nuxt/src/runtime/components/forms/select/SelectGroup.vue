<script setup lang="ts">
import { computed } from 'vue'
import { SelectGroup } from 'radix-vue'
import { cn } from '../../../utils'
import type { NSelectGroupProps } from '../../../types'

const props = defineProps<NSelectGroupProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <SelectGroup :class="cn('select-group', props.class)" v-bind="delegatedProps">
    <slot />
  </SelectGroup>
</template>
