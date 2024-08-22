<script lang="ts" setup>
import type { NBreadcrumbSeparatorProps } from '../../../types'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

const props = withDefaults(defineProps<NBreadcrumbSeparatorProps>(), {
  icon: 'breadcrumb-separator-icon',
  size: 'sm',
})
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    :class="cn(
      '',
      props.class,
      props.una?.breadcrumbSeparator,
    )"
    :size
  >
    <slot>
      <Icon
        :name="icon"
        :class="props.una?.breadcrumbSeparatorIcon"
      />
    </slot>
  </li>
</template>
