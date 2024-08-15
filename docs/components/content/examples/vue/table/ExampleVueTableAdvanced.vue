<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'
import { faker } from '@faker-js/faker'

import Avatar from '../../../../../../packages/nuxt/dist/runtime/components/elements/Avatar.vue'
import Badge from '../../../../../../packages/nuxt/dist/runtime/components/elements/Badge.vue'
import Progress from '../../../../../../packages/nuxt/dist/runtime/components/elements/Progress.vue'
import makeData, { type Person } from './makeData'

const rows = ref(makeData(100))

const columns: ColumnDef<Person>[] = [
  {
    header: 'Account',
    accessorKey: 'email',
    accessorFn: (row) => {
      return {
        username: row.username,
        avatar: faker.image.avatar(),
        email: row.email,
      }
    },
    cell: (info: any) => {
      const username = info.getValue().username

      return h('div', {
        class: 'flex items-center',
      }, [
        h(Avatar, {
          src: info.getValue().avatar,
          alt: username,
        }),
        [
          h('div', {
            class: 'ml-2',
          }, [
            h('div', {
              class: 'text-sm font-semibold leading-none',
            }, username),
            h('span', {
              class: 'text-sm text-muted',
            }, info.getValue().email),
          ]),
        ],
      ])
    },
    enableColumnFilter: false,
    enableSorting: false,
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
    cell: (info: any) => {
      const badge = info.getValue() === 'relationship'
        ? 'badge-soft-success'
        : info.getValue() === 'single'
          ? 'badge-soft-info'
          : 'badge-soft-warning'

      return h(Badge, {
        class: 'capitalize',
        una: {
          badgeDefaultVariant: badge,
        },
      }, info.getValue())
    },
  },
  {
    header: 'Profile Progress',
    accessorKey: 'progress',
    cell: ({ row }) => {
      const value = Number(row.getValue('progress'))
      const progressColor = value >= 85
        ? 'progress-success'
        : value >= 70
          ? 'progress-info'
          : value >= 55
            ? 'progress-warning'
            : 'progress-error'

      return h('div', {
        class: 'flex items-center',
      }, [
        h(Progress, {
          modelValue: value,
          una: {
            progressDefaultVariant: progressColor,
          },
        }),
        h('div', {
          class: 'ml-2 text-sm text-muted',
        }, `${row.getValue('progress')}%`),
      ])
    },
  },
]

const search = ref('')
const select = ref()

const table = ref<Table<Person>>()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <!-- header -->
    <div class="flex flex-wrap items-center justify-between gap-4">
      <NInput
        v-model="search"
        leading="i-radix-icons-magnifying-glass"
        placeholder="Search"
        :una="{
          inputWrapper: 'w-full md:w-80',
        }"
      />

      <div class="ml-auto flex items-center space-x-2">
        <NButton
          label="Rerender"
          btn="solid-gray"
          leading="i-radix-icons-update"
          class="shrink-0 active:translate-y-0.5"
          @click="rows = makeData(20_000)"
        />

        <!-- add 100 -->
        <NButton
          label="Add 1000"
          btn="solid-primary"
          leading="i-radix-icons-plus"
          class="shrink-0 active:translate-y-0.5"
          @click="rows = [...makeData(1_000), ...rows]"
        />
      </div>
    </div>

    <!-- table -->
    <div class="border border-base rounded-md">
      <NTable
        ref="table"
        v-model="select"
        :columns
        :rows
        :global-filter="search"
        enable-row-selection
        enable-sorting
        enable-column-filters
        row-id="username"
      />
    </div>

    <!-- footer -->
    <div
      class="flex items-center justify-between px-2"
    >
      <div
        class="flex-1 text-sm text-muted"
      >
        {{ table?.getFilteredSelectedRowModel().rows.length.toLocaleString() }} of
        {{ table?.getFilteredRowModel().rows.length.toLocaleString() }} row(s) selected.
      </div>
      <div class="flex items-center space-x-6 lg:space-x-8">
        <div
          class="flex items-center justify-center text-sm font-medium"
        >
          Page {{ (table?.getState().pagination.pageIndex ?? 0) + 1 }} of
          {{ table?.getPageCount().toLocaleString() }}
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
