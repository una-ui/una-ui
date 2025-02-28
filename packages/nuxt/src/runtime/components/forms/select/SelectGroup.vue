<script setup lang="ts">
import type { NSelectGroupProps } from '../../../types'
import { SelectGroup } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<NSelectGroupProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <SelectGroup
    :class="cn(
      'select-group',
      props.una?.selectGroup,
      props.class,
    )"
    v-bind="delegatedProps"
  >
    <slot />
  </SelectGroup>
</template>
