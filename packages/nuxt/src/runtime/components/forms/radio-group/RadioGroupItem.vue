<script setup lang="ts">
import {
  RadioGroupIndicator,
  RadioGroupItem,
  type RadioGroupItemProps,
  useForwardProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = defineProps<RadioGroupItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="
      cn(
        'radio-group-item',
        props.class,
      )
    "
  >
    <RadioGroupIndicator class="radio-group-indicator">
      <Icon name="radio-group-icon" class="radio-group-icon-base" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
