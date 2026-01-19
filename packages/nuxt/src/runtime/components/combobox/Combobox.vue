<script lang="ts">
import type { AcceptableValue, ComboboxRootEmits } from 'reka-ui'
import type { ExtractItemType, NComboboxGroupProps, NComboboxProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { defu } from 'defu'
import { ComboboxRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils'
</script>

<script setup lang="ts" generic="T extends AcceptableValue, M extends boolean = false">
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

const props = withDefaults(defineProps<NComboboxProps<T, M>>(), {
  textEmpty: 'No items found.',
  size: 'sm',
  labelKey: 'label',
  valueKey: 'value',
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

// Display function that handles both single and multiple selections
function getDisplayValue(val: unknown): string {
  // Handle empty values (only null/undefined)
  if (val == null || (Array.isArray(val) && val.length === 0))
    return ''

  // Handle multiple selection (array values)
  if (Array.isArray(val)) {
    return val
      .map((v) => {
        // For primitive values (string/number/boolean), convert to string
        if (typeof v !== 'object' || v === null) {
          return String(v)
        }
        // For objects, try to get the label
        return getItemProperty(v, props.labelKey as string) || getItemProperty(v, props.valueKey as string) || ''
      })
      .filter(v => v !== null && v !== undefined)
      .join(', ')
  }

  // For single primitive value (preserve 0, false, '')
  if (typeof val !== 'object' || val === null) {
    return String(val)
  }

  // For single object, get its label
  return getItemProperty(val as any, props.labelKey as string) || getItemProperty(val as any, props.valueKey as string) || ''
}

// Check if an item is selected in the current modelValue
function isItemSelected(item: ExtractItemType<T> | null | undefined): boolean {
  if (item == null || !props.modelValue)
    return false

  // For primitive items (strings/numbers)
  if (typeof item !== 'object') {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue.includes(item as any)
    }
    return props.modelValue === item
  }

  // For object items, compare by valueKey
  const itemValue = getItemProperty(item, props.valueKey as string)

  // For multiple selection
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.some((v: any) => {
      if (typeof v !== 'object' || v === null) {
        return v === itemValue
      }
      return getItemProperty(v as ExtractItemType<T>, props.valueKey as string) === itemValue
    })
  }

  // For single selection
  if (typeof props.modelValue !== 'object' || props.modelValue === null) {
    return props.modelValue === itemValue
  }

  return getItemProperty(props.modelValue as ExtractItemType<T>, props.valueKey as string) === itemValue
}
</script>

<template>
  <ComboboxRoot
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
                :class="cn(
                  'text-1em',
                  props._comboboxInput?.class,
                )"
                :una="defu(props._comboboxInput?.una, {
                  inputLeading: 'text-1.1428571428571428em',
                  inputTrailing: 'text-1.1428571428571428em',
                  inputStatusIconBase: 'text-1.1428571428571428em',
                })"
                :size
                v-bind="props._comboboxInput"
              />
            </slot>
          </template>
        </slot>
      </ComboboxAnchor>

      <ComboboxList
        v-bind="{ ...props._comboboxList, ...props._comboboxContent }"
        :_combobox-portal
        :size
        :una
      >
        <slot name="list">
          <slot name="input-wrapper" :model-value :open>
            <ComboboxInput
              v-if="$slots.trigger || $slots.triggerRoot"
              :class="cn(
                'border-0 border-b-1 rounded-none text-1em focus-visible:ring-0',
                props._comboboxInput?.class,
              )"
              leading="combobox-input-leading-icon"
              :una="defu(props._comboboxInput?.una, {
                inputLeading: 'text-1.1428571428571428em',
                inputTrailing: 'text-1.1428571428571428em',
                inputStatusIconBase: 'text-1.1428571428571428em',
              })"
              :size
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
                :class="cn(
                  props._comboboxEmpty?.class,
                )"
                :size
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
                      :key="getItemProperty(item, props.valueKey as string)"
                      :value="item"
                      :size
                      v-bind="props._comboboxItem"
                      :class="cn(
                        props._comboboxItem?.class,
                      )"
                      :una
                    >
                      <slot name="item" :item="item" :selected="isItemSelected(item)">
                        <slot name="label" :item="item">
                          {{ getItemProperty(item, props.labelKey as string) }}
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
                      :key="getItemProperty(item, props.valueKey as string)"
                      :value="item"
                      :size
                      v-bind="{ ...props._comboboxItem, ...group._comboboxItem }"
                      :class="cn(
                        props._comboboxItem?.class,
                      )"
                      :una
                    >
                      <slot name="item" :item="item" :group="group" :selected="isItemSelected(item)">
                        <slot name="label" :item="item">
                          {{ getItemProperty(item, props.labelKey as string) }}
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
