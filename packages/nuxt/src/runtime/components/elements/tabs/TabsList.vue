<script setup lang="ts">
import { computed } from 'vue'
import { TabsList } from 'radix-vue'
import { cn } from '../../../utils'
import type { NTabsListProps } from '../../../types/tabs'

const props = defineProps<NTabsListProps>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="cn(
      'tabs-list',
      props.class,
      props.una?.tabsList,
    )"
  >
    <slot />
  </TabsList>
</template>
