<script setup lang="ts">
import { computed } from 'vue'
import { useForwardPropsEmits } from 'radix-vue'
import type { TabsRootEmits } from 'radix-vue'
import { omitProps } from '../../../utils'
import type { NTabsProps } from '../../../types/tabs'
import TabsRoot from './TabsRoot.vue'
import TabsList from './TabsList.vue'
import TabsTrigger from './TabsTrigger.vue'
import TabsContent from './TabsContent.vue'

const props = defineProps<NTabsProps>()
const emits = defineEmits<TabsRootEmits>()

defineSlots<{
  list: () => any
  trigger: (props: { item: any }) => any
  content: (props: { item: any }) => any
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TabsRoot
    v-bind="omitProps(forwarded, ['items', 'tabs'])"
    :default-value="defaultValue ?? items[0].value"
  >
    <TabsList v-bind="forwarded._tabsList">
      <slot name="list">
        <template
          v-for="trigger in items"
          :key="trigger.value"
        >
          <TabsTrigger
            :tabs="trigger?._tabsTrigger?.tabs || tabs"
            :value="trigger.value"
            v-bind="{ ...forwarded._tabsTrigger, ...trigger?._tabsTrigger }"
          >
            <slot name="trigger" :item="trigger">
              {{ trigger.name }}
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
