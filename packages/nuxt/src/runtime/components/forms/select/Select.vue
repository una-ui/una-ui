<script lang="ts">
import type { AcceptableValue, SelectRootEmits } from 'reka-ui'
import type { NSelectProps, SelectGroup as SelectGroupType } from '../../../types'
</script>

<script setup lang="ts" generic="T extends AcceptableValue">
import { SelectRoot, useForwardPropsEmits } from 'reka-ui'
import { cn, isEqualObject } from '../../../utils'
import SelectContent from './SelectContent.vue'
import SelectGroup from './SelectGroup.vue'
import SelectItem from './SelectItem.vue'
import SelectLabel from './SelectLabel.vue'
import SelectSeparator from './SelectSeparator.vue'
import SelectTrigger from './SelectTrigger.vue'
import SelectValue from './SelectValue.vue'

const props = withDefaults(defineProps<NSelectProps<T>>(), {
  size: 'sm',
})

const emits = defineEmits<SelectRootEmits<T>>()

const forwarded = useForwardPropsEmits(props, emits)

function formatSelectedValue(value: unknown) {
  if (!value || (Array.isArray(value) && value.length === 0))
    return null

  if (props.multiple && Array.isArray(value)) {
    return value.map((val) => {
      if (props.valueKey && typeof val === 'object') {
        return (val as Record<string, any>)[props.valueKey as string]
      }
      return val
    }).join(', ')
  }

  if (props.valueKey && typeof value === 'object') {
    return (value as Record<string, any>)[props.valueKey as string]
  }

  return value
}

function isItemSelected(item: unknown, modelValue: unknown) {
  if (!modelValue)
    return false

  if (props.multiple && Array.isArray(modelValue)) {
    return modelValue.some((val) => {
      const valObj = typeof val === 'object' && val ? val : { value: val }
      const itemObj = typeof item === 'object' && item ? item : { value: item }
      return isEqualObject(valObj, itemObj)
    })
  }

  const modelObj = typeof modelValue === 'object' && modelValue ? modelValue : { value: modelValue }
  const itemObj = typeof item === 'object' && item ? item : { value: item }
  return isEqualObject(modelObj, itemObj)
}
</script>

<template>
  <SelectRoot
    v-slot="{ modelValue, open }"
    :class="cn(
      props.una?.select,
      props.class,
    )"
    v-bind="forwarded"
  >
    <slot :model-value :open>
      <slot name="trigger-root" :model-value :open>
        <SelectTrigger
          :id
          :size
          :status
          :select
          v-bind="props._selectTrigger"
          :una
        >
          <slot name="trigger" :model-value :open="open">
            <SelectValue
              :placeholder="props.placeholder"
              v-bind="props._selectValue"
              :aria-label="formatSelectedValue(modelValue)"
              :data-status="status"
              :una
            >
              <slot name="value" :model-value :open>
                {{ formatSelectedValue(modelValue) || props.placeholder }}
              </slot>
            </SelectValue>
          </slot>
        </SelectTrigger>
      </slot>

      <SelectContent
        :size
        v-bind="{
          ..._selectContent,
          _selectScrollDownButton,
          _selectScrollUpButton,
        }"
        :una
      >
        <slot name="content" :items="items">
          <template v-if="!group">
            <SelectLabel
              v-if="label"
              v-bind="_selectLabel"
              :una
            >
              <slot name="label" :label>
                {{ label }}
              </slot>
            </SelectLabel>

            <template
              v-for="item in items"
              :key="item"
            >
              <SelectItem
                :value="item"
                :size
                :select-item
                v-bind="props._selectItem"
                :is-selected="isItemSelected(item, modelValue)"
                :una
              >
                <slot name="item" :item="item">
                  {{ props.itemKey && item ? (item as any)[props.itemKey] : item }}
                </slot>
                <template #indicator>
                  <slot name="indicator" :item="item" />
                </template>
              </SelectItem>
            </template>
          </template>

          <template v-if="group">
            <SelectGroup
              v-for="(group, i) in items as SelectGroupType<T>[]"
              :key="i"
              v-bind="props._selectGroup"
              :una
            >
              <SelectSeparator
                v-if="i > 0"
                v-bind="props._selectSeparator"
                :una
              />

              <slot name="group" :items="group">
                <SelectLabel
                  v-if="group.label"
                  :size
                  v-bind="{ ...props._selectLabel, ...group._selectLabel }"
                  :una
                >
                  <slot name="label" :label="group.label">
                    {{ group.label }}
                  </slot>
                </SelectLabel>

                <template
                  v-for="item in group.items"
                  :key="item"
                >
                  <SelectItem
                    :value="item"
                    :size
                    :select-item
                    v-bind="{ ..._selectItem, ...group._selectItem }"
                    :is-selected="isItemSelected(item, modelValue)"
                    :una
                  >
                    <slot name="item" :item="item">
                      {{ props.itemKey ? (item as any)[props.itemKey] : item }}
                    </slot>
                    <template #indicator>
                      <slot name="indicator" :item="item" />
                    </template>
                  </SelectItem>
                </template>
              </slot>
            </SelectGroup>
          </template>
          <slot />
        </slot>
      </SelectContent>
    </slot>
  </SelectRoot>
</template>
