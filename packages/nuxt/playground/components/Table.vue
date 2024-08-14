<script setup lang="ts">
import type Table from '../../src/runtime/components/data/Table/Table.vue'

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
const table = ref<typeof Table | null>(null)

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
    // const next = data.next?.split('?')[1] ?? null
    // const previous = data.previous?.split('?')[1] ?? null
    return {
      ...data,
      // next,
      // previous,
    }
  },
})

const pokemon = computed(() => data.value?.results ?? [])
</script>

<template>
  <div class="w-9/12">
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
      v-model="select"
      v-model:sorting="sorting"
      v-model:columnVisibility="visibleColumns"
      v-model:columnFilters="columnFilters"
      v-model:globalFilter="filter"
      v-model:pagination="pagination"
      :auto-reset-all="autoReset"
      :rows="pokemon"
      :columns="columns"
      :enable-column-filters="false"
      :row-count="data?.results.length"
      :page-count="data?.count"
      enable-row-selection
    />
    <!-- @select="console.log('select', $event)" -->
    <!-- @select-all="console.log('selectAll', $event)" -->

    <div class="flex items-center justify-end py-4 space-x-2">
      <!-- <NButton
        btn="outline"
        size="sm"
        :disabled="!data?.previous"
        @click=" currentQuery = data?.previous ?? ''"
      >
        Previous
      </NButton>
      <NButton
        btn="outline"
        size="sm"
        :disabled="!data?.next"
        @click=" currentQuery = data?.next ?? ''"
      >
        Next
      </NButton> -->

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
