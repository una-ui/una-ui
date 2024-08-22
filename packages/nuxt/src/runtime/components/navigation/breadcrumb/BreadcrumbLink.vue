<script lang="ts" setup>
import { computed } from 'vue'
import { cn } from '../../../utils'
import Button from '../../elements/Button.vue'
import type { NBreadcrumbLinkProps } from '../../../types'

const props = withDefaults(defineProps<NBreadcrumbLinkProps>(), {
  active: false,
  breadcrumbActive: '~',
  breadcrumbInactive: '~',
  size: 'sm',
})

const activeAttrs = computed(() => {
  if (!props.active) {
    return {
      'data-state': 'inactive',
    }
  }

  return {
    'aria-disabled': true,
    'tabindex': -1,
    'data-state': 'active',
    'aria-current': 'page',
  }
})
</script>

<template>
  <Button
    v-bind="{ ...props, ...activeAttrs }"
    :class="cn(
      'breadcrumb-link',
      { 'cursor-text': active },
    )"
    :to="disabled ? undefined : props.to"
  >
    <slot />
  </Button>
</template>
