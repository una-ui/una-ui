<script setup lang="ts">
import { omitProps } from '../../utils'

import type { NNavLinkProps } from '../../types'

const props = defineProps<NNavLinkProps>()
</script>

<template>
  <NButton
    nav-link="~ text"
    active-class="nav-link-active-text"
    inactive-class="nav-link-inactive-text"
    class="w-full justify-start gap-x-3 rounded-md"
    :una="{
      btnDefaultVariant: '~',
      ...props.una,
    }"
    v-bind="omitProps(props, ['badge', 'una'])"
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
      <NBadge
        v-bind="badge"
        :una="{
          badgeDefaultVariant: 'badge-outline-white',
        }"
        class="min-w-max whitespace-nowrap rounded-full px-2.5 py-.5 leading-5"
      />
    </template>
  </NButton>
</template>
