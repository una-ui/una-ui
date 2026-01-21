<script setup lang="ts">
import type { NCommandSeparatorProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { Separator } from 'reka-ui'
import { cn } from '../../utils'

const props = defineProps<NCommandSeparatorProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="cn('command-separator', props.class)"
  >
    <slot />
  </Separator>
</template>
