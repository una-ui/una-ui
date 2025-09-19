<script setup lang="ts">
import type { AccordionRootEmits } from 'reka-ui'

import type { NAccordionProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { defu } from 'defu'
import { AccordionRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../../utils'
import NAccordionItem from './AccordionItem.vue'

const props = withDefaults(defineProps<NAccordionProps>(), {
  collapsible: true,
  type: 'single',
})

const emits = defineEmits<AccordionRootEmits>()

const rootProps = useForwardPropsEmits(reactiveOmit(props, ['una', 'items']), emits)
</script>

<template>
  <AccordionRoot
    v-slot="{ modelValue }"
    v-bind="rootProps"
    :class="cn(
      'accordion accordion-(divider border)',
      una?.accordion,
    )"
  >
    <slot :model-value>
      <NAccordionItem
        v-for="item in items"
        :key="item.value"
        :_accordion-trigger
        :_accordion-content
        :_accordion-header
        :una
        v-bind="defu(item, _accordionItem)"
      >
        <template #default="{ open }">
          <slot name="item" :open />
        </template>

        <template #header="{ open }">
          <slot name="header" :open />
        </template>

        <template #trigger="{ open }">
          <slot name="trigger" :open />
        </template>

        <template #content="{ open }">
          <slot name="content" :open />
        </template>
      </NAccordionItem>
    </slot>
  </AccordionRoot>
</template>
