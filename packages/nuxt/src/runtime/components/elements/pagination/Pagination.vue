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
  isFirstVisible: true,
  isLastVisible: true,
  isListItemVisible: true,
  isNextVisible: true,
  isPrevVisible: true,
})

const emits = defineEmits<PaginationRootEmits>()
const rootProps = useForwardPropsEmits(reactivePick(props, 'as', 'defaultPage', 'disabled', 'itemsPerPage', 'page', 'showEdges', 'siblingCount', 'total'), emits)
</script>

<template>
  <PaginationRoot
    v-slot="{ page }"
    v-bind="rootProps"
    :class="cn(
      'pagination',
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
      <slot
        v-if="isFirstVisible"
        name="pagination-first"
      >
        <PaginationFirst
          :size
          v-bind="_paginationFirst"
        />
      </slot>

      <slot
        v-if="isPrevVisible"
        name="pagination-prev"
      >
        <PaginationPrev
          :size
          v-bind="_paginationPrev"
        />
      </slot>

      <template v-if="isListItemVisible">
        <template v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="index"
            :value="item.value"
            :page
            :size
            v-bind="_paginationListItem"
          />
          <PaginationEllipsis
            v-else
            :key="item.type"
            :index="index"
            :size
            v-bind="_paginationEllipsis"
          />
        </template>
      </template>

      <slot
        v-if="isNextVisible"
        name="pagination-next"
      >
        <PaginationNext
          :size
          v-bind="_paginationNext"
        />
      </slot>

      <slot
        v-if="isLastVisible"
        name="pagination-last"
      >
        <PaginationLast
          :size
          v-bind="_paginationLast"
        />
      </slot>
    </PaginationList>
  </PaginationRoot>
</template>
