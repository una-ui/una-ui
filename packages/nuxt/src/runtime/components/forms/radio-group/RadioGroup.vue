<script setup lang="ts">
import { RadioGroupRoot, type RadioGroupRootEmits, type RadioGroupRootProps, useForwardPropsEmits } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<RadioGroupRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<RadioGroupRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <RadioGroupRoot
    :class="cn(
      'radio-group',
      orientation === 'horizontal' ? 'radio-group-orientation-horizontal' : 'radio-group-orientation-vertical',
      props.class,
    )"
    v-bind="forwarded"
  >
    <slot />
  </RadioGroupRoot>
</template>
