<script setup lang="ts">
import { TabsRoot, useForwardPropsEmits } from 'radix-vue'
import type { TabsRootEmits } from 'radix-vue'
import { cn } from '../../../utils'
import type { NTabsRootProps } from '../../../types/tabs'

const props = defineProps<NTabsRootProps>()
const emits = defineEmits<TabsRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TabsRoot
    v-bind="forwarded"
    :class="cn(
      'tabs-root',
      props.class,
      props.una?.tabsRoot,
    )"
  >
    <slot />
  </TabsRoot>
</template>
