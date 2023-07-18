<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../elements/Icon.vue'
import type { ButtonProps } from '../../types'

// @ts-expect-error tsconfig
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
})

const btnVariants = ['solid', 'outline', 'soft', 'ghost', 'link', 'base'] as const
const hasVariant = computed(() => btnVariants.some(btnVariants => props.btn?.includes(btnVariants)))
</script>

<template>
  <Component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    v-bind="$attrs"
    :type="to ? null : type"
    :class="[
      hasVariant ? `` : 'btn-solid',
    ]"
    :btn="btn"
  >
    <slot name="icon">
      <Icon v-if="icon" :name="icon" class="btn-icon" />
    </slot>
    <slot>
      {{ label }}
    </slot>
  </Component>
</template>
