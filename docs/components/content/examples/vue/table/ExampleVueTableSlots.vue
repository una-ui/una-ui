<script setup lang="ts">
import type { ColumnDef, RowSelectionState } from '@tanstack/vue-table'
import type { Person } from './makeData'
import { NAvatar } from '#components'

import { faker } from '@faker-js/faker'
import makeData from './makeData'

const data = ref(makeData(50))

const columns: ColumnDef<Person>[] = [
  {
    header: 'Account',
    accessorKey: 'account',
    accessorFn: (row) => {
      return {
        fullname: `${row.firstName} ${row.lastName}`,
        avatar: faker.image.avatar(),
        email: row.email,
      }
    },
    // you can customize the cell renderer like this as an alternative to slot 😉
    cell: (info: any) => {
      const fullname = info.getValue().fullname

      return h('div', {
        class: 'flex items-center',
      }, [
        h(NAvatar, {
          src: info.getValue().avatar,
          alt: fullname,
        }),
        [
          h('div', {
            class: 'ml-2',
          }, [
            h('div', {
              class: 'text-sm font-semibold leading-none',
            }, fullname),
            h('span', {
              class: 'text-sm text-muted-foreground',
            }, info.getValue().email),
          ]),
        ],
      ])
    },
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
  {
    header: 'Progress',
    accessorKey: 'progress',
  },
]

const search = ref('')
const select = ref<RowSelectionState>()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <!-- header -->
    <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <NInput
        v-model="search"
        leading="i-radix-icons-magnifying-glass"
        placeholder="Search"
        :una="{
          inputWrapper: 'w-full md:w-80',
        }"
      />

      <div class="flex items-center gap-x-2 sm:ml-auto">
        <NButton
          label="Rerender"
          btn="outline-gray"
          leading="i-radix-icons-update"
          class="w-full sm:w-auto sm:shrink-0 active:translate-y-0.5"
          @click="data = makeData(20_000)"
        />

        <NButton
          label="Add 1000"
          btn="solid-primary"
          leading="i-radix-icons-plus"
          class="w-full sm:w-auto sm:shrink-0 active:translate-y-0.5"
          @click="data = [...makeData(1_000), ...data]"
        />
      </div>
    </div>

    <!-- table -->
    <NTable
      v-model:row-selection="select"
      :columns
      :data
      :global-filter="search"
      enable-row-selection enable-column-filters enable-sorting
      row-id="username"
      show-pagination
    >
      <!-- filters -->
      <template #status-filter="{ column }">
        <NSelect
          :items="['Relationship', 'Complicated', 'Single']"
          placeholder="All"
          :model-value="column.getFilterValue()"
          @update:model-value="column?.setFilterValue($event)"
        />
      </template>

      <template #progress-filter="{ column }">
        <div class="flex items-center space-x-2">
          <NInput
            type="number"
            placeholder="min"
            :model-value="column.getFilterValue()?.[0] ?? ''"
            @update:model-value="column?.setFilterValue((old: [number, number]) => [
              $event,
              old?.[1],
            ])"
          />

          <NInput
            type="number"
            placeholder="max"
            :model-value="column.getFilterValue()?.[1] ?? ''"
            @update:model-value="column?.setFilterValue((old: [number, number]) => [
              old?.[0],
              $event,
            ])"
          />
        </div>
      </template>
      <!-- end filter -->

      <!-- cells -->
      <template #status-cell="{ cell }">
        <NBadge
          :una="{
            badgeDefaultVariant: cell.row.original.status === 'relationship'
              ? 'badge-soft-success' : cell.row.original.status === 'single'
                ? 'badge-soft-info' : 'badge-soft-warning' }"
          class="capitalize"
          :label="cell.row.original.status"
        />
      </template>

      <template #progress-cell="{ cell }">
        <div class="flex items-center">
          <NProgress
            :model-value="cell.row.original.progress"
            :una="{
              progressRoot: cell.row.original.progress >= 85
                ? 'progress-success' : cell.row.original.progress >= 70
                  ? 'progress-info' : cell.row.original.progress >= 55
                    ? 'progress-warning' : 'progress-error' }"
          />
          <span class="ml-2 text-sm text-muted-foreground">{{ cell.row.original.progress }}%</span>
        </div>
      </template>
      <!-- end cell -->
    </NTable>
  </div>
</template>
