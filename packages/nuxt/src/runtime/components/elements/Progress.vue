<script setup lang="ts">
import { computed } from 'vue'
import {
  ProgressIndicator,
  ProgressRoot,
} from 'radix-vue'
import { cn } from '../../utils'
import type { NProgressProps } from '../../types'

const props = withDefaults(
  defineProps<NProgressProps>(),
  {
    modelValue: 0,
  },
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ProgressRoot
    v-bind="delegatedProps"
    :class="
      cn(
        'progress-root',
        props.una?.progressRoot,
        props.class,
      )
    "
  >
    <slot>
      <ProgressIndicator
        :class="cn(
          'progress-indicator',
          props.una?.progressIndicator,
        )"
        :style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
      />
    </slot>
  </ProgressRoot>
</template>
