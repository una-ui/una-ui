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
  accordion: 'divider border',
})

const emits = defineEmits<AccordionRootEmits>()

const rootProps = useForwardPropsEmits(reactiveOmit(props, ['una', 'items', '_accordionTrigger', '_accordionContent', '_accordionHeader', '_accordionItem']), emits)
</script>

<template>
  <AccordionRoot
    v-slot="{ modelValue }"
    v-bind="rootProps"
    :class="cn(
      una?.accordion,
    )"
  >
    <slot :model-value>
      <NAccordionItem
        v-for="(item, index) in items"
        :key="item.value"
        v-bind="defu(item, _accordionItem)"
        :_accordion-trigger="defu(item._accordionTrigger, _accordionTrigger)"
        :_accordion-content="defu(item._accordionContent, _accordionContent)"
        :_accordion-header="defu(item._accordionHeader, _accordionHeader)"
        :una
      >
        <template #default="{ open }">
          <slot :name="`${item.value}-item`" :open :item :index>
            <slot name="item" :open :item :index />
          </slot>
        </template>

        <template #header="{ open }">
          <slot :name="`${item.value}-header`" :open :item :index>
            <slot name="header" :open :item :index />
          </slot>
        </template>

        <template #trigger="{ open }">
          <slot :name="`${item.value}-trigger`" :open :item :index>
            <slot name="trigger" :open :item :index />
          </slot>
        </template>

        <template #content="{ open }">
          <slot :name="`${item.value}-content`" :open :item :index>
            <slot name="content" :open :item :index />
          </slot>
        </template>
      </NAccordionItem>
    </slot>
  </AccordionRoot>
</template>
