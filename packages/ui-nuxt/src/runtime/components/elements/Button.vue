<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../elements/Icon.vue'
import type { ButtonProps } from '../../types'

// @ts-expect-error tsconfig
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  icon: false,
  circle: false,
})

const btnVariants = ['solid', 'outline', 'soft', 'ghost', 'link', 'base'] as const
const hasVariant = computed(() => btnVariants.some(btnVariants => props.btn?.includes(btnVariants)))
</script>

<template>
  <Component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :type="to ? null : type"
    :class="[
      !hasVariant ? `btn-solid` : '',
    ]"
    :btn="btn"
  >
    <slot name="leading">
      <span v-if="leading" class="btn-leading-wrapper">
        <Icon :name="leading" class="btn-icon-base" aria-hidden="true" />
      </span>
    </slot>

    <slot>
      <Icon v-if="label && icon" :name="label" />
      <span v-if="!icon">
        {{ label }}
      </span>
    </slot>

    <slot name="trailing">
      <span v-if="trailing" class="btn-trailing-wrapper">
        <Icon :name="trailing" class="btn-icon-base" aria-hidden="true" />
      </span>
    </slot>
  </Component>
</template>
