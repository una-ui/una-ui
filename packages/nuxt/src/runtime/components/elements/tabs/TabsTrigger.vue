<script setup lang="ts">
import type { NTabsTriggerProps } from '../../../types/tabs'
import { TabsTrigger } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
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
