<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'
import rows, { type Task } from './rows'
import columns from './columns'

const select = ref()
const table = ref<Table<Task>>()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="border border-base rounded-md">
      <NTable
        ref="table"
        v-model="select"
        :columns
        :rows
        enable-row-selection
      />
    </div>

    <div
      class="flex items-center justify-between px-2"
    >
      <div
        class="flex-1 text-sm text-muted"
      >
        {{ table?.getFilteredSelectedRowModel().rows.length }} of
        {{ table?.getFilteredRowModel().rows.length }} row(s) selected.
      </div>
    </div>
  </div>
</template>
