<script setup lang="ts">
import type { Table } from '@tanstack/vue-table'
import rows, { type Task } from './rows'
import columns from './columns'

const pagination = ref({
  pageSize: 5,
  pageIndex: 0,
})

const table = ref<Table<Task>>()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <!-- table -->
    <div class="border border-base rounded-md">
      <NTable
        ref="table"
        v-model:pagination="pagination"
        :columns
        :rows
      />
    </div>

    <!-- pagination -->
    <div
      class="flex items-center justify-between px-2"
    >
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
</template>
