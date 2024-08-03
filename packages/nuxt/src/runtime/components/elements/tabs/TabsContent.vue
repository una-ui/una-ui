<script setup lang="ts">
import { computed } from 'vue'
import { TabsContent } from 'radix-vue'
import { cn } from '../../../utils'
import type { NTabsContentProps } from '../../../types/tabs'

const props = defineProps<NTabsContentProps>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <TabsContent
    v-bind="delegatedProps"
    :class="cn(
      'tabs-content',
      props.class,
      props.una?.tabsContent,
    )"
  >
    <slot />
  </TabsContent>
</template>
