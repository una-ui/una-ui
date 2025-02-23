<script lang="ts">
import type { AcceptableValue, RadioGroupRootEmits } from 'reka-ui'
import type { NRadioGroupItemProps, NRadioGroupProps } from '../../../types'
</script>

<script setup lang="ts" generic="T extends AcceptableValue">
import { reactivePick } from '@vueuse/core'
import { RadioGroupRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../../utils'
import RadioGroupItem from './RadioGroupItem.vue'

const props = withDefaults(defineProps<NRadioGroupProps<T>>(), {
  radioGroup: 'primary',
  size: 'md',
  square: '1em',
})

const emits = defineEmits<RadioGroupRootEmits>()

const rootProps = reactivePick(props, [
  'modelValue',
  'defaultValue',
  'disabled',
  'required',
  'loop',
])
const forwarded = useForwardPropsEmits(rootProps, emits)

function isRadioGroupItem(item: any): item is NRadioGroupItemProps {
  return typeof item === 'object' && item !== null && 'value' in item
}

function isObjectWithKey<K extends PropertyKey>(item: unknown, key: K): item is Record<K, unknown> {
  return typeof item === 'object' && item !== null && key in item
}

function getItemValue(item: NonNullable<T | NRadioGroupItemProps>): string {
  if (props.valueKey && isObjectWithKey(item, props.valueKey))
    return String(item[props.valueKey])

  if (isRadioGroupItem(item))
    return String(item.value)

  return String(item)
}

function getItemLabel(item: NonNullable<T | NRadioGroupItemProps>): string {
  if (props.labelKey && isObjectWithKey(item, props.labelKey))
    return String(item[props.labelKey])

  if (isRadioGroupItem(item) && item.label)
    return String(item.label)

  return ''
}

function getItemDescription(item: NonNullable<T | NRadioGroupItemProps>): string | undefined {
  if (props.descriptionKey && isObjectWithKey(item, props.descriptionKey))
    return String(item[props.descriptionKey])

  if (isRadioGroupItem(item) && item.description)
    return String(item.description)

  return undefined
}
</script>

<template>
  <RadioGroupRoot
    :class="cn(
      'radio-group',
      orientation === 'horizontal' ? 'radio-group-orientation-horizontal' : 'radio-group-orientation-vertical',
      una?.radioGroup,
      props.class,
    )"
    v-bind="forwarded"
  >
    <slot>
      <template v-if="items?.length">
        <RadioGroupItem
          v-for="item in items"
          :key="getItemValue(item!)"
          v-bind="{ rounded, icon, size, square, radioGroup, ...(item as NRadioGroupItemProps) }"
          :una="{ ...una, ...(isRadioGroupItem(item!) && item!.una) }"
          :value="getItemValue(item!)"
        >
          <slot
            name="label"
            :item
          >
            {{ getItemLabel(item!) }}
          </slot>

          <template #description>
            <slot
              name="description"
              :item
            >
              {{ getItemDescription(item!) }}
            </slot>
          </template>
        </RadioGroupItem>
      </template>
    </slot>
  </RadioGroupRoot>
</template>
