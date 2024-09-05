<script setup lang="ts">
import { computed } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import NIcon from '../elements/Icon.vue'
import type { NButtonProps } from '../../types'
import NLink from '../elements/Link.vue'
import { cn } from '../../utils'

const props = withDefaults(defineProps<NButtonProps>(), {
  type: 'button',
  loadingPlacement: 'leading',
  una: () => ({
    btnDefaultVariant: 'btn-default-variant',
  }),
})

const mergeVariants = computed(() => {
  return {
    'btn': props.btn,
    'breadcrumb-active': props.breadcrumbActive,
    'breadcrumb-inactive': props.breadcrumbInactive,
    'dropdown-menu': props.dropdownMenu,
    'tooltip': props.tooltip,
  }
})

const btnVariants = ['solid', 'outline', 'soft', 'ghost', 'link', 'text'] as const

const hasVariant = computed(() =>
  Object.values(mergeVariants.value).some(variantList =>
    btnVariants.some(variant => variantList?.includes(variant)),
  ),
)

const isBaseVariant = computed(() =>
  Object.values(mergeVariants.value).some(variantList =>
    variantList?.includes('~'),
  ),
)

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <Component
    :is="to ? NLink : 'button'"
    :to="to"
    :type="to ? null : type"
    :class="cn(
      !hasVariant && !isBaseVariant ? una?.btnDefaultVariant : null,
      'btn',
      { 'btn-reverse': reverse },
      props.class,
      una?.btn,
    )"
    :disabled="to ? null : disabled || loading"
    :aria-label="icon ? label : null"
    :size="size"
    v-bind="mergeVariants"
  >
    <DefineTemplate v-if="loading">
      <slot name="loading">
        <NIcon
          :name="una?.btnLoadingIcon ?? 'btn-loading-icon'"
          :class="una?.btnLoading"
          btn="loading"
        />
      </slot>
    </DefineTemplate>

    <ReuseTemplate v-if="loading && loadingPlacement === 'leading'" />
    <slot
      v-else
      name="leading"
    >
      <NIcon
        v-if="leading"
        :name="leading"
        :class="una?.btnLeading"
        btn="leading"
      />
    </slot>

    <ReuseTemplate v-if="loading && loadingPlacement === 'label'" />

    <slot v-else>
      <NIcon
        v-if="label && icon"
        :name="label"
        btn="icon-label"
        :class="una?.btnIconLabel"
      />
      <span
        v-if="!icon"
        btn="label"
        :class="una?.btnLabel"
      >
        {{ label }}
      </span>
    </slot>

    <ReuseTemplate v-if="loading && loadingPlacement === 'trailing'" />
    <slot
      v-else
      name="trailing"
    >
      <NIcon
        v-if="trailing"
        :name="trailing"
        btn="trailing"
        :class="una?.btnTrailing"
      />
    </slot>
  </Component>
</template>
