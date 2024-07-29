<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'
import rows, { type Task } from './rows'

const search = ref('')
const select = ref()
const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'title',
    header: 'Title',
    enableHiding: true,
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'label',
    header: 'Label',
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
  },
]

const table = ref<Table<Task>>()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <NInput
        v-model="search"
        leading="i-radix-icons-magnifying-glass"
        placeholder="Search"
        :una="{
          inputWrapper: 'w-full md:w-80',
        }"
      />

      <NButton
        label="Add new"
        leading="i-radix-icons-plus"
        class="w-full md:w-auto"
      />
    </div>

    <div class="border border-base rounded-md">
      <NTable
        ref="table"
        v-model="select"
        :columns
        :rows
        :global-filter="search"

        enable-row-selection enable-sorting
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
      <div class="flex items-center space-x-6 lg:space-x-8">
        <div
          class="w-100px flex items-center justify-center text-sm font-medium"
        >
          Page {{ (table?.getState().pagination.pageIndex ?? 0) + 1 }} of
          {{ table?.getPageCount() }}
        </div>
        <div class="flex items-center space-x-2">
          <NButton
            btn="solid-white square"
            icon
            label="i-radix-icons-double-arrow-left"
            :disabled="!table?.getCanPreviousPage()"
            @click="table?.setPageIndex(0)"
          />
          <NButton
            btn="solid-white square"
            icon
            label="i-radix-icons-chevron-left"
            :disabled="!table?.getCanPreviousPage()"
            @click="table?.previousPage()"
          />
          <NButton
            btn="solid-white square"
            icon
            label="i-radix-icons-chevron-right"
            :disabled="!table?.getCanNextPage()"
            @click="table?.nextPage()"
          />
          <NButton
            btn="solid-white square"
            icon
            label="i-radix-icons-double-arrow-right"
            :disabled="!table?.getCanNextPage()"
            @click="table?.setPageIndex(table.getPageCount() - 1)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
