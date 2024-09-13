<script lang="ts" setup>
import type { NBreadcrumbProps } from '../../../types'
import { cn } from '../../../utils'
import BreadcrumbItem from './BreadcrumbItem.vue'
import BreadcrumbLink from './BreadcrumbLink.vue'
import BreadcrumbList from './BreadcrumbList.vue'
import BreadcrumbRoot from './BreadcrumbRoot.vue'
import BreadcrumbSeparator from './BreadcrumbSeparator.vue'

const props = defineProps<NBreadcrumbProps>()
</script>

<template>
  <BreadcrumbRoot
    :class="cn(
      'breadcrumb',
      props.class,
      props.una?.breadcrumb,
    )"
    :una
    :size
    v-bind="_breadcrumbRoot"
  >
    <slot name="root" :items="items">
      <BreadcrumbList
        :una
        :size
        v-bind="_breadcrumbList"
      >
        <template
          v-for="(item, i) in props.items"
          :key="i"
        >
          <slot name="list" :item="item">
            <BreadcrumbItem
              :una
              :size
              v-bind="_breadcrumbItem"
            >
              <slot name="item" :item="item">
                <BreadcrumbLink
                  :active="i === items.length - 1"
                  :breadcrumb-active="props.breadcrumbActive"
                  :breadcrumb-inactive="props.breadcrumbInactive"
                  :size
                  v-bind="{
                    ...item,
                    ..._breadcrumbLink,
                  }"
                >
                  <slot :item="item" />
                </BreadcrumbLink>
              </slot>
            </BreadcrumbItem>
            <BreadcrumbSeparator
              v-if="i < props.items!.length - 1"
              :icon="props.separator"
              :size
              :una
              v-bind="_breadcrumbSeparator"
            >
              <slot name="separator" />
            </BreadcrumbSeparator>
          </slot>
        </template>
      </BreadcrumbList>
    </slot>
  </BreadcrumbRoot>
</template>
