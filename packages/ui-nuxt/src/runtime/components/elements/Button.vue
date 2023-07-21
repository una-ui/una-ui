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
    :btn="`~ wrapper ${btn}`"
  >
    <slot name="leading">
      <Icon
        v-if="leading"
        :name="leading"
        :class="nv?.buttonLeadingBase"
        btn="leading-base icon-text-base"
        aria-hidden="true"
      />
    </slot>

    <slot>
      <Icon v-if="label && icon" btn="icon-text-base" :name="label" />
      <span v-if="!icon">
        {{ label }}
      </span>
    </slot>

    <slot name="trailing">
      <Icon
        v-if="trailing"
        :name="trailing"
        :class="nv?.buttonTrailingBase"
        btn="trailing-base icon-text-base"
        aria-hidden="true"
      />
    </slot>
  </Component>
</template>
