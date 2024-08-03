<script setup lang="ts">
import { TabsRoot, useForwardPropsEmits } from 'radix-vue'
import type { TabsRootEmits } from 'radix-vue'
import { cn } from '../../../utils'
import type { NTabsProps } from '../../../types/tabs'

const props = defineProps<NTabsProps>()
const emits = defineEmits<TabsRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TabsRoot
    v-bind="forwarded"
    :tabs="tabs"
    :class="cn(
      'tabs',
      props.class,
      props.una?.tabsRoot,
    )"
  >
    <slot />
  </TabsRoot>
</template>
