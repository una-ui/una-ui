<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'
import type { Person } from '../utils'
import { NAvatar } from '#components'
import { faker } from '@faker-js/faker'

const data = ref<Person[]>([])
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
          size: 'sm',
        }),
        [
          h('div', {
            class: 'ml-2',
          }, [
            h('div', {
              class: 'text-sm font-semibold leading-none',
            }, fullname),
            h('span', {
              class: 'text-sm text-muted',
            }, info.getValue().email),
          ]),
        ],
      ])
    },
    enableSorting: false,
  },
  {
    header: 'Username',
    accessorKey: 'username',
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
const select = ref()

const table = useTemplateRef<Table<Person>>('table')

onMounted(() => {
  data.value = makeData(50)
})
</script>

<template>
  <div class="flex flex-col border rounded-lg py-4 space-y-4">
    <!-- header -->
    <div class="flex flex-col px-4">
      <h1 class="text-lg font-semibold">
        Contributors
      </h1>
      <p class="text-sm text-muted">
        The people who have contributed to the project.
      </p>
    </div>

    <div class="flex flex-row items-center justify-between gap-4 px-4">
      <NInput
        v-model="search"
        placeholder="Search Contributors..."
        :una="{
          inputWrapper: 'w-full md:w-80',
        }"
      />

      <div class="flex items-center gap-x-2">
        <NTooltip
          content="Reload"
        >
          <NButton
            btn="text-gray"
            label="i-radix-icons-update"
            icon
            square
            @click="data = makeData(20_000)"
          />
        </NTooltip>

        <NTooltip
          content="Add Contributors"
        >
          <NButton
            btn="soft-gray"
            label="i-radix-icons-plus"
            icon
            square
            @click="data = [...makeData(1_000), ...data]"
          />
        </NTooltip>
      </div>
    </div>

    <!-- table -->
    <NTable
      ref="table"
      v-model="select"
      :columns
      :una="{
        tableRootWrapper: 'border-none rounded-none',
      }"
      :data
      :global-filter="search"
      enable-row-selection
      enable-sorting
      row-id="id"
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
          :badge="
            cell.row.original.status === 'triaged' ? 'outline-gray'
            : cell.row.original.status === 'in-progress' ? 'outline-warning'
              : cell.row.original.status === 'completed' ? 'outline-success'
                : cell.row.original.status === 'cancelled' ? 'outline-error'
                  : 'soft-info'"
          :icon="
            cell.row.original.status === 'triaged' ? 'i-lucide-alert-triangle'
            : cell.row.original.status === 'in-progress' ? 'i-lucide-loader animate-spin'
              : cell.row.original.status === 'completed' ? 'i-lucide-check-circle'
                : cell.row.original.status === 'cancelled' ? 'i-lucide-x-circle'
                  : 'i-lucide-info'"
          class="text-nowrap capitalize"
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
          <span class="ml-2 text-sm text-muted">{{ cell.row.original.progress }}%</span>
        </div>
      </template>
      <!-- end cell -->
    </NTable>

    <!-- footer -->
    <div
      class="flex items-center justify-between px-4"
    >
      <div
        class="hidden text-sm text-muted sm:block"
      >
        {{ table?.getFilteredSelectedRowModel().rows.length.toLocaleString() }} of
        {{ table?.getFilteredRowModel().rows.length.toLocaleString() }} row(s) selected.
      </div>
      <div class="flex items-center space-x-6 lg:space-x-8">
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
          Page {{ (table?.getState().pagination.pageIndex ?? 0) + 1 }} of
          {{ table?.getPageCount().toLocaleString() }}
        </div>

        <NPagination
          :page="(table?.getState().pagination.pageIndex ?? 0) + 1"
          :total="table?.getFilteredRowModel().rows.length"
          :show-list-item="false"
          :items-per-page="table?.getState().pagination.pageSize ?? 5"
          @update:page="table?.setPageIndex($event - 1)"
        />
      </div>
    </div>
  </div>
</template>
