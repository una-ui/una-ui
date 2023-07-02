<script setup lang="ts">
import Icon from '../elements/Icon.vue'

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore tsconfig
import { NuxtLink } from '#components'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  to?: string
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
})
</script>

<template>
  <Component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :type="to ? undefined : props.type"
    v-bind="$attrs"
  >
    <slot name="icon">
      <Icon v-if="icon" :icon="icon" class="btn-icon" />
    </slot>
    <slot />
  </Component>
</template>
