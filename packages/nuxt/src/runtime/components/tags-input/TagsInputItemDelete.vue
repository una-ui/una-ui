<script setup lang="ts">
import type { TagsInputItemDeleteProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { TagsInputItemDelete, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'
import Icon from '../elements/Icon.vue'

const props = defineProps<TagsInputItemDeleteProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemDelete v-bind="forwardedProps" :class="cn('flex rounded bg-transparent mr-1', props.class)">
    <slot>
      <Icon
        name="i-close"
        class="h-4 w-4"
      />
    </slot>
  </TagsInputItemDelete>
</template>
