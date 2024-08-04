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

const props = defineProps<NSelectProps>()
const emits = defineEmits<SelectRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
const forwarded = useForwardPropsEmits(delegatedProps, emits)

const transformerValue = computed(() => {
  if (typeof forwarded.value.modelValue === 'object') {
    if (forwarded.value.valueAttribute)
      return forwarded.value.modelValue[forwarded.value.valueAttribute]

    if (forwarded.value.itemAttribute)
      return forwarded.value.modelValue[forwarded.value.itemAttribute]
  }

  return forwarded.value.modelValue
})

provide('selectModelValue', forwarded.value.modelValue)
</script>

<template>
  <SelectRoot
    v-bind="omitProps(forwarded, ['items', 'multipleGroup', 'itemAttribute', 'placeholder', 'label', 'id'])"
  >
    <SelectTrigger
      :id="forwarded.id"
      v-bind="forwarded._selectTrigger"
    >
      <slot name="trigger" :value="forwarded.modelValue">
        <SelectValue
          v-bind="forwarded._selectValue"
          :placeholder="forwarded._selectValue?.placeholder || forwarded.placeholder"
        >
          <slot :value="forwarded.modelValue">
            {{ transformerValue }}
          </slot>
        </SelectValue>
      </slot>
    </SelectTrigger>

    <SelectContent
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
              v-bind="forwarded._selectItem"
              :is-selected="isEqualObject(item, forwarded.modelValue)"
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
