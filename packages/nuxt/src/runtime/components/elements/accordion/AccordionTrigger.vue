<script setup lang="ts">
import type { NAccordionTriggerProps } from '../../../types/accordion'
import { reactiveOmit } from '@vueuse/core'
import { AccordionTrigger, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

const props = withDefaults(defineProps<NAccordionTriggerProps>(), {
  btn: '~ text',
  trailing: 'accordion-trailing-icon',
})
const forwardProps = useForwardProps(reactiveOmit(props, ['una']))
</script>

<template>
  <AccordionTrigger
    class="group/accordion-trigger accordion-trigger"
    v-bind="forwardProps"
    as-child
    :una="{
      ...una,
      btn: cn('accordion-button', una?.btn),
      btnLabel: cn('accordion-button-label', una?.btnLabel),
    }"
  >
    <slot>
      <NButton />
    </slot>
  </AccordionTrigger>
</template>
