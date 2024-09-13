<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
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

const expanded = ref<Record<string, boolean>>({})
</script>

<template>
  <NTable
    v-model:expanded="expanded"
    :columns
    :data
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
</template>
