<script setup lang="ts">
import type { TabsRootEmits } from 'reka-ui'
import type { NTabsProps } from '../../../types/tabs'
import { reactiveOmit } from '@vueuse/core'
import { TabsRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../../utils'
import TabsContent from './TabsContent.vue'
import TabsList from './TabsList.vue'
import TabsTrigger from './TabsTrigger.vue'

const props = withDefaults(defineProps<NTabsProps>(), {
  size: 'sm',
})
const emits = defineEmits<TabsRootEmits>()

const delegatedProps = reactiveOmit(props, ['class', 'items', 'tabsActive', 'tabsInactive', 'disabled', 'size', 'una'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TabsRoot
    v-bind="forwarded"
    :class="cn(
      'tabs',
      props.una?.tabs,
      props.class,
    )"
  >
    <slot>
      <TabsList
        v-bind="forwarded._tabsList"
        :una
        :size
      >
        <slot name="list" :items="items">
          <template
            v-for="item in items"
            :key="item.value"
          >
            <TabsTrigger
              :tabs-active="item?._tabsTrigger?.tabsActive || item.tabsActive || props.tabsActive"
              :tabs-inactive="item?._tabsTrigger?.tabsInactive || item.tabsInactive || props.tabsInactive"
              :disabled="item?._tabsTrigger?.disabled || item.disabled || props.disabled"
              :value="item.value"
              :size
              v-bind="{ ...forwarded._tabsTrigger, ...item?._tabsTrigger }"
              :una
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
        <TabsContent
          v-bind="forwarded._tabsContent"
          :value="item.value"
          :una
        >
          <slot name="content" :item="item">
            <component :is="typeof item.content === 'string' ? 'span' : item.content">
              {{ typeof item.content === 'string' ? item.content : '' }}
            </component>
          </slot>
        </TabsContent>
      </template>
    </slot>
  </TabsRoot>
</template>
