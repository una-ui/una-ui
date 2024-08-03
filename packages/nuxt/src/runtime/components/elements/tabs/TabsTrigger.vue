<script setup lang="ts">
import { computed } from 'vue'
import { TabsTrigger } from 'radix-vue'
import { cn } from '../../../utils'
import type { NTabsTriggerProps } from '../../../types/tabs'

const props = defineProps<NTabsTriggerProps>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <TabsTrigger
    v-bind="delegatedProps"
    :class="cn(
      'tabs-trigger',
      props.class,
      props.una?.tabsTrigger,
    )"
  >
    <slot />
  </TabsTrigger>
</template>
