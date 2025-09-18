<script setup lang="ts">
import type { NAccordionTriggerProps } from '../../../types/accordion'
import { reactiveOmit } from '@vueuse/core'
import { AccordionTrigger, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NAccordionTriggerProps>()
const forwardProps = useForwardProps(reactiveOmit(props, ['una', 'btn']))
</script>

<template>
  <AccordionTrigger
    :class="cn('accordion-trigger group/accordion-trigger', una?.accordionTrigger)"
    :btn="btn || '~ text'"
    v-bind="forwardProps"
    as-child
    :una="{
      ...una,
      btn: cn('accordion-button', una?.btn),
    }"
  >
    <slot>
      <NButton trailing="accordion-trailing-icon" />
    </slot>
  </AccordionTrigger>
</template>
