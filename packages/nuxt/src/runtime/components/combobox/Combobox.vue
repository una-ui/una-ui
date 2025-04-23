<script lang="ts">
import type { AcceptableValue, ComboboxRootEmits } from 'reka-ui'
</script>

<script setup lang="ts" generic="T extends AcceptableValue">
import type { NComboboxProps } from '../../types'
import { ComboboxRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import Checkbox from '../forms/Checkbox.vue'
import ComboboxAnchor from './ComboboxAnchor.vue'
import ComboboxEmpty from './ComboboxEmpty.vue'
import ComboboxGroup from './ComboboxGroup.vue'
import ComboboxInput from './ComboboxInput.vue'
import ComboboxItem from './ComboboxItem.vue'
import ComboboxItemIndicator from './ComboboxItemIndicator.vue'
import ComboboxList from './ComboboxList.vue'
import ComboboxTrigger from './ComboboxTrigger.vue'

const props = withDefaults(defineProps<NComboboxProps<T>>(), {})
const emits = defineEmits<ComboboxRootEmits<T>>()

const forwarded = useForwardPropsEmits(props, emits)

const labelKey = computed(() => props.labelKey?.toString() ?? 'label')
const valueKey = computed(() => props.valueKey?.toString() ?? 'value')

// Helper function to safely get a property from an item
function getItemProperty(item: T | null | undefined, key: string): any {
  if (item == null)
    return ''

  // Handle primitive values (string/number)
  if (typeof item !== 'object')
    return item

  // Only access properties on objects
  return (item as Record<string, any>)[key]
}

// Safe display value function - supports both object and primitive values
function getDisplayValue(val: any) {
  if (val == null)
    return ''

  // If multiple selection with array values
  if (props.multiple && Array.isArray(val)) {
    // Check if these are primitive values or objects
    if (val.length > 0 && (typeof val[0] === 'string' || typeof val[0] === 'number')) {
      // If values are primitives, find matching items to display labels
      return val.map((v) => {
        const matchingItem = props.items?.find(item => getItemProperty(item, valueKey.value) === v)
        return matchingItem ? getItemProperty(matchingItem, labelKey.value) : v
      }).join(', ')
    }

    // Otherwise process as objects
    return val.map(item => getItemProperty(item, labelKey.value)).join(', ')
  }

  // Check if val is a primitive (string/number)
  if (typeof val === 'string' || typeof val === 'number') {
    // Find matching item to display its label
    const matchingItem = props.items?.find(item => getItemProperty(item, valueKey.value) === val)
    return matchingItem ? getItemProperty(matchingItem, labelKey.value) : val
  }

  // Process as object
  return getItemProperty(val as T, labelKey.value)
}

function isItemSelected(item: T | null | undefined): boolean {
  if (item == null)
    return false

  const itemValue = getItemProperty(item, valueKey.value)

  if (props.multiple) {
    if (Array.isArray(props.modelValue)) {
      // For array of objects
      if (props.modelValue.length > 0 && typeof props.modelValue[0] === 'object') {
        return props.modelValue.some(i => i && getItemProperty(i, valueKey.value) === itemValue)
      }
      // For array of primitives
      return props.modelValue.includes(itemValue)
    }
  }
  else {
    // For single object
    if (typeof props.modelValue === 'object' && props.modelValue !== null) {
      return getItemProperty(props.modelValue as T, valueKey.value) === itemValue
    }
    // For primitive value
    return props.modelValue === itemValue
  }

  return false
}
</script>

<template>
  <ComboboxRoot
    data-slot="combobox"
    v-bind="forwarded"
  >
    <slot>
      <ComboboxAnchor
        v-bind="props._comboboxAnchor"
      >
        <slot name="anchor">
          <ComboboxTrigger
            v-if="$slots.trigger"
            as-child
            v-bind="props._comboboxTrigger"
          >
            <slot name="trigger" />
          </ComboboxTrigger>

          <ComboboxInput
            v-else
            :display-value="getDisplayValue"
            name="frameworks"
            v-bind="props._comboboxInput"
          />
        </slot>
      </ComboboxAnchor>

      <ComboboxList
        v-bind="props._comboboxList"
      >
        <slot name="list">
          <slot name="list-header" />

          <slot name="list-body">
            <ComboboxInput
              v-if="$slots.trigger"
              class="border-0 border-b-1 rounded-none focus-visible:ring-0"
              :as-child="!!$slots.input"
              v-bind="props._comboboxInput"
            >
              <slot name="input" />
            </ComboboxInput>

            <ComboboxEmpty
              v-bind="props._comboboxEmpty"
            >
              <slot name="empty">
                No items found.
              </slot>
            </ComboboxEmpty>

            <ComboboxGroup
              v-bind="props._comboboxGroup"
            >
              <slot name="group">
                <ComboboxItem
                  v-for="item in items"
                  :key="getItemProperty(item, valueKey)"
                  :value="getItemProperty(item, valueKey)"
                  v-bind="props._comboboxItem"
                >
                  <slot name="item" :item="item">
                    <template
                      v-if="multiple"
                    >
                      <slot name="item-checkbox" :item="item">
                        <Checkbox
                          v-bind="props._comboboxCheckbox"
                          class="data-[state=indeterminate]:bg-transparent data-[state=unchecked]:bg-transparent"
                          :data-selected="isItemSelected(item)"
                          tabindex="-1"
                          :model-value="isItemSelected(item)"
                        />
                      </slot>

                      <slot name="item-label" :item="item">
                        {{ getItemProperty(item, labelKey) }}
                      </slot>
                    </template>

                    <template v-else>
                      <slot name="item-label" :item="item">
                        {{ getItemProperty(item, labelKey) }}
                      </slot>

                      <ComboboxItemIndicator
                        v-bind="props._comboboxItemIndicator"
                      >
                        <slot name="item-indicator" :item="item">
                          <NIcon name="i-lucide-check" />
                        </slot>
                      </ComboboxItemIndicator>
                    </template>
                  </slot>
                </ComboboxItem>
              </slot>
            </ComboboxGroup>
          </slot>

          <slot name="list-footer" />
        </slot>
      </ComboboxList>
    </slot>
  </ComboboxRoot>
</template>
