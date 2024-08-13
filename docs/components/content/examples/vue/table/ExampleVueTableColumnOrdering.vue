<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'
import { faker } from '@faker-js/faker'
import rows, { type Task } from './rows'
import columns from './columns'

// override the default column order
const columnOrder = ref([
  'title',
  'status',
  'priority',
  'label',
  'id',
])

const table = ref<Table<Task>>()

function randomizeColumns() {
  table.value?.setColumnOrder(faker.helpers.shuffle(table.value?.getAllLeafColumns().map(d => d.id)))
}
</script>

<template>
  <NButton
    label="Randomize columns"
    leading="i-radix-icons-shuffle"
    @click="randomizeColumns"
  />

  <!-- table -->
  <div class="mt-4 border border-base rounded-md">
    <NTable
      ref="table"
      :columns
      :rows
      :column-order
    />
  </div>
</template>
