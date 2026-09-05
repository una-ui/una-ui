<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
import type { Person } from './makeData'
import makeData from './makeData'

const data = ref(makeData(50))

const columns: ColumnDef<Person>[] = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Visits',
    accessorKey: 'visits',
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
  {
    header: 'Profile Progress',
    accessorKey: 'progress',
  },
]

const pagination = ref({
  pageSize: 5,
  pageIndex: 0,
})
</script>

<template>
  <NTable
    v-model:pagination="pagination"
    :columns
    :data
    enable-row-selection
  >
    <!-- the bar reads the table from context, so it needs no props -->
    <template #pagination>
      <NTablePagination
        :_pagination-rows-per-page="{ pageSizes: [5, 10, 25], label: 'Per page' }"
      >
        <template #status="{ selected, filtered }">
          {{ selected }} of {{ filtered }} selected
        </template>
      </NTablePagination>
    </template>
  </NTable>
</template>
