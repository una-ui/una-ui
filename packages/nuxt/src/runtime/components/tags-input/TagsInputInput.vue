<script setup lang="ts">
import type { TagsInputInputProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { TagsInputInput, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'

const props = defineProps<TagsInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputInput
    v-bind="forwardedProps"
    :class="cn('text-sm min-h-5 focus:outline-none flex-1 bg-transparent px-1', props.class)"
  />
</template>
