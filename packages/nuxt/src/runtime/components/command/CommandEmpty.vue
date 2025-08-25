<script setup lang="ts">
import type { NCommandEmptyProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import { useCommand } from '../../composables/useCommand'
import { cn } from '../../utils'

const props = defineProps<NCommandEmptyProps>()

const delegatedProps = reactiveOmit(props, 'class')

const { filterState } = useCommand()
const isRender = computed(() => !!filterState.search && filterState.filtered.count === 0,
)
</script>

<template>
  <Primitive v-if="isRender" v-bind="delegatedProps" :class="cn('command-empty', props.class)">
    <slot />
  </Primitive>
</template>
