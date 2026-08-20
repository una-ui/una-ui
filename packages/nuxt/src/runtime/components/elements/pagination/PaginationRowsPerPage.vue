<script setup lang="ts">
import type { NPaginationRowsPerPageProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Select from '../../forms/select/Select.vue'
import { usePagination } from './usePagination'

const props = withDefaults(defineProps<NPaginationRowsPerPageProps>(), {
  pageSizes: () => [10, 20, 30, 40, 50],
})

const context = usePagination(null)

const delegatedProps = reactiveOmit(props, ['class', 'una', 'pageSizes', 'label', 'itemsPerPage'])

const itemsPerPage = computed(() => props.itemsPerPage ?? context?.itemsPerPage.value ?? props.pageSizes[0])

function onUpdate(value: unknown) {
  context?.onItemsPerPageChange(Number(value))
}
</script>

<template>
  <div
    :class="cn(
      'pagination-rows-per-page',
      props.una?.pagination,
      props.una?.paginationRowsPerPage,
      props.class,
    )"
  >
    <slot name="label">
      <span
        v-if="props.label"
        :class="cn('pagination-rows-per-page-label', props.una?.paginationRowsPerPageLabel)"
      >
        {{ props.label }}
      </span>
    </slot>

    <Select
      v-bind="delegatedProps"
      :items="props.pageSizes"
      :model-value="itemsPerPage"
      :una="props.una"
      @update:model-value="onUpdate"
    />
  </div>
</template>
