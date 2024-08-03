<script setup lang="ts">
import { computed } from 'vue'
import {
  SelectContent,
  type SelectContentEmits,
  SelectPortal,
  SelectViewport,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '../../../utils'
import type { NSelectContentProps } from '../../../types'
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

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

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
