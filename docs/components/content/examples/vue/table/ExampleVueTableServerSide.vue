<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'

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
  pageSize: 10,
  pageIndex: 0,
})

const endpoint = computed(() => {
  const { pageSize, pageIndex } = pagination.value

  return `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${pageSize * pageIndex}`
})

const { data: resource, refresh, status } = await useLazyFetch<ResourceMeta>(endpoint)

const data = computed(() => resource.value?.results ?? [])

const columns: ColumnDef<Pokemon>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Url',
    accessorKey: 'url',
  },
]
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="flex justify-end">
      <NButton
        :loading="status === 'pending'"
        @click="refresh()"
      >
        Reload
      </NButton>
    </div>

    <!-- the table only ever holds one page: `row-count` gives the bar the full size -->
    <NTable
      v-model:pagination="pagination"
      manual-pagination
      :row-count="resource?.count"
      :columns
      :data
      :loading="status === 'pending'"
      show-pagination
    />
  </div>
</template>
