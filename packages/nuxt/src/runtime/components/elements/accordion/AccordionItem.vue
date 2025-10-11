<script setup lang="ts">
import type { NAccordionItemProps } from '../../../types/accordion'
import { reactiveOmit } from '@vueuse/core'
import { AccordionItem, Primitive, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'
import NAccordionContent from './AccordionContent.vue'
import NAccordionHeader from './AccordionHeader.vue'
import NAccordionTrigger from './AccordionTrigger.vue'

const props = defineProps<NAccordionItemProps>()
const forwardProps = useForwardProps(reactiveOmit(props, ['una', 'label', 'content', '_accordionContent', '_accordionHeader', '_accordionTrigger']))
</script>

<template>
  <AccordionItem
    v-slot="{ open }"
    v-bind="forwardProps"
    :class="cn('accordion-item', una?.accordionItem)"
  >
    <slot :open>
      <NAccordionHeader :una v-bind="_accordionHeader">
        <Primitive
          as-child
          :label
          v-bind="_accordionTrigger"
          :una="{
            btnLeading: cn('accordion-leading', una?.accordionLeading),
            btnTrailing: cn(
              'accordion-trailing',
              una?.accordionTrailing,
              open ? una?.accordionTrailingOpen : una?.accordionTrailingClose,
            ),
          }"
        >
          <slot name="header" :open>
            <NAccordionTrigger>
              <slot name="trigger" :open />
            </NAccordionTrigger>
          </slot>
        </Primitive>
      </NAccordionHeader>
      <NAccordionContent :una v-bind="_accordionContent">
        <slot name="content" :open>
          {{ content }}
        </slot>
      </NAccordionContent>
    </slot>
  </AccordionItem>
</template>
