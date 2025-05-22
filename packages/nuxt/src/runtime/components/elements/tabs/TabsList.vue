<script setup lang="ts">
import type { NTabsListProps } from '../../../types/tabs'
import { reactiveOmit } from '@vueuse/core'
import { TabsList } from 'reka-ui'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NTabsListProps>(), {
  size: 'sm',
})
const delegatedProps = reactiveOmit(props, ['class', 'size'])
</script>

<template>
  <TabsList
    data-slot="tabs-list"
    :size
    v-bind="delegatedProps"
    :class="cn(
      'tabs-list',
      props.una?.tabsList,
      props.class,
    )"
  >
    <slot />
  </TabsList>
</template>
