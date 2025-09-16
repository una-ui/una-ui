<script setup lang="ts">
import type { AccordionRootEmits } from 'reka-ui'

import type { NAccordionItemProps, NAccordionProps } from '../../types'
import defu from 'defu'
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger, useForwardPropsEmits } from 'reka-ui'

import { computed } from 'vue'
import { cn, omitProps } from '../../utils'
import NButton from './Button.vue'

const props = withDefaults(defineProps<NAccordionProps>(), {
  collapsible: true,
  type: 'single',
})

const emits = defineEmits<AccordionRootEmits>()

const rootProps = useForwardPropsEmits(omitProps(props, ['accordion', 'una', 'items', '_itemDefaults']), emits)

const itemDefaults = computed(() => defu(props._itemDefaults, {
  trailing: 'accordion-trailing-icon group-data-[state=closed]:rotate-180',
}))

function mergedProps(itemProps: NAccordionItemProps): NAccordionItemProps {
  return defu(itemProps, props._itemDefaults)
}
</script>

<template>
  <AccordionRoot
    v-bind="rootProps"
    :accordion="accordion"
    class="accordion accordion-(divider border)"
    :class="[
      una?.accordion,
    ]"
  >
    <AccordionItem
      v-for="(item, i) in items"
      :key="i"
      v-slot="{ open }"
      as="div"
      :value="item.value || `item-${i}`"
      :disabled="item.disabled"
      accordion="item"
      :default-open="item.defaultOpen"
      :class="una?.accordionItem"
      class="overflow-hidden focus-within:(relative z-10 shadow)"
    >
      <AccordionHeader
        class="flex"
      >
        <AccordionTrigger as-child class="group flex">
          <slot name="label" :item="item" :index="i" :open="open">
            <NButton
              v-bind="mergedProps(item)"
              :btn="`~ block ${item.btn || itemDefaults?.btn || 'text'}`"
              :class="[
                una?.accordionButton,
              ]"
              :leading="item.leading || itemDefaults?.leading"
              :trailing="item.trailing || itemDefaults?.trailing || 'accordion-trailing-icon group-data-[state=closed]:rotate-180'"
              :una="{
                btn: 'h-auto accordion-button',
                btnLabel: 'accordion-label',
                btnLeading: cn('accordion-leading', una?.accordionLeading),
                btnTrailing: cn('accordion-trailing', una?.accordionTrailing),
              }"
            />
          </slot>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent
        class="accordion-content"
      >
        <slot
          :name="item.content ? 'content' : i"
          :item="item" :index="i" :open="open"
        >
          <div
            accordion="panel"
            :class="[
              una?.accordionPanel,
            ]"
          >
            {{ item.content }}
          </div>
        </slot>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>

<style scoped>
.accordion-content[data-state='open'] {
  animation: accordionIn 300ms cubic-bezier(0.86, 0, 0.07, 1);
}
.accordion-content[data-state='closed'] {
  animation: accordionOut 300ms cubic-bezier(0.86, 0, 0.07, 1);
}
@keyframes accordionIn {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}
@keyframes accordionOut {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
