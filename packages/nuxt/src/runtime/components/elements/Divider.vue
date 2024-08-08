<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { cn } from '../../utils'
import type { NDividerProps } from '../../types'

const props = withDefaults(defineProps<NDividerProps>(), {
  direction: 'horizontal',
  type: 'solid',
})

const slots = useSlots()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const directionClass = computed(() => {
  return props.direction === 'horizontal' ? 'divider-horizontal' : 'divider-vertical'
})
const typeBorderStyle = computed(() => {
  const borderTypes = {
    dashed: 'divider-type-dashed',
    dotted: 'divider-type-dotted',
    solid: 'divider-type-solid',
  }
  return borderTypes[props.type]
})

type AlignHorizontal = 'left' | 'right' | 'center'
type AlignVertical = 'top' | 'bottom' | 'center'

interface AlignMap {
  horizontal: Record<AlignHorizontal, string>
  vertical: Record<AlignVertical, string>
}

const defaultAlignVariant = 'divider-position-center'

const alignVariant = computed(() => {
  const alignMap: AlignMap = {
    horizontal: {
      left: 'divider-position-left',
      right: 'divider-position-right',
      center: 'divider-position-center',
    },
    vertical: {
      top: 'divider-position-top',
      bottom: 'divider-position-bottom',
      center: 'divider-position-center',
    },
  }

  // I think it might be easier, but we need to prevent user errors.

  if (props.direction === 'horizontal')
    return alignMap.horizontal[props.align as AlignHorizontal] || defaultAlignVariant
  else
    return alignMap.vertical[props.align as AlignVertical] || defaultAlignVariant
})
</script>

<template>
  <div
    v-bind="delegatedProps"
    :class="cn('divider', directionClass, typeBorderStyle)"
  >
    <div
      v-if="slots.default"
      v-bind="props.una?._dividerContent"
      class="divider-content"
      :class="cn(
        alignVariant,
        [props.direction === 'horizontal' ? 'px-4 py-0' : 'px-0 py-2'],
      )"
    >
      <slot />
    </div>
  </div>
</template>
