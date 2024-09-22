<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'

interface Pokemon {
  name: string
  url: string
}

interface ResourceMeta {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}

const pagination = ref({
  pageSize: 5,
  pageIndex: 0,
})

const endpoint = computed (() => {
  const { pageSize, pageIndex } = pagination.value

  return `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${pageSize * pageIndex}`
})

const { data: resource, refresh, status } = await useLazyFetch<ResourceMeta>(endpoint)

const data = computed(() => {
  return resource.value?.results ?? []
})

const columns = ref<ColumnDef<Pokemon>[]>([
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Url',
    accessorKey: 'url',
  },
])

const pageCount = computed(() => {
  const { pageSize } = pagination.value

  return Math.ceil((resource.value?.count || 0) / pageSize)
})

const table = ref<Table<Pokemon>>()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <!-- header -->
    <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div class="flex items-center gap-x-2 sm:ml-auto">
        <NButton
          :loading="status === 'pending'"
          @click="refresh()"
        >
          Reload
        </NButton>
      </div>
    </div>

    <!-- table -->
    <NTable
      ref="table"
      v-model:pagination="pagination"
      manual-pagination
      :columns
      :loading="status === 'pending'"
      :page-count
      :data
    />

    <!-- footer -->
    <div
      class="flex items-center justify-end px-2"
    >
      <div class="flex items-center justify-between space-x-6 lg:space-x-8">
        <div
          class="hidden items-center justify-center text-sm font-medium sm:flex space-x-2"
        >
          <span class="text-nowrap">
            Rows per page
          </span>

          <NSelect
            :items="[5, 10, 20, 30, 40, 50]"
            :_select-trigger="{
              class: 'w-15',
            }"
            :model-value="table?.getState().pagination.pageSize"
            @update:model-value="table?.setPageSize($event as unknown as number)"
          />
        </div>

        <div
          class="flex items-center justify-center text-sm font-medium"
        >
          Page {{ (table?.getState().pagination.pageIndex ?? 0) + 1 }} of  {{ pageCount }}
        </div>

        <div class="flex items-center space-x-2">
          <NButton
            btn="solid-white"
            square
            icon
            label="i-radix-icons-double-arrow-left"
            :disabled="!table?.getCanPreviousPage()"
            @click="table?.setPageIndex(0)"
          />
          <NButton
            btn="solid-white"
            square
            icon
            label="i-radix-icons-chevron-left"
            :disabled="!table?.getCanPreviousPage()"
            @click="table?.previousPage()"
          />
          <NButton
            btn="solid-white"
            square
            icon
            label="i-radix-icons-chevron-right"
            :disabled="!table?.getCanNextPage()"
            @click="table?.nextPage()"
          />
          <NButton
            btn="solid-white"
            square
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
