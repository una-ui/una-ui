<script setup lang="ts">
import type { ComboboxRootEmits } from 'reka-ui'
import type { NCombobox } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxRoot, useForwardPropsEmits } from 'reka-ui'
import Checkbox from '../forms/Checkbox.vue'
import ComboboxAnchor from './ComboboxAnchor.vue'
import ComboboxEmpty from './ComboboxEmpty.vue'
import ComboboxGroup from './ComboboxGroup.vue'
import ComboboxInput from './ComboboxInput.vue'
import ComboboxItem from './ComboboxItem.vue'
import ComboboxItemIndicator from './ComboboxItemIndicator.vue'
import ComboboxList from './ComboboxList.vue'
import ComboboxTrigger from './ComboboxTrigger.vue'

const props = defineProps<NCombobox>()
const emits = defineEmits<ComboboxRootEmits>()

const rootProps = reactiveOmit(props, 'class', 'items', '_comboboxAnchor', '_comboboxEmpty', '_comboboxGroup', '_comboboxInput', '_comboboxItem', '_comboboxItemIndicator', '_comboboxList', '_comboboxSeparator', '_comboboxTrigger', '_comboboxViewport')

const forwarded = useForwardPropsEmits(rootProps, emits)
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
            :display-value="(val) => multiple ? val?.map((item) => item.label).join(', ') : val?.label"
            name="frameworks"
            v-bind="props._comboboxInput"
          />
        </slot>
      </ComboboxAnchor>

      <ComboboxList>
        <slot name="list">
          <ComboboxInput
            v-if="$slots.trigger"
            class="border-0 border-b-1 rounded-none focus-visible:ring-0"
            :as-child="!!$slots.input"
            v-bind="props._comboboxInput"
          >
            <slot name="input" />
          </ComboboxInput>

          <ComboboxEmpty>
            <slot name="empty">
              No items found.
            </slot>
          </ComboboxEmpty>

          <ComboboxGroup>
            <slot name="group">
              <ComboboxItem
                v-for="item in items"
                :key="item.value"
                :value="item"
              >
                <slot name="item" :item="item">
                  <template
                    v-if="multiple"
                  >
                    <slot name="item-checkbox" :item="item">
                      <Checkbox
                        :data-selected="Array.isArray(modelValue) && modelValue.some(
                          (i) => i.value === item.value,
                        )"
                        :model-value="Array.isArray(modelValue) && modelValue.some(
                          (i) => i.value === item.value,
                        )"
                      />
                    </slot>

                    <slot name="item-label" :item="item">
                      {{ item.label }}
                    </slot>
                  </template>

                  <template v-else>
                    <slot name="item-label" :item="item">
                      {{ item.label }}
                    </slot>

                    <ComboboxItemIndicator>
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
      </ComboboxList>
    </slot>
  </ComboboxRoot>
</template>
