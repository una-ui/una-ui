<script setup lang="ts">
import type { NPaginationInfoProps } from '../../../types'
import { injectPaginationRootContext } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import { usePagination } from './usePagination'

const props = withDefaults(defineProps<NPaginationInfoProps>(), {
  format: 'page',
})

const rootContext = injectPaginationRootContext(null)
const context = usePagination(null)

const pageCount = computed(() => props.pageCount ?? rootContext?.pageCount.value ?? 0)

// `page` can legitimately sit outside the range — reka never clamps it, so a
// shrinking `total` (server-side filtering) or a growing page size leaves it
// stranded. Clamping here keeps the rendered range coherent instead of
// printing an impossible one like "Showing 401-100 of 100".
const rawPage = computed(() => props.page ?? rootContext?.page.value ?? 1)
const page = computed(() => {
  const raw = Math.max(1, rawPage.value)
  return pageCount.value > 0 ? Math.min(raw, pageCount.value) : raw
})
const itemsPerPage = computed(() => props.itemsPerPage ?? context?.itemsPerPage.value ?? 0)
const total = computed(() => props.total ?? context?.total.value)

const first = computed(() => !total.value ? 0 : (page.value - 1) * itemsPerPage.value + 1)
const last = computed(() => !total.value ? 0 : Math.min(page.value * itemsPerPage.value, total.value))

// `range` and `total` need `total`, which is optional on the root — fall back
// to the page form rather than rendering a blank or NaN
const text = computed(() => {
  if (props.format === 'range' && total.value !== undefined)
    return `Showing ${first.value}–${last.value} of ${total.value}`

  if (props.format === 'total' && total.value !== undefined)
    return `${total.value} items`

  return `Page ${page.value} of ${pageCount.value}`
})
</script>

<template>
  <div
    :class="cn(
      'pagination-info',
      props.una?.pagination,
      props.una?.paginationInfo,
      props.class,
    )"
  >
    <slot
      :page
      :page-count="pageCount"
      :total
      :items-per-page="itemsPerPage"
      :first
      :last
    >
      {{ text }}
    </slot>
  </div>
</template>
