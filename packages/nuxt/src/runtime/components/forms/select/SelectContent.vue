<script setup lang="ts">
import type { NSelectContentProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  SelectContent,
  type SelectContentEmits,
  SelectPortal,
  SelectViewport,
  useForwardPropsEmits,
} from 'radix-vue'
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

const delegatedProps = reactiveOmit(props, ['class', 'dataAnimate'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn(
        'select-content',
        position === 'popper'
          && 'select-content-popper',
        props.class,
      )
      "
      :data-animate
    >
      <SelectScrollUpButton
        v-bind="forwarded._selectScrollUpButton"
      />
      <SelectViewport
        :class="cn(
          'select-viewport',
          position === 'popper' && 'select-viewport-popper')"
        v-bind="forwarded._selectViewport"
      >
        <slot />
      </SelectViewport>
      <SelectScrollDownButton
        v-bind="forwarded._selectScrollDownButton"
      />
    </SelectContent>
  </SelectPortal>
</template>
