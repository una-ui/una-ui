<script setup lang="ts">
import type { TabsRootEmits } from 'reka-ui'
import type { NTabsProps } from '../../../types/tabs'
import { reactiveOmit } from '@vueuse/core'
import { useForwardPropsEmits } from 'reka-ui'
import TabsContent from './TabsContent.vue'
import TabsList from './TabsList.vue'
import TabsRoot from './TabsRoot.vue'
import TabsTrigger from './TabsTrigger.vue'

const props = defineProps<NTabsProps>()
const emits = defineEmits<TabsRootEmits>()

const delegatedProps = reactiveOmit(props, ['class', 'items', 'tabs', 'disabled', 'size'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TabsRoot
    v-bind="forwarded"
    :default-value="defaultValue"
  >
    <TabsList v-bind="forwarded._tabsList">
      <slot name="list" :items="items">
        <template
          v-for="item in items"
          :key="item.value"
        >
          <TabsTrigger
            :tabs="item?._tabsTrigger?.tabs || item.tabs || props.tabs"
            :disabled="item?._tabsTrigger?.disabled || item.disabled || props.disabled"
            :value="item.value"
            :size="item?._tabsTrigger?.size ?? props.size"
            v-bind="{ ...forwarded._tabsTrigger, ...item?._tabsTrigger }"
          >
            <slot name="trigger" :item="item" :disabled="item?._tabsTrigger?.disabled || item.disabled || props.disabled">
              {{ item.name }}
            </slot>
          </TabsTrigger>
        </template>
      </slot>
    </TabsList>
    <template
      v-for="item in items"
      :key="item.value"
    >
      <TabsContent v-bind="forwarded._tabsContent" :value="item.value">
        <slot name="content" :item="item">
          <component :is="typeof item.content === 'string' ? 'span' : item.content">
            {{ typeof item.content === 'string' ? item.content : '' }}
          </component>
        </slot>
      </TabsContent>
    </template>
  </TabsRoot>
</template>
