<script setup lang="ts">
import type { TabsRootEmits } from 'reka-ui'
import type { NTabsRootProps } from '../../../types/tabs'
import { TabsRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../../utils'

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
