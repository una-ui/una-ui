<script setup lang="ts">
import type { NNavLinkProps } from '../../types'
import { omitProps } from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NNavLinkProps>()
</script>

<template>
  <NButton
    nav-link="~ variant"
    active-class="nav-link-active"
    inactive-class="nav-link-inactive"
    :una="{
      btnDefaultVariant: '~',
      ...props.una,
    }"
    v-bind="{ ...omitProps(props, ['badge', 'una']), ...$attrs }"
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
