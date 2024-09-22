<script setup lang="ts">
import type { NPaginationProps } from '../../../types'
import { reactivePick } from '@vueuse/core'
import { PaginationList, PaginationRoot, type PaginationRootEmits, useForwardPropsEmits } from 'radix-vue'
import { cn } from '../../../utils'
import PaginationEllipsis from './PaginationEllipsis.vue'
import PaginationFirst from './PaginationFirst.vue'
import PaginationLast from './PaginationLast.vue'
import PaginationListItem from './PaginationListItem.vue'
import PaginationNext from './PaginationNext.vue'
import PaginationPrev from './PaginationPrev.vue'

const props = withDefaults(defineProps<NPaginationProps>(), {
  showFirst: true,
  showLast: true,
  showListItem: true,
  showNext: true,
  showPrev: true,
})

const emits = defineEmits<PaginationRootEmits>()
const rootProps = useForwardPropsEmits(reactivePick(props, 'as', 'defaultPage', 'disabled', 'itemsPerPage', 'page', 'showEdges', 'siblingCount', 'total'), emits)
</script>

<template>
  <PaginationRoot
    v-slot="{ page }"
    v-bind="rootProps"
    :class="cn(
      'pagination-root',
      props.class,
      props.una?.paginationRoot,
    )"
  >
    <PaginationList
      v-slot="{ items }"
      :class="cn(
        'pagination-list',
        props.una?.paginationList,
      )"
      v-bind="_paginationList"
    >
      <PaginationFirst
        v-if="showFirst"
        :rounded
        :size
        :pagination-selected
        :pagination-unselected
        v-bind="_paginationFirst"
      >
        <slot
          name="first"
        />
      </PaginationFirst>

      <PaginationPrev
        v-if="showPrev"
        :rounded
        :pagination-selected
        :pagination-unselected
        :size
        v-bind="_paginationPrev"
      >
        <slot
          name="prev"
        />
      </PaginationPrev>

      <template v-if="showListItem">
        <template v-for="(item, index) in items">
          <slot
            v-if="item.type === 'page'"
            name="list-item"
            :item="item"
            :page="page"
          >
            <PaginationListItem
              :key="index"
              :value="item.value"
              :page
              :rounded
              :size
              :pagination-selected
              :pagination-unselected
              v-bind="_paginationListItem"
            />
          </slot>

          <PaginationEllipsis
            v-else
            :key="item.type"
            :index="index"
            :rounded
            :size
            :pagination-ellipsis
            v-bind="_paginationEllipsis"
          />
        </template>
      </template>

      <PaginationNext
        v-if="showNext"
        :rounded
        :size
        :pagination-selected
        :pagination-unselected
        v-bind="_paginationNext"
      >
        <slot
          name="next"
        />
      </PaginationNext>

      <PaginationLast
        v-if="showLast"
        :rounded
        :size
        :pagination-selected
        :pagination-unselected
        v-bind="_paginationLast"
      >
        <slot
          name="last"
        />
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>
