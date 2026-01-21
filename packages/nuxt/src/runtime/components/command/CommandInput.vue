<script setup lang="ts">
import type { NCommandInputProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ListboxFilter, useForwardProps } from 'reka-ui'
import { useCommand } from '../../composables/useCommand'
import { cn } from '../../utils'
import Icon from '../elements/Icon.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NCommandInputProps>(), {
  icon: 'i-lucide-search',
  placeholder: 'Type a command or search...',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const { filterState } = useCommand()
</script>

<template>
  <div class="command-input-wrapper" cmdk-input-wrapper>
    <Icon class="command-icon" :name="props.icon" />
    <ListboxFilter
      v-bind="{ ...forwardedProps, ...$attrs }"
      v-model="filterState.search"
      auto-focus
      :class="cn('command-input', props.class)"
    />
  </div>
</template>
