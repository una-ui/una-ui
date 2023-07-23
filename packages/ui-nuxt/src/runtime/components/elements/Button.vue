<script setup lang="ts">
import { computed } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import Icon from '../elements/Icon.vue'
import type { ButtonProps } from '../../types'

// @ts-expect-error tsconfig
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  icon: false,
  loading: false,
  disabled: false,
  loadingPlacement: 'leading',
})

const btnVariants = ['solid', 'outline', 'soft', 'ghost', 'link', 'base'] as const
const hasVariant = computed(() => btnVariants.some(btnVariants => props.btn?.includes(btnVariants)))

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-if="loading">
    <Icon
      :name="nv?.btnLoadingIcon ?? 'btn-loading-icon'"
      :class="nv?.btnLoadingBase"
      btn="loading-base icon-text-base"
    />
  </DefineTemplate>

  <Component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :type="to ? null : type"
    :class="[
      !hasVariant ? `btn-solid` : '',
    ]"
    :disabled="to ? null : disabled || loading"
    :btn="`~ wrapper ${btn ?? ''}`"
    v-bind="$attrs"
  >
    <slot name="leading">
      <ReuseTemplate v-if="loading && loadingPlacement === 'leading'" />

      <Icon
        v-else-if="leading"
        :name="leading"
        :class="nv?.btnLeadingBase"
        btn="leading-base icon-text-base"
      />
    </slot>

    <ReuseTemplate v-if="loading && loadingPlacement === 'label'" />
    <slot v-else>
      <Icon v-if="label && icon" btn="icon-text-base" :name="label" />
      <span
        v-if="!icon"
        :class="[
          nv?.btnLabelBase,
        ]"
      >
        {{ label }}
      </span>
    </slot>

    <slot name="trailing">
      <ReuseTemplate v-if="loading && loadingPlacement === 'trailing'" />

      <Icon
        v-else-if="trailing"
        :name="trailing"
        :class="nv?.btnTrailingBase"
        btn="trailing-base icon-text-base"
      />
    </slot>
  </Component>
</template>
