<script setup lang="ts">
import type { CheckboxGroupRootEmits, CheckboxGroupRootProps } from 'reka-ui'
import type { NCheckboxProps } from '../types'
import { reactiveOmit } from '@vueuse/core'
import { CheckboxGroupRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { getValue, randomId } from '../utils'
import Checkbox from './forms/Checkbox.vue'

const props = withDefaults(defineProps<CheckboxGroupRootProps & {
  valueKey?: string
  labelKey?: string
  descriptionKey?: string
  items: NCheckboxProps[]
}>(), {
  valueKey: 'value',
  labelKey: 'label',
  descriptionKey: 'description',
})
const emits = defineEmits<CheckboxGroupRootEmits>()

const rootProps = reactiveOmit(props, ['items'])

const forwarded = useForwardPropsEmits(rootProps, emits)

const id = randomId('checkbox-group')

function normalizeItem(item: any) {
  if (item === null) {
    return {
      id: `${id}:null`,
      value: undefined,
      label: undefined,
    }
  }

  if (typeof item === 'string' || typeof item === 'number') {
    return {
      id: `${id}:${item}`,
      value: String(item),
      label: String(item),
      description: String(item),
    }
  }

  const value = getValue(item, props.valueKey as string)
  const label = getValue(item, props.labelKey as string)
  const description = getValue(item, props.descriptionKey as string)

  return {
    ...item,
    value,
    label,
    description,
    id: `${id}:${value}`,
  }
}

const normalizedItems = computed(() => {
  if (!props.items) {
    return []
  }
  return props.items.map(normalizeItem)
})
</script>

<template>
  <CheckboxGroupRoot
    v-slot="{ ...slotProps }"
    class="flex flex-col gap-2.5"
    v-bind="forwarded"
  >
    <slot v-bind="slotProps">
      <Checkbox
        v-for="item in normalizedItems"
        :key="item.value"
        v-bind="item"
      />
    </slot>
  </CheckboxGroupRoot>
</template>
