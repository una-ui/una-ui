<script setup lang="ts">
import type { NAccordionHeaderProps } from '../../../types/accordion'
import { reactiveOmit } from '@vueuse/core'
import { AccordionHeader, useForwardProps } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NAccordionHeaderProps>()
const forwardProps = useForwardProps(reactiveOmit(props, ['una']))
</script>

<template>
  <AccordionHeader v-bind="forwardProps" :class="cn('accordion-header', una?.accordionHeader)">
    <slot />
  </AccordionHeader>
</template>
