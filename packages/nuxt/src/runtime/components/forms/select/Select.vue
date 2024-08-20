<script setup lang="ts">
import { computed, provide } from 'vue'
import type { SelectRootEmits } from 'radix-vue'
import {
  useForwardPropsEmits,
} from 'radix-vue'
import type { NSelectProps } from '../../../types'
import { isEqualObject, omitProps } from '../../../utils'
import SelectRoot from './SelectRoot.vue'
import SelectTrigger from './SelectTrigger.vue'
import SelectGroup from './SelectGroup.vue'
import SelectItem from './SelectItem.vue'
import SelectLabel from './SelectLabel.vue'
import SelectContent from './SelectContent.vue'
import SelectValue from './SelectValue.vue'
import SelectSeparator from './SelectSeparator.vue'

const props = withDefaults(defineProps<NSelectProps>(), {
  size: 'sm',
})

const emits = defineEmits<SelectRootEmits>()

const modelValue = defineModel<any>('modelValue')

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
const forwarded = useForwardPropsEmits(delegatedProps, emits)

const transformerValue = computed(() => {
  if (typeof modelValue.value === 'object') {
    if (forwarded.value.valueAttribute)
      return modelValue.value[forwarded.value.valueAttribute]

    if (forwarded.value.itemAttribute)
      return modelValue.value[forwarded.value.itemAttribute]
  }

  return modelValue.value
})

provide('selectModelValue', modelValue)
</script>

<template>
  <SelectRoot
    v-bind="omitProps(forwarded, ['items', 'multipleGroup', 'itemAttribute', 'placeholder', 'label', 'id', 'select'])"
    :model-value="transformerValue"
  >
    <SelectTrigger
      :id
      :size
      :status
      :select
      v-bind="forwarded._selectTrigger"
    >
      <slot name="trigger" :value="modelValue">
        <SelectValue
          v-bind="forwarded._selectValue"
          :placeholder="forwarded._selectValue?.placeholder || forwarded.placeholder"
        >
          <slot :value="modelValue">
            {{ transformerValue }}
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
        <template v-if="!forwarded.multipleGroup">
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
              :size
              :select-item
              v-bind="{ ...props._selectItem, ...item._selectItem }"
              :is-selected="isEqualObject(item, modelValue)"
            >
              <slot name="item" :item="item">
                {{ props.itemAttribute ? item[props.itemAttribute] : item }}
              </slot>
            </SelectItem>
          </template>
        </template>

        <!-- multiple-group -->
        <template
          v-else
        >
          <SelectGroup
            v-for="(groupItems, i) in items"
            :key="i"
            v-bind="forwarded._selectGroup"
          >
            <SelectSeparator
              v-if="i > 0"
              v-bind="forwarded._selectSeparator"
            />

            <slot name="group" :items="groupItems">
              <SelectLabel
                v-if="groupItems.label"
                :size="forwarded.size"
                v-bind="{ ...forwarded._selectLabel, ...groupItems._selectLabel }"
              >
                <slot name="label" :label="groupItems.label">
                  {{ groupItems.label }}
                </slot>
              </SelectLabel>

              <template
                v-for="groupItem in groupItems.items"
                :key="groupItem"
              >
                <SelectItem
                  :value="groupItem "
                  :size="forwarded.size"
                  v-bind="{ ...forwarded._selectItem, ...groupItems?._selectItem, ...groupItem._selectItem }"
                  :is-selected="groupItem === transformerValue"
                >
                  <slot name="item" :item="groupItem">
                    {{ props.itemAttribute ? groupItem[props.itemAttribute] : groupItem }}
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
