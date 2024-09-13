<script setup lang="ts">
import type { NSelectScrollDownButtonProps } from '../../../types'
import { SelectScrollDownButton, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = defineProps<NSelectScrollDownButtonProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectScrollDownButton v-bind="forwardedProps" :class="cn('select-scroll-down-button', props.class)">
    <slot>
      <Icon
        :name="forwardedProps?.una?.selectScrollDownButtonIcon || 'select-scroll-down-button-icon'"
      />
    </slot>
  </SelectScrollDownButton>
</template>
