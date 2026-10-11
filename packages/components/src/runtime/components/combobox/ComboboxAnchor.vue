<script setup lang="ts">
import type { NComboboxAnchorProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxAnchor, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NComboboxAnchorProps>()

const delegatedProps = reactiveOmit(props, ['class'])

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ComboboxAnchor
    data-slot="combobox-anchor"
    v-bind="forwarded"
    :class="cn(
      'combobox-anchor',
      props.una?.comboboxAnchor,
      props.class,
    )"
  >
    <slot />
  </ComboboxAnchor>
</template>
