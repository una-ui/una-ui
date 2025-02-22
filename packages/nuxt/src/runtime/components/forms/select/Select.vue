<script lang="ts">
import type { AcceptableValue, SelectRootEmits } from 'reka-ui'
import type { NSelectProps, SelectGroup as SelectGroupType } from '../../../types'
</script>

<script setup lang="ts" generic="T extends AcceptableValue">
import { reactivePick } from '@vueuse/core'
import {
  useForwardPropsEmits,
} from 'reka-ui'
import { isEqualObject } from '../../../utils'
import SelectContent from './SelectContent.vue'
import SelectGroup from './SelectGroup.vue'
import SelectItem from './SelectItem.vue'
import SelectLabel from './SelectLabel.vue'
import SelectRoot from './SelectRoot.vue'
import SelectSeparator from './SelectSeparator.vue'
import SelectTrigger from './SelectTrigger.vue'
import SelectValue from './SelectValue.vue'

const props = withDefaults(defineProps<NSelectProps<T>>(), {
  size: 'sm',
})

const emits = defineEmits<SelectRootEmits>()

const rootProps = reactivePick(props, [
  'items',
  'modelValue',
  'groupItems',
  'itemAttribute',
  'placeholder',
  'label',
  'id',
  'select',
  'defaultValue',
  'multiple',
])
const forwarded = useForwardPropsEmits(rootProps, emits)

function formatSelectedValue(value: typeof props.modelValue) {
  if (!value)
    return ''

  if (props.multiple && Array.isArray(value)) {
    return value.map((val) => {
      if (props.valueAttribute && typeof val === 'object') {
        return (val as Record<string, any>)[props.valueAttribute as string]
      }
      return val
    }).join(', ')
  }

  if (props.valueAttribute && typeof value === 'object') {
    return (value as Record<string, any>)[props.valueAttribute as string]
  }

  return value
}
</script>

<template>
  <SelectRoot
    v-bind="forwarded"
  >
    <SelectTrigger
      :id
      :size
      :status
      :select
      v-bind="props._selectTrigger"
    >
      <slot name="trigger" :value="modelValue">
        <SelectValue
          :placeholder="props.placeholder"
          v-bind="props._selectValue"
        >
          <slot name="value" :value="props.modelValue">
            {{ formatSelectedValue(modelValue) }}
          </slot>
        </SelectValue>
      </slot>
    </SelectTrigger>

    <SelectContent
      :size
      v-bind="{
        ...forwarded._selectContent,
        _selectScrollDownButton: forwarded._selectScrollDownButton,
        _selectScrollUpButton: forwarded._selectScrollUpButton,
        _selectViewport: forwarded._selectViewport,
      }"
    >
      <slot name="content" :items="forwarded.items">
        <!--  single-group -->
        <template v-if="!groupItems">
          <SelectLabel
            v-if="forwarded.label"
            v-bind="forwarded._selectLabel"
          >
            <slot name="label" :label="forwarded.label">
              {{ forwarded.label }}
            </slot>
          </SelectLabel>

          <template
            v-for="item in items"
            :key="item"
          >
            <SelectItem
              :value="item"
              :size="size"
              v-bind="props._selectItem"
              :is-selected="multiple
                ? Array.isArray(modelValue) && modelValue.some(val => isEqualObject(val as Record<string, any>, item as Record<string, any>))
                : isEqualObject(item as Record<string, any>, modelValue as Record<string, any>)"
            >
              <slot name="item" :item="item">
                {{ props.itemAttribute && item ? (item as any)[props.itemAttribute] : item }}
              </slot>
            </SelectItem>
          </template>
        </template>

        <!-- multiple-group -->
        <template v-if="groupItems">
          <SelectGroup
            v-for="(group, i) in items as unknown as SelectGroupType<T>[]"
            :key="i"
            v-bind="props._selectGroup"
          >
            <SelectSeparator
              v-if="i > 0"
              v-bind="props._selectSeparator"
            />

            <slot name="group" :items="group">
              <SelectLabel
                v-if="group.label"
                :size="size"
                v-bind="{ ...props._selectLabel, ...group._selectLabel }"
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
                  :size="size"
                  v-bind="{ ...forwarded._selectItem, ...group._selectItem }"
                  :is-selected="multiple
                    ? Array.isArray(modelValue) && modelValue.some(val => isEqualObject(val as Record<string, any>, item as Record<string, any>))
                    : isEqualObject(item as Record<string, any>, modelValue as Record<string, any>)"
                >
                  <slot name="item" :item="item">
                    {{ props.itemAttribute ? (item as any)[props.itemAttribute] : item }}
                  </slot>
                </SelectItem>
              </template>
            </slot>
          </SelectGroup>
        </template>
        <slot />
      </slot>
    </SelectContent>
  </SelectRoot>
</template>
