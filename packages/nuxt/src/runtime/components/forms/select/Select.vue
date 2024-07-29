<script setup lang="ts">
import { computed } from 'vue'
import type { SelectRootEmits } from 'radix-vue'
import {
  useForwardPropsEmits,
} from 'radix-vue'
import type { NSelectProps } from '../../../types'
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
    v-bind="forwarded"
  >
    <SelectTrigger
      v-bind="forwarded.selectTrigger"
    >
      <slot name="selectTrigger">
        <SelectValue
          v-bind="forwarded.selectValue"
          :placeholder="forwarded.selectValue?.placeholder || forwarded.placeholder"
        />
      </slot>
    </SelectTrigger>

    <SelectContent
      v-bind="forwarded.selectContent"
    >
      <slot name="selectContent">
        <template v-if="!multipleGroup">
          <SelectGroup
            v-bind="forwarded.selectGroup"
          >
            <slot name="selectGroup" :items="items">
              <SelectLabel
                v-if="forwarded.label"
                v-bind="forwarded.selectLabel"
              >
                <slot name="selectLabel" :label="forwarded.label">
                  {{ forwarded.label }}
                </slot>
              </SelectLabel>

              <template
                v-for="item in items"
                :key="item"
              >
                <SelectItem
                  :value="item"
                  v-bind="forwarded.selectItem"
                >
                  <slot name="selectItem" :item="item">
                    {{ item }}
                  </slot>
                </SelectItem>
              </template>
            </slot>
          </SelectGroup>
        </template>

        <template
          v-else
        >
          <SelectGroup
            v-for="(groupItems, i) in items"
            :key="i"
            v-bind="forwarded.selectGroup"
          >
            <SelectSeparator
              v-if="i > 0"
            />

            <slot name="selectGroup" :items="groupItems">
              <SelectLabel
                v-if="groupItems.label"
                v-bind="{ ...forwarded.selectLabel, ...groupItems.selectLabel }"
              >
                <slot name="selectLabel" :label="groupItems.label">
                  {{ groupItems.label }}
                </slot>
              </SelectLabel>

              <template
                v-for="groupItem in groupItems.items"
                :key="groupItem"
              >
                <SelectItem
                  :value="groupItem"
                  v-bind="{ ...forwarded.selectItem, ...groupItems.selectItem }"
                >
                  <slot name="selectItem" :item="groupItem">
                    {{ groupItem }}
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
