<script setup lang="ts">
import type { NPaginationRowsPerPageProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { injectPaginationRootContext, useForwardProps } from 'reka-ui'
import { computed, watch } from 'vue'
import { cn } from '../../../utils'
import Select from '../../forms/select/Select.vue'
import { usePagination } from './usePagination'

const props = withDefaults(defineProps<NPaginationRowsPerPageProps>(), {
  pageSizes: () => [10, 20, 30, 40, 50],
})

const emit = defineEmits<{
  'update:itemsPerPage': [value: number]
}>()

const context = usePagination(null)
const rootContext = injectPaginationRootContext(null)

const delegatedProps = reactiveOmit(props, ['class', 'una', 'pageSizes', 'label', 'itemsPerPage'])

// forward only what was actually passed: props typed as booleans are cast to
// `false` when absent, and spreading `open: false` would pin `SelectRoot`
// controlled-closed so the select could never open
const forwardedProps = useForwardProps(delegatedProps)

const itemsPerPage = computed(() => props.itemsPerPage ?? context?.itemsPerPage.value ?? props.pageSizes[0])

function onUpdate(value: unknown) {
  const next = Number(value)

  // emit as well as writing through the context, so the part still works when
  // used on its own — outside `NPagination` the context is null
  emit('update:itemsPerPage', next)
  context?.onItemsPerPageChange(next)
}

// reka recomputes `pageCount` from the new page size but never clamps `page`,
// and Next/Last only disable on `page === pageCount` — so growing the page
// size would otherwise strand the user past the last page.
//
// This has to be a watcher rather than part of `onUpdate`. The emit above runs
// the consumer's handler synchronously, and any page that handler sets (`page
// = 1`, or TanStack's `setPageSize`, which recomputes `pageIndex` itself) has
// not reached the root's props yet — clamping inline would read a stale page
// and overwrite the consumer's choice. A watcher fires after the flush, so it
// sees the settled page and only acts if it is still out of range. It also
// stays quiet when nothing is bound to `update:itemsPerPage`, since then
// `pageCount` never changes.
watch(() => rootContext?.pageCount.value, (pageCount) => {
  if (!rootContext || !pageCount)
    return

  if (rootContext.page.value > pageCount)
    rootContext.onPageChange(pageCount)
})
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
      v-bind="forwardedProps"
      :items="props.pageSizes"
      :model-value="itemsPerPage"
      :una="props.una"
      @update:model-value="onUpdate"
    />
  </div>
</template>
