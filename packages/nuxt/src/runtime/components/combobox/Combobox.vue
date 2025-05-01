<script lang="ts">
import type { AcceptableValue, ComboboxRootEmits } from 'reka-ui'
import type { ExtractItemType, NComboboxGroupProps, NComboboxProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
</script>

<script setup lang="ts" generic="T extends AcceptableValue">
import { computed } from 'vue'
import ComboboxAnchor from './ComboboxAnchor.vue'
import ComboboxEmpty from './ComboboxEmpty.vue'
import ComboboxGroup from './ComboboxGroup.vue'
import ComboboxInput from './ComboboxInput.vue'
import ComboboxItem from './ComboboxItem.vue'
import ComboboxItemIndicator from './ComboboxItemIndicator.vue'
import ComboboxList from './ComboboxList.vue'
import ComboboxSeparator from './ComboboxSeparator.vue'
import ComboboxTrigger from './ComboboxTrigger.vue'
import ComboboxViewport from './ComboboxViewport.vue'

const props = withDefaults(defineProps<NComboboxProps<T>>(), {
  textEmpty: 'No items found.',
  size: 'md',
})
const emits = defineEmits<ComboboxRootEmits<ExtractItemType<T>>>()

const rootProps = reactiveOmit(props, [
  'items',
  'una',
  'size',
  'label',
  'labelKey',
  'valueKey',
  'groupSeparator',
  'textEmpty',
  '_comboboxAnchor',
  '_comboboxEmpty',
  '_comboboxGroup',
  '_comboboxInput',
  '_comboboxItem',
  '_comboboxItemIndicator',
  '_comboboxLabel',
  '_comboboxList',
  '_comboboxSeparator',
  '_comboboxTrigger',
  '_comboboxViewport',
  '_comboboxCheckbox',
])

const forwarded = useForwardPropsEmits(rootProps, emits)

const labelKey = computed(() => props.labelKey?.toString() ?? 'label')
const valueKey = computed(() => props.valueKey?.toString() ?? 'value')

// Check if items are grouped
const hasGroups = computed(() => {
  return Array.isArray(props.items) && props.items.length > 0
    && typeof props.items[0] === 'object' && 'items' in (props.items[0] as any)
})

// Helper function to safely get a property from an item
function getItemProperty<K extends string>(item: ExtractItemType<T> | null | undefined, key: K): any {
  if (item == null)
    return ''

  return typeof item !== 'object' ? item : (item as Record<K, unknown>)[key]
}

// Find a matching item from the items list by its value
function findItemByValue(value: unknown): ExtractItemType<T> | undefined {
  if (!props.items)
    return undefined

  if (hasGroups.value) {
    // Search in grouped items
    for (const group of props.items as NComboboxGroupProps<ExtractItemType<T>>[]) {
      const found = group.items?.find(item => getItemProperty(item, valueKey.value) === value)
      if (found)
        return found
    }
    return undefined
  }
  else {
    // Search in flat items list
    return (props.items as ExtractItemType<T>[]).find(item => getItemProperty(item, valueKey.value) === value)
  }
}

// Display function that handles both single and multiple selections
function getDisplayValue(val: unknown): string {
  // Handle empty values
  if (!val || (Array.isArray(val) && val.length === 0))
    return ''

  // Handle multiple selection (array values)
  if (props.multiple && Array.isArray(val)) {
    return val.map((v) => {
      // For primitive values (string/number), find matching item to get label
      if (typeof v !== 'object' || v === null) {
        const item = findItemByValue(v)
        return item ? getItemProperty(item, labelKey.value) : v
      }

      // For objects, try to get the label directly
      return getItemProperty(v, labelKey.value) || getItemProperty(v, valueKey.value) || ''
    }).filter(Boolean).join(', ')
  }

  // For single primitive value
  if (typeof val !== 'object' || val === null) {
    const item = findItemByValue(val)
    return item ? getItemProperty(item, labelKey.value) : String(val || '')
  }

  // For single object, get its label
  return getItemProperty(val as any, labelKey.value) || getItemProperty(val as any, valueKey.value) || ''
}

// Check if an item is selected in the current modelValue
function isItemSelected(item: ExtractItemType<T> | null | undefined): boolean {
  if (item == null)
    return false

  const itemValue = getItemProperty(item, valueKey.value)

  // For multiple selection
  if (props.multiple && Array.isArray(props.modelValue)) {
    return props.modelValue.includes(itemValue)
  }

  // For single selection
  return typeof props.modelValue === 'object' && props.modelValue !== null
    ? getItemProperty(props.modelValue as ExtractItemType<T>, valueKey.value) === itemValue
    : props.modelValue === itemValue
}
</script>

<template>
  <ComboboxRoot
    v-slot="{ modelValue, open }"
    data-slot="combobox"
    :class="cn(
      'combobox',
      props.una?.combobox,
      props.class,
    )"
    v-bind="forwarded"
  >
    <slot>
      <ComboboxAnchor
        v-bind="props._comboboxAnchor"
        :una
      >
        <slot name="anchor">
          <template
            v-if="$slots.trigger || $slots.triggerRoot"
          >
            <slot name="trigger-wrapper">
              <ComboboxTrigger
                v-bind="props._comboboxTrigger"
                :id
                :status
                :class="cn(
                  'text-0.875em',
                  props._comboboxTrigger?.class,
                )"
                :size
              >
                <slot name="trigger" :model-value :open />
              </ComboboxTrigger>
            </slot>
          </template>

          <template v-else>
            <slot name="input-wrapper" :model-value :open>
              <ComboboxInput
                :id
                :display-value="(val: unknown) => getDisplayValue(val)"
                name="frameworks"
                :status
                :size
                v-bind="props._comboboxInput"
              />
            </slot>
          </template>
        </slot>
      </ComboboxAnchor>

      <ComboboxList
        v-bind="props._comboboxList"
        :_comboboxPortal
        :size
        :una
      >
        <slot name="list">
          <slot name="input-wrapper" :model-value :open>
            <ComboboxInput
              v-if="$slots.trigger || $slots.triggerRoot"
              :size
              :class="cn(
                'border-0 border-b-1 rounded-none focus-visible:ring-0',
                props._comboboxInput?.class,
              )"
              v-bind="props._comboboxInput"
            />
          </slot>

          <slot name="header" />

          <slot name="body">
            <ComboboxViewport
              v-bind="props._comboboxViewport"
              :una
            >
              <ComboboxEmpty
                v-bind="props._comboboxEmpty"
                :una
              >
                <slot name="empty">
                  {{ props.textEmpty }}
                </slot>
              </ComboboxEmpty>

              <!-- Non-grouped items -->
              <template v-if="!hasGroups">
                <ComboboxGroup
                  v-bind="props._comboboxGroup"
                  :label="props.label"
                  :una
                >
                  <slot name="group">
                    <ComboboxItem
                      v-for="item in items as ExtractItemType<T>[]"
                      :key="getItemProperty(item, valueKey)"
                      :value="props.multiple ? getItemProperty(item, valueKey) : item"
                      :size
                      v-bind="props._comboboxItem"
                      :class="cn(
                        'text-0.875em',
                        props._comboboxItem?.class,
                      )"
                      :una
                    >
                      <slot name="item" :item="item" :selected="isItemSelected(item)">
                        <slot name="label" :item="item">
                          {{ getItemProperty(item, labelKey) }}
                        </slot>

                        <ComboboxItemIndicator
                          v-bind="props._comboboxItemIndicator"
                          :una
                        >
                          <slot name="item-indicator" :item="item">
                            <NIcon name="i-lucide-check" />
                          </slot>
                        </ComboboxItemIndicator>
                      </slot>
                    </ComboboxItem>
                  </slot>
                </ComboboxGroup>
              </template>

              <!-- Grouped items -->
              <template v-else>
                <ComboboxGroup
                  v-for="(group, i) in items as NComboboxGroupProps<ExtractItemType<T>>[]"
                  :key="i"
                  v-bind="props._comboboxGroup"
                  :label="group.label"
                  :una
                >
                  <ComboboxSeparator
                    v-if="i > 0 && props.groupSeparator"
                    v-bind="props._comboboxSeparator"
                    :una
                  />

                  <slot name="group" :group="group">
                    <ComboboxItem
                      v-for="item in group.items"
                      :key="getItemProperty(item, valueKey)"
                      :value="props.multiple ? getItemProperty(item, valueKey) : item"
                      :size
                      v-bind="{ ...props._comboboxItem, ...group._comboboxItem }"
                      :class="cn(
                        'text-0.875em',
                        props._comboboxItem?.class,
                      )"
                      :una
                    >
                      <slot name="item" :item="item" :group="group" :selected="isItemSelected(item)">
                        <slot name="label" :item="item">
                          {{ getItemProperty(item, labelKey) }}
                        </slot>

                        <ComboboxItemIndicator
                          v-bind="props._comboboxItemIndicator"
                          :una
                        >
                          <slot name="indicator" :item="item" />
                        </ComboboxItemIndicator>
                      </slot>
                    </ComboboxItem>
                  </slot>
                </ComboboxGroup>
              </template>
            </ComboboxViewport>
          </slot>

          <slot name="footer" />
        </slot>
      </ComboboxList>
    </slot>
  </ComboboxRoot>
</template>
