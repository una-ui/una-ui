<script setup lang="ts">
import type { NPaginationProps } from '../../../types'
import { PaginationList, PaginationRoot } from 'radix-vue'
import { cn } from '../../../utils'
import PaginationEllipsis from './PaginationEllipsis.vue'
import PaginationFirst from './PaginationFirst.vue'
import PaginationLast from './PaginationLast.vue'
import PaginationListItem from './PaginationListItem.vue'
import PaginationNext from './PaginationNext.vue'
import PaginationPrev from './PaginationPrev.vue'

const props = defineProps<NPaginationProps>()
const model = defineModel<number>()
</script>

<template>
  <PaginationRoot
    v-bind="_paginationRoot"
    v-model:page="model"
    :class="cn(
      'pagination',
      props.class,
      props.una?.paginationRoot,
    )"
    :una
    :total
    :sibling-count
    :show-edges
    :default-page
    :disabled
    :items-per-page
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
