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
    data-slot="radio-group-item"
    :class="cn(
      'radio-group-item',
      una?.radioGroupItemRoot,
    )"
    :size
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
            'peer radio-group-item-button',
            una?.radioGroupItem,
            props.class,
          )
        "
        :square
        :rounded
      >
        <RadioGroupIndicator
          data-slot="radio-group-indicator"
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

    <div
      v-if="props.label || $slots.default || description || $slots.description"
      :class="cn(
        'radio-group-item-content',
        // una?.radioGroupItemContent,
      )"
    >
      <Label
        v-if="props.label || $slots.default"
        :for="props.id ?? id"
        :class="cn(
          'radio-group-item-label',
          una?.radioGroupItemLabel,
        )"
      >
        <slot>
          {{ label }}
        </slot>
      </Label>

      <p
        v-if="description || $slots.description"
        :class="cn(
          'radio-group-item-description',
          una?.radioGroupItemDescription,
        )"
      >
        <slot name="description">
          {{ description }}
        </slot>
      </p>
    </div>
  </div>
</template>
