<script setup lang="ts">
import type { NAccordionItemProps } from '../../../types/accordion'
import { reactiveOmit } from '@vueuse/core'
import { AccordionItem, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'
import NAccordionContent from './AccordionContent.vue'
import NAccordionHeader from './AccordionHeader.vue'
import NAccordionTrigger from './AccordionTrigger.vue'

const props = defineProps<NAccordionItemProps>()
const forwardProps = useForwardProps(reactiveOmit(props, ['una']))
</script>

<template>
  <AccordionItem
    v-slot="{ open }"
    v-bind="forwardProps"
    :class="cn('accordion-item', una?.accordionItem)"
  >
    <slot>
      <NAccordionHeader v-bind="_accordionHeader" :una>
        <slot name="header" :open>
          <NAccordionTrigger v-bind="_accordionTrigger" :una :label>
            <slot name="trigger" :open />
          </NAccordionTrigger>
        </slot>
      </NAccordionHeader>
      <NAccordionContent v-bind="_accordionContent" :una>
        <slot name="content" :open>
          {{ content }}
        </slot>
      </NAccordionContent>
    </slot>
  </AccordionItem>
</template>
