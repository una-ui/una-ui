<script setup lang="ts">
import type { SelectContentEmits } from 'reka-ui'
import type { NSelectContentProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  SelectContent,
  SelectPortal,
  SelectViewport,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '../../../utils'
import SelectScrollDownButton from './SelectScrollDownButton.vue'

import SelectScrollUpButton from './SelectScrollUpButton.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<NSelectContentProps>(),
  {
    position: 'popper',
  },
)
const emits = defineEmits<SelectContentEmits>()
const delegatedProps = reactiveOmit(props, ['class'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'select-content',
        position === 'popper'
          && 'select-content-popper',
        props.class,
      )
      "
    >
      <SelectScrollUpButton
        v-bind="_selectScrollUpButton"
      />
      <SelectViewport
        :class="cn(
          'select-viewport',
          position === 'popper' && 'select-viewport-popper')
        "
      >
        <slot />
      </SelectViewport>
      <SelectScrollDownButton
        v-bind="_selectScrollDownButton"
      />
    </SelectContent>
  </SelectPortal>
</template>
