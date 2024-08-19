<script setup lang="ts">
import { computed } from 'vue'
import type { NBreadcrumbProps } from '../../../types'
import NIcon from '../../elements/Icon.vue'
import { cn, omitProps } from '../../../utils'
import BreadcrumbItem from './BreadcrumbItem.vue'
import BreadcrumbSeparator from './BreadcrumbSeparator.vue'

const props = defineProps<NBreadcrumbProps>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ol
    v-bind="omitProps(delegatedProps, ['items', 'breadcrumb', 'withRouting'])"
    :class="cn(
      'breadcrumb',
      props.class,
    )"
  >
    <slot name="home" :item="home">
      <BreadcrumbItem
        v-if="home"
        :breadcrumb="breadcrumb"
        :with-routing="withRouting"
        v-bind="{ ...home, ...delegatedProps._breadcrumbItem }"
      />
    </slot>
    <template v-for="(item, i) in items" :key="i">
      <BreadcrumbSeparator
        v-if="home || i !== 0"
        v-bind="delegatedProps._breadcrumbSeparator"
      >
        <slot name="separator">
          <NIcon
            name="i-heroicons:chevron-right-20-solid"
          />
        </slot>
      </BreadcrumbSeparator>
      <slot name="item" :item>
        <BreadcrumbItem
          :breadcrumb="breadcrumb"
          :with-routing="withRouting"
          v-bind="{ ...item, ...delegatedProps._breadcrumbItem }"
        />
      </slot>
    </template>
  </ol>
</template>
