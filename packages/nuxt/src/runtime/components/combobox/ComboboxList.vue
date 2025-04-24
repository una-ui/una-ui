<script setup lang="ts">
import type { ComboboxContentEmits } from 'reka-ui'
import type { NComboboxListProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxContent, ComboboxPortal, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NComboboxListProps>(), {
  position: 'popper',
  align: 'center',
  sideOffset: 4,
})
const emits = defineEmits<ComboboxContentEmits>()

const delegatedProps = reactiveOmit(props, 'class', 'viewportClass')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxPortal>
    <ComboboxContent
      data-slot="combobox-list"
      v-bind="forwarded"
      :class="cn(
        'origin-(--reka-combobox-content-transform-origin)',
        'combobox-content',
        props.class,
      )"
    >
      <slot />
    </ComboboxContent>
  </ComboboxPortal>
</template>
