<script setup lang="ts">
import type { AccordionRootEmits } from 'reka-ui'

import type { NAccordionProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
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
    v-bind="rootProps"
    :class="cn(
      'accordion accordion-(divider border)',
      una?.accordion,
    )"
  >
    <slot>
      <NAccordionItem v-for="(item, i) in items" :key="i" v-bind="item" />
    </slot>
  </AccordionRoot>
</template>
