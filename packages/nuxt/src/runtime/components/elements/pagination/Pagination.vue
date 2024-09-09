<script setup lang="ts">
import { PaginationList, PaginationRoot } from 'radix-vue'
import type { NPaginationProps } from '../../../types'
import { cn } from '../../../utils'
import PaginationFirst from './PaginationFirst.vue'
import PaginationPrev from './PaginationPrev.vue'
import PaginationNext from './PaginationNext.vue'
import PaginationLast from './PaginationLast.vue'
import PaginationEllipsis from './PaginationEllipsis.vue'
import PaginationListItem from './PaginationListItem.vue'

const props = defineProps<NPaginationProps>()
</script>

<template>
  <PaginationRoot
    :class="cn(
      'pagination',
      props.class,
      props.una?.paginationRoot,
    )"
    :una
    v-bind="_paginationRoot"
    :total
    :sibling-count
    :show-edges
    :default-page
  >
    <PaginationList
      v-slot="{ items }"
      :class="cn(
        'pagination-list',
        props.class,
      )"
    >
      <PaginationFirst />
      <PaginationPrev />
      <template v-for="(item, index) in items">
        <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" />
        <PaginationEllipsis
          v-else
          :key="item.type"
          :index="index"
        />
      </template>
      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </PaginationRoot>
</template>
