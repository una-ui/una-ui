<script setup lang="ts">
import type { NSelectContentProps } from '../../../types'
import {
  SelectContent,
  type SelectContentEmits,
  SelectPortal,
  SelectViewport,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'
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
        v-bind="_selectScrollUpButton"
      />
      <SelectViewport
        :class="cn(
          'select-viewport',
          position === 'popper' && 'select-viewport-popper')"
      >
        <slot />
      </SelectViewport>
      <SelectScrollDownButton
        v-bind="_selectScrollDownButton"
      />
    </SelectContent>
  </SelectPortal>
</template>
