<script setup lang="ts">
import { computed } from 'vue'
import type { NNavLinkProps } from '../../types'
import { omitProps } from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<NNavLinkProps>(),
  {
    navLinkActive: 'text-primary',
    navLinkInactive: 'text-primary',
    una: () => ({
      btnDefaultVariant: '~',
      navLinkDefaultVariant: 'nav-link-default-variant',
    }),
  },
)

const btnProps = omitProps(props.una, [
  'navLinkDefaultVariant',
  'navLink',
  'navLinkActive',
  'navLinkInactive',
])

const navLinkVariants = ['text'] as const
const hasVariant = computed(() => navLinkVariants.some(navLinkVariants => props.navLink?.includes(navLinkVariants)))
const isBaseVariant = computed(() => props.navLink?.includes('~') || props.una.navLink?.includes('~'))
</script>

<template>
  <NButton
    :nav-link="navLink"
    :nav-link-active="navLinkActive"
    :nav-link-inactive="navLinkInactive"
    :una="btnProps"
    class="nav-link"
    :class="[
      !hasVariant && !isBaseVariant ? una?.navLinkDefaultVariant : null,
      { 'btn-reverse': reverse },
      una?.btn,
    ]"
    v-bind="{
      ...omitProps(props, ['badge', 'una']),
      ...$attrs,
    }"
  >
    <template #leading>
      <NIcon
        v-if="leading"
        :name="leading"
        :class="una?.btnLeading"
        btn="leading"
      />
    </template>

    <template #default>
      <span
        btn="label"
        class="w-full text-left"
        :class="una?.btnLabel"
      >
        {{ label }}
      </span>
    </template>

    <template v-if="badge" #trailing>
      <!-- TODO: move to una preset -->
      <NBadge
        v-bind="badge"
        :una="{
          badgeDefaultVariant: 'badge-outline-white',
          ...props.badge?.una,
        }"
        class="min-w-max whitespace-nowrap rounded-full px-2.5 py-0.5 leading-5"
      />
    </template>
  </NButton>
</template>
