<script setup lang="ts">
import type { PaginationRootEmits } from 'reka-ui'
import type { NPaginationProps } from '../../../types'
import { reactivePick } from '@vueuse/core'
import { PaginationList, PaginationRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import PaginationEllipsis from './PaginationEllipsis.vue'
import PaginationFirst from './PaginationFirst.vue'
import PaginationInfo from './PaginationInfo.vue'
import PaginationLast from './PaginationLast.vue'
import PaginationListItem from './PaginationListItem.vue'
import PaginationNext from './PaginationNext.vue'
import PaginationPrev from './PaginationPrev.vue'
import PaginationRowsPerPage from './PaginationRowsPerPage.vue'
import { providePaginationContext } from './usePagination'

const props = withDefaults(defineProps<NPaginationProps>(), {
  showFirst: true,
  showLast: true,
  showListItem: true,
  showNext: true,
  showPrev: true,
  showInfo: false,
  showRowsPerPage: false,
  square: undefined,
})

const emits = defineEmits<PaginationRootEmits & {
  'update:itemsPerPage': [value: number]
}>()

const rootProps = useForwardPropsEmits(reactivePick(props, 'as', 'defaultPage', 'disabled', 'itemsPerPage', 'page', 'showEdges', 'siblingCount', 'total'), emits)

// reka's root context already carries `page` and `pageCount`; this supplies
// what it lacks, so `itemsPerPage` gains a write path it has no emit for
providePaginationContext({
  total: computed(() => props.total),
  itemsPerPage: computed(() => props.itemsPerPage),
  onItemsPerPageChange: (value: number) => emits('update:itemsPerPage', value),
})
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
    <div
      v-if="$slots.start || showInfo || showRowsPerPage"
      :class="cn('pagination-start', props.una?.paginationStart)"
    >
      <slot name="start">
        <PaginationInfo
          v-if="showInfo"
          :una
          v-bind="_paginationInfo"
        />

        <PaginationRowsPerPage
          v-if="showRowsPerPage"
          :una
          v-bind="_paginationRowsPerPage"
        />
      </slot>
    </div>

    <PaginationList
      v-slot="{ items }"
      :class="cn(
        'pagination-list',
        props?._paginationList?.class,
        props.una?.paginationList,
      )"
      v-bind="_paginationList"
    >
      <slot>
        <PaginationFirst
          v-if="showFirst"
          :rounded
          :size
          :pagination-selected
          :pagination-unselected
          v-bind="_paginationFirst"
          :square
          :una
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
          :square
          :una
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
                :square
                :una
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
              :square
              :una
              v-bind="_paginationEllipsis"
            >
              <slot
                name="ellipsis"
              />
            </PaginationEllipsis>
          </template>
        </template>

        <PaginationNext
          v-if="showNext"
          :rounded
          :size
          :pagination-selected
          :pagination-unselected
          v-bind="_paginationNext"
          :square
          :una
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
          :square
          :una
          v-bind="_paginationLast"
        >
          <slot
            name="last"
          />
        </PaginationLast>
      </slot>
    </PaginationList>

    <div
      v-if="$slots.end"
      :class="cn('pagination-end', props.una?.paginationEnd)"
    >
      <slot name="end" />
    </div>
  </PaginationRoot>
</template>
