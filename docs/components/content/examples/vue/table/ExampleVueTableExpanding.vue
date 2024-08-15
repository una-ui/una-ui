<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
import makeData from './makeData'
import type { Person } from './makeData'

const rows = ref(makeData(5))

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

const expanded = ref<Record<string, boolean>>({})
</script>

<template>
  <div class="border border-base rounded-md">
    <NTable
      v-model:expanded="expanded"
      :columns
      :rows
    >
      <template #expanded="{ row }">
        <div class="p-4">
          <p class="text-sm text-muted">
            Object:
          </p>
          <p class="text-base">
            {{ row }}
          </p>
        </div>
      </template>
    </NTable>
  </div>
</template>
