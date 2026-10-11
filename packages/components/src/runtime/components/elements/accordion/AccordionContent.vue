<script setup lang="ts">
import type { NAccordionContentProps } from '../../../types/accordion'
import { reactiveOmit } from '@vueuse/core'
import { AccordionContent, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NAccordionContentProps>()
const forwardProps = useForwardProps(reactiveOmit(props, ['una']))
</script>

<template>
  <AccordionContent v-bind="forwardProps" :class="cn('accordion-content group/accordion-content', una?.accordionContent)">
    <div :class="cn('accordion-panel', una?.accordionPanel)">
      <slot />
    </div>
  </AccordionContent>
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
