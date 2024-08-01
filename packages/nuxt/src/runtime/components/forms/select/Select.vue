<script setup lang="ts">
import { computed } from 'vue'
import type { SelectRootEmits } from 'radix-vue'
import {
  useForwardPropsEmits,
} from 'radix-vue'
import type { NSelectProps } from '../../../types'
import { omitProps } from '../../../utils'
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
</script>

<template>
  <SelectRoot
    v-bind="omitProps(forwarded, ['items', 'multipleGroup', 'itemAttribute', 'placeholder', 'label'])"
  >
    <SelectTrigger
      v-bind="forwarded._selectTrigger"
    >
      <slot name="trigger">
        <SelectValue
          v-bind="forwarded._selectValue"
          :placeholder="forwarded._selectValue?.placeholder || forwarded.placeholder"
        />
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
              :value="props.itemAttribute ? item[props.itemAttribute] : item"
              v-bind="forwarded._selectItem"
            >
              <slot name="item" :item="item">
                {{ props.itemAttribute ? item[props.itemAttribute] : item }}
              </slot>
            </SelectItem>
          </template>
        </template>

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
                  :value="props.itemAttribute ? groupItem[props.itemAttribute] : groupItem "
                  v-bind="{ ...forwarded._selectItem, ...groupItems?._selectItem, ...groupItem._selectItem }"
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
