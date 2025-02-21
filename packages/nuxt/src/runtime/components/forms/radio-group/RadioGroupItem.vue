<script setup lang="ts">
import type { NRadioGroupItemProps } from '../../../types'
import { reactivePick } from '@vueuse/core'
import {
  RadioGroupIndicator,
  RadioGroupItem,
  useForwardProps,
} from 'reka-ui'
import { cn, randomId } from '../../../utils'
import Icon from '../../elements/Icon.vue'
import Label from '../../elements/Label.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NRadioGroupItemProps>(), {
  icon: 'radio-group-indicator-icon',
  radioGroup: 'primary',
  size: 'md',
  square: '1em',
})

const id = props.id || randomId('radio-group')

const delegatedProps = reactivePick(props, [
  'as',
  'disabled',
  'id',
  'name',
  'required',
  'value',
])

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div
    :class="cn(
      'radio-group-item-wrapper',
      una?.radioGroupItemWrapper,
    )"
    :radio-group="radioGroup"
  >
    <RadioGroupItem
      as-child
      v-bind="forwardedProps"
    >
      <button
        :id
        :class="
          cn(
            'radio-group-item',
            una?.radioGroupItem,
            props.class,
          )
        "
        :square
        :size
        :rounded
      >
        <RadioGroupIndicator
          :class="cn(
            'radio-group-indicator',
            una?.radioGroupIndicator,
          )"
        >
          <slot name="icon">
            <Icon
              :name="icon"
              :class="cn(
                'radio-group-indicator-icon-base',
                una?.radioGroupIndicatorIcon,
              )"
            />
          </slot>
        </RadioGroupIndicator>
      </button>
    </RadioGroupItem>

    <slot name="label">
      <Label
        v-if="props.label"
        :for="props.id ?? id"
        :class="cn(
          'radio-group-item-label',
          una?.radioGroupItemLabel,
        )"
      >
        {{ label }}
      </Label>
    </slot>
  </div>
</template>
