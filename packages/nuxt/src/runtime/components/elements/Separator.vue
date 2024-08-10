<script setup lang="ts">
import { computed } from 'vue'
import { Separator } from 'radix-vue'
import { cn, omitProps } from '../../utils'
import type { NSeparatorProps } from '../../types'

const props = withDefaults(defineProps<NSeparatorProps>(), {
  orientation: 'horizontal',
  label: '',
  una: () => ({
    separatorDefaultVariant: 'separator-default-variant',
  }),
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = omitProps(props, ['una'])

  return delegated
})
</script>

<template>
  <Separator
    v-bind="omitProps(delegatedProps, ['una', 'separatorPosition'])"
    :class="
      cn(
        'separator',
        props.una?.separatorDefaultVariant,
        props.una?.separator,
        props.orientation === 'vertical' ? 'separator-vertical' : 'separator-horizontal',
        props.class,
      )
    "
  >
    <span
      v-if="props.label || $slots.default"
      :separator-position="props.separatorPosition || 'center'"
      :class="cn(
        'separator-content',
        props.una?.separatorContent,
        props.orientation === 'vertical' ? 'separator-content-vertical' : 'separator-content-horizontal',
      )"
    >
      <slot>
        {{ props.label }}
      </slot>
    </span>
  </Separator>
</template>
