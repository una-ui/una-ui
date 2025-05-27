<script setup lang="ts">
import type { NComboboxViewportProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxViewport, useForwardProps } from 'reka-ui'

import { cn } from '../../utils'

const props = defineProps<NComboboxViewportProps>()
const delegatedProps = reactiveOmit(props, ['class'])

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxViewport
    data-slot="combobox-viewport"
    v-bind="forwarded"
    :class="cn(
      'combobox-viewport',
      props.una?.comboboxViewport,
      props.class,
    )"
  >
    <slot />
  </ComboboxViewport>
</template>
