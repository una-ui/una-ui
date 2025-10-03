<script lang="ts">
import type { AcceptableValue, SelectRootEmits } from 'reka-ui'
import type { NSelectProps, SelectGroup as SelectGroupType } from '../../../types'
import { computed } from 'vue'
</script>

<script setup lang="ts" generic="T extends AcceptableValue, I extends Array<T | SelectGroupType<T>>, M extends boolean = false">
import { SelectRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../../utils'
import SelectContent from './SelectContent.vue'
import SelectGroup from './SelectGroup.vue'
import SelectItem from './SelectItem.vue'
import SelectLabel from './SelectLabel.vue'
import SelectSeparator from './SelectSeparator.vue'
import SelectTrigger from './SelectTrigger.vue'
import SelectValue from './SelectValue.vue'

const props = withDefaults(defineProps<NSelectProps<T, I, M>>(), {
  size: 'sm',
})

const emits = defineEmits<SelectRootEmits<T>>()

// Check if items are grouped
const hasGroups = computed(() => {
  return Array.isArray(props.items) && props.items.length > 0
    && typeof props.items[0] === 'object' && 'items' in (props.items[0] as any)
})

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
</script>

<template>
  <SelectRoot
    :class="cn(
      props.una?.select,
      props.class,
    )"
    v-bind="forwarded"
  >
    <slot :model-value :open>
      <slot name="trigger-wrapper" :model-value :open>
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
          <template v-if="!hasGroups">
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

          <template v-if="hasGroups">
            <SelectGroup
              v-for="(group, i) in items as SelectGroupType<T>[]"
              :key="i"
              v-bind="props._selectGroup"
              :una
            >
              <SelectSeparator
                v-if="i > 0 && props.groupSeparator"
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
        </slot>
      </SelectContent>
    </slot>
  </SelectRoot>
</template>
