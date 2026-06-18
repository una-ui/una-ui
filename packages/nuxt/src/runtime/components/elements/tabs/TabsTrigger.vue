<script setup lang="ts">
import type { NTabsTriggerProps } from '../../../types/tabs'
import { reactiveOmit } from '@vueuse/core'
import { TabsTrigger } from 'reka-ui'
import { cn } from '../../../utils'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NTabsTriggerProps>(), {
  tabsActive: 'outline-gray',
  tabsInactive: 'text-muted',
  size: 'sm',
})

const delegatedProps = reactiveOmit(props, ['class', 'size'])
</script>

<template>
  <TabsTrigger
    v-bind="delegatedProps"
    :size
    data-slot="tabs-trigger"
    :class="cn(
      'tabs-trigger',
      props.una?.tabsTrigger,
      props.class,
    )"
    :as="Button"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </TabsTrigger>
</template>
