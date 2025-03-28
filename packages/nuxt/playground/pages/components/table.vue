<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'

const autoReset = ref(false)
const select = ref()
const sorting = ref()
const visibleColumns = ref({
  selection: true,
  age: true,
  lastName: true,
  firstName: true,
})
const filter = ref()
const columnFilters = ref()
const pagination = ref({
  pageIndex: 0,
  pageSize: 5,
})
const table = ref<Table<any>>()

const columns = [
  // Types issue
  {
    accessorKey: 'name',
    header: 'Name',
    enableMultiSort: true,
    enableSorting: true,
  },
  {
    accessorKey: 'url',
    header: 'Url',
    enableMultiSort: true,
    enableSorting: true,
  },
]

/**
 * @name NTable
 *
 * @todo
 * - [x] Add basic table
 * - [x] Add row selection
 * - [x] Add sorting
 * - [x] Add pinning
 * - [x] Add column visibility
 * - [x] Add select emit
 * - [x] Add column filters for each column
 * - [x] Add global filter
 * - [x] Add manual pagination
 * - [x] Add automatic pagination
 * - [x] Add manual pagination
 * - [x] Add expandable rows
 *
 * - [ ] Add multi-sort
 * - [ ] Add custom function filters
 * - [ ] Add custom function column filters
 * - [ ] Add table presets
 * - [ ] Add dynamic sizes
 * - [ ] Add table slots
 * - [ ] Add table props
 * - [ ] Add table documentation
 *     - [ ] Add table markdown
 *     - [ ] Add t  able examples
 */

interface ResourceMeta {
  count: number
  next: string
  previous: string
  results: {
    name: string
    url: string
  }[]
}

const currentQuery = ref('https://pokeapi.co/api/v2/pokemon?limit=100000')

const { data, status } = await useFetch<ResourceMeta>(currentQuery, {
  transform: (data: any) => {
    return {
      ...data,
    }
  },
})

const pokemon = computed(() => data.value?.results ?? [])
</script>

<template>
  <div class="w-full space-y-2">
    {{ sorting }}
    {{ status }}
    {{ pagination }}

    <NInput
      id="test"
      v-model="filter"
      placeholder="Search..."
    />

    <NTable
      ref="table"
      v-model:row-selection="select"
      v-model:sorting="sorting"
      v-model:column-visibility="visibleColumns"
      v-model:column-filters="columnFilters"
      v-model:global-filter="filter"
      v-model:pagination="pagination"
      :auto-reset-all="autoReset"
      :data="pokemon"
      :columns="columns"
      :enable-column-filters="false"
      :row-count="data?.results.length"
      :page-count="data?.count"
      enable-row-selection
    />

    <div class="flex items-center justify-end py-4 space-x-2">
      <NButton
        btn="outline"
        size="sm"
        :disabled="!table?.getCanPreviousPage()"
        @click="table?.previousPage()"
      >
        Previous
      </NButton>
      <NButton
        btn="outline"
        size="sm"
        :disabled="!table?.getCanNextPage()"
        @click="table?.nextPage()"
      >
        Next
      </NButton>
    </div>
  </div>
</template>
