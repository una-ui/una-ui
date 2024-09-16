<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'
import type { Person } from './makeData'
import makeData from './makeData'

const data = ref(makeData(5))

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

const table = ref<Table<Person>>()

const columnVisibility = ref({})
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-4">
      <NCheckbox
        v-for="tableColumn in table?.getAllLeafColumns()"
        :key="tableColumn.id"
        :checked="tableColumn.getIsVisible()"
        :label="tableColumn.id"
        @update:checked="tableColumn.toggleVisibility()"
      />
    </div>

    <NSeparator />

    <NTable
      ref="table"
      v-model:column-visibility="columnVisibility"
      :columns
      :data
    />
  </div>
</template>
