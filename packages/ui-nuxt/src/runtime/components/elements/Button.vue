<script setup lang="ts">
import { computed } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import NIcon from '../elements/Icon.vue'
import type { NButtonProps } from '../../types'

// @ts-expect-error tsconfig
import { NuxtLink } from '#components'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NButtonProps>(), {
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
  <Component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :type="to ? null : type"
    :class="[
      !hasVariant ? `btn-solid` : null,
    ]"
    :disabled="to ? null : disabled || loading"
    :btn="`~ ${btn ?? ''}`"
    v-bind="$attrs"
  >
    <DefineTemplate v-if="loading">
      <NIcon
        :name="nv?.btnLoadingIcon ?? 'btn-loading-icon'"
        :class="nv?.btnLoadingBase"
        btn="loading-base icon-text-base"
      />
    </DefineTemplate>

    <slot name="leading">
      <ReuseTemplate v-if="loading && loadingPlacement === 'leading'" />

      <NIcon
        v-else-if="leading"
        :name="leading"
        :class="[nv?.btnLeadingBase, nv?.btnIconTextBase]"
        btn="leading-base icon-text-base"
      />
    </slot>

    <ReuseTemplate v-if="loading && loadingPlacement === 'label'" />
    <slot v-else>
      <NIcon
        v-if="label && icon"
        :class="nv?.btnIconTextBase"
        btn="icon-text-base" :name="label"
      />
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

      <NIcon
        v-else-if="trailing"
        :name="trailing"
        :class="[nv?.btnLeadingBase, nv?.btnIconTextBase]"
        btn="trailing-base icon-text-base"
      />
    </slot>
  </Component>
</template>
