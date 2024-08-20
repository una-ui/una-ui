<script setup lang="ts">
import { computed } from 'vue'
import type { NBreadcrumbItemProps } from '../../../types'
import { cn } from '../../../utils'
import NIcon from '../../elements/Icon.vue'
import BreadcrumbLabel from './BreadcrumbLabel.vue'

// @ts-expect-error tsconfig
import { NuxtLink } from '#components'

const props = withDefaults(defineProps<NBreadcrumbItemProps>(), {
  una: () => ({
    breadcrumbDefaultVariant: 'breadcrumb-default-variant',
  }),
})

const breadcrumbVariants = ['solid', 'link', 'text'] as const
const hasVariant = computed(() => breadcrumbVariants.some(breadcrumbVariant => props.breadcrumb?.includes(breadcrumbVariant)))
const isBaseVariant = computed(() => props.breadcrumb?.includes('~'))
</script>

<template>
  <li
    v-bind="props"
    :class="cn(
      'breadcrumb-item',
      props.class,
      !hasVariant && !isBaseVariant ? una?.breadcrumbDefaultVariant : '',
    )"
    :data-state="url === $route.path ? 'active' : 'inactive'"
  >
    <component
      :is="withRouting ? NuxtLink : 'a'"
      v-bind="!withRouting ? { href: url } : { to: url }"
      flex="inline items-center"
    >
      <slot name="item">
        <div
          v-if="icon && label"
          class="breadcrumb-item-link"
        >
          <NIcon :name="icon" class="mb-0.5" />
          <BreadcrumbLabel v-bind="props._breadcrumbLabel">
            {{ label }}
          </BreadcrumbLabel>
        </div>
        <NIcon
          v-else-if="icon"
          :name="icon"
        />
        <BreadcrumbLabel
          v-else-if="label"
          v-bind="props._breadcrumbLabel"
        >
          {{ label }}
        </BreadcrumbLabel>
      </slot>
    </component>
  </li>
</template>
