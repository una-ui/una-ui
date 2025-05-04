<script setup lang="ts">
import type { NProgressProps } from '../../types'
import {
  ProgressIndicator,
  ProgressRoot,
} from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = withDefaults(
  defineProps<NProgressProps>(),
  {
    progress: 'primary',
    rounded: 'full',
  },
)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ProgressRoot
    v-slot="{ modelValue }"
    v-bind="delegatedProps"
    :class="
      cn(
        'progress-root',
        props.una?.progressRoot,
        props.class,
      )
    "
    :rounded
    :progress
  >
    <slot :model-value>
      <ProgressIndicator
        v-if="modelValue !== undefined || modelValue === null"
        :class="cn(
          'progress-indicator',
          props.una?.progressIndicator,
        )"
        :style="`transform: translateX(-${100 - (modelValue ?? 0)}%);`"
      />
      <template
        v-else
      >
        <ProgressIndicator
          :class="cn(
            'increase progress-indeterminate',
            props.una?.progressIndicator,
          )"
        />
        <ProgressIndicator
          :class="cn(
            'decrease progress-indeterminate',
            props.una?.progressIndicator,
          )"
        />
      </template>
    </slot>
  </ProgressRoot>
</template>

<style scoped>
.increase.progress-indeterminate {
  animation: progress-indeterminate-increase 2s ease-in-out infinite;
}

.decrease.progress-indeterminate {
  animation: progress-indeterminate-decrease 2s 0.5s ease-in-out infinite;
}

@keyframes progress-indeterminate-decrease {
  0% {
    left: -90%;
    width: 90%;
  }

  100% {
    left: 110%;
    width: 10%;
  }
}

@keyframes progress-indeterminate-increase {
  0% {
    left: -5%;
    width: 5%;
  }

  100% {
    left: 130%;
    width: 150%;
  }
}
</style>
