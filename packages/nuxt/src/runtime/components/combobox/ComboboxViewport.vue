<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { NComboboxViewportProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxViewport, useForwardProps } from 'reka-ui'
import { useTemplateRef } from 'vue'
import { cn } from '../../utils'

const props = defineProps<NComboboxViewportProps>()
const delegatedProps = reactiveOmit(props, ['class'])

const forwarded = useForwardProps(delegatedProps)

const viewportRef = useTemplateRef<ComponentPublicInstance>('viewportRef')
defineExpose({
  viewportRef,
})
</script>

<template>
  <ComboboxViewport
    v-bind="forwarded"
    ref="viewportRef"
    data-slot="combobox-viewport"
    :class="cn(
      'combobox-viewport',
      props.una?.comboboxViewport,
      props.class,
    )"
  >
    <slot />
  </ComboboxViewport>
</template>
