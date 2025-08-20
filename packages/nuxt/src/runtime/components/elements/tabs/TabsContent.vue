<script setup lang="ts">
import type { NTabsContentProps } from '../../../types/tabs'
import { reactiveOmit } from '@vueuse/core'
import { TabsContent } from 'reka-ui'
import { cn } from '../../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NTabsContentProps>()

const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <TabsContent
    data-slot="tabs-content"
    v-bind="{ ...delegatedProps, ...$attrs }"
    :class="cn(
      'tabs-content',
      props.class,
      props.una?.tabsContent,
    )"
  >
    <slot />
  </TabsContent>
</template>
