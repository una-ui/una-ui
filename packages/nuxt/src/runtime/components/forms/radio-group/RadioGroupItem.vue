<script setup lang="ts">
import type { NRadioGroupItemProps } from '../../../types'
import { reactivePick } from '@vueuse/core'
import {
  RadioGroupIndicator,
  RadioGroupItem,
  useForwardProps,
} from 'radix-vue'
import { computed } from 'vue'
import { cn, randomId } from '../../../utils'
import Icon from '../../elements/Icon.vue'
import Label from '../../elements/Label.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NRadioGroupItemProps>(), {
  icon: 'radio-group-icon',
  radioGroup: 'primary',
})

const id = computed(() => props.id ?? randomId('radio-group'))

const delegatedProps = reactivePick(props, [
  'as',
  'asChild',
  'disabled',
  'id',
  'name',
  'required',
  'value',
])

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  {{ radioGroup }}
  <div
    class="radio-group-item-wrapper"
    :radio-group="radioGroup"
  >
    <RadioGroupItem
      v-bind="forwardedProps"
      :id
      :class="
        cn(
          'radio-group-item',
          props.class,
        )
      "
    >
      <RadioGroupIndicator
        class="radio-group-indicator"
      >
        <slot name="icon">
          <Icon :name="icon" class="radio-group-icon-base" />
        </slot>
      </RadioGroupIndicator>
    </RadioGroupItem>

    <slot name="label">
      <Label
        v-if="props.label"
        :for="props.id ?? id"
      >
        {{ label }}
      </Label>
    </slot>
  </div>
</template>
