<script setup lang="ts">
import { computed } from 'vue'
import { SelectScrollDownButton, useForwardProps } from 'radix-vue'
import Icon from '../../elements/Icon.vue'
import { cn } from '../../../utils'
import type { NSelectScrollDownButtonProps } from '../../../types'

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
        :name="forwardedProps?.una?.selectScrollDownButtonIconName || 'select-scroll-down-button-icon'"
        :class="forwardedProps?.una?.selectScrollDownButtonIcon"
      />
    </slot>
  </SelectScrollDownButton>
</template>
