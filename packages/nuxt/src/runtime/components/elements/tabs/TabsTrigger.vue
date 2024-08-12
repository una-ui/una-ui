<script setup lang="ts">
import { computed } from 'vue'
import { TabsTrigger } from 'radix-vue'
import { cn } from '../../../utils'
import type { NTabsTriggerProps } from '../../../types/tabs'
import Button from '../Button.vue'

const props = defineProps<NTabsTriggerProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsTrigger
    v-bind="delegatedProps"
    :class="cn(
      'tabs-trigger',
      props.class,
    )"
    :una="{
      ...props.una,
      btnDefaultVariant: props.tabs ? `tabs-${props.tabs}` : 'tabs-default-variant',
    }"
    :as="Button"
  >
    <slot />
  </TabsTrigger>
</template>
