<script setup lang="ts">
import type { NCommandListProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ListboxContent, useForwardProps } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NCommandListProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <ListboxContent v-bind="forwarded" :class="cn('command-list', props.class)">
    <div role="presentation">
      <slot />
    </div>
  </ListboxContent>
</template>
