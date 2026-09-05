<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
import type { Person } from './makeData'
import makeData from './makeData'

const data = ref(makeData(5))
const expanded = ref<Record<string, boolean>>({})

const columns: ColumnDef<Person>[] = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
    // per column, `meta` takes the same keys as the `_table*` props
    meta: {
      _tableColumnFilter: {
        placeholder: 'Search first names…',
        leading: 'i-lucide-search',
      },
    },
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Age',
    accessorKey: 'age',
    meta: {
      _tableSortButton: { btn: 'soft-primary' },
    },
  },
  {
    header: 'Status',
    accessorKey: 'status',
    enableSorting: false,
    enableColumnFilter: false,
  },
]
</script>

<template>
  <NTable
    v-model:expanded="expanded"
    :columns
    :data
    enable-sorting
    enable-column-filters
    enable-row-selection
    :_table-sort-button="{ btn: 'ghost-primary' }"
    :_table-column-filter="{ size: 'sm' }"
    :_table-selection-header="{ checkbox: 'lime' }"
    :_table-selection-cell="{ checkbox: 'lime' }"
    :_table-expand-button="{ btn: 'outline-gray', size: 'sm' }"
    :una="{
      tableSortAscIcon: 'i-lucide-arrow-up',
      tableSortDescIcon: 'i-lucide-arrow-down',
      tableSortNoneIcon: 'i-lucide-chevrons-up-down',
    }"
  >
    <template #expanded="{ row }">
      <p class="p-4 text-sm text-muted-foreground">
        {{ row.original.email }}
      </p>
    </template>
  </NTable>
</template>
