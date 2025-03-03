<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'
import type { Issue } from '../../data'
import { NAvatar } from '#components'

const limit = ref(50)
const { toast } = useToast()

const { data, refresh } = await useFetch('/api/issues', {
  query: { limit },
})

async function addIssues(count: number) {
  limit.value += count
  toast({
    title: 'Issues Added',
    description: `Successfully added ${count} new issues.`,
    leading: 'i-lucide-check-circle text-success',
  })
}

const columns: ColumnDef<Issue>[] = [
  {
    header: 'Title',
    accessorKey: 'title',
    cell: (info: any) => {
      return h('div', {
        class: 'text-sm font-semibold leading-none',
      }, [
        h('span', {}, info.getValue()),
        h('span', {
          class: 'text-sm text-muted ml-2',
        }, `#${info.row.original.number}`),
      ])
    },
  },
  {
    header: 'Author',
    accessorKey: 'author',
    cell: (info: any) => {
      const username = info.getValue().username

      return h('div', {
        class: 'flex items-center',
      }, [
        h(NAvatar, {
          src: info.getValue().avatar,
          alt: username,
          size: 'sm',
        }),
        [
          h('div', {
            class: 'ml-2',
          }, [
            h('div', {
              class: 'text-sm font-semibold leading-none',
            }, username),
          ]),
        ],
      ])
    },
    enableSorting: false,
  },
  {
    header: 'Assignee',
    accessorKey: 'assignee',
    cell: (info: any) => {
      if (!info.getValue()) {
        return h('span', {
          class: 'text-muted text-sm',
        }, 'Unassigned')
      }

      const username = info.getValue().username

      return h('div', {
        class: 'flex items-center',
      }, [
        h(NAvatar, {
          src: info.getValue().avatar,
          alt: username,
          size: 'sm',
        }),
        [
          h('div', {
            class: 'ml-2',
          }, [
            h('div', {
              class: 'text-sm font-semibold leading-none',
            }, username),
          ]),
        ],
      ])
    },
    enableSorting: false,
  },
  {
    header: 'State',
    accessorKey: 'state',
  },
  {
    header: 'Repository',
    accessorKey: 'repository',
  },
  {
    header: 'Priority',
    accessorKey: 'priority',
  },
  {
    header: 'Comments',
    accessorKey: 'comments',
  },
  {
    header: 'Created',
    accessorKey: 'createdAt',
    cell: (info: any) => {
      return new Date(info.getValue()).toLocaleDateString()
    },
  },
]
const search = ref('')
const select = ref()
const table = useTemplateRef<Table<Issue>>('table')

// Set initial column visibility
const columnVisibility = ref({
  title: true,
  author: true,
  assignee: true,
  state: true,
  repository: true,
  priority: true,
  comments: false,
  createdAt: false,
})

// Create a mapping of column headers to keys for faster lookups
const headerToKeyMap = computed(() => {
  const map = new Map<string, string>()
  columns.forEach((col) => {
    if ('header' in col && col.header && typeof col.header === 'string' && 'accessorKey' in col && col.accessorKey) {
      map.set(col.header, col.accessorKey as string)
    }
  })
  return map
})

const visibleColumnHeaders = computed({
  get() {
    // Get visible column headers more efficiently
    return Object.entries(columnVisibility.value)
      .filter(([, visible]) => visible)
      .map(([key]) => {
        const col = columns.find(col =>
          ('accessorKey' in col && col.accessorKey === key),
        )
        return col?.header
      })
      .filter(Boolean)
  },
  set(headers: string[]) {
    // Create a new visibility state object to trigger reactivity properly
    const newVisibility = { ...columnVisibility.value }

    // Reset all columns to hidden
    Object.keys(newVisibility).forEach((key) => {
      newVisibility[key as keyof typeof columnVisibility.value] = false
    })

    // Set selected columns to true using the map for faster lookups
    headers.forEach((header) => {
      const key = headerToKeyMap.value.get(header)
      if (key && key in newVisibility) {
        newVisibility[key as keyof typeof columnVisibility.value] = true
      }
    })

    columnVisibility.value = newVisibility
  },
})
</script>

<template>
  <div class="flex flex-col border rounded-lg py-4 space-y-4">
    <!-- header -->
    <div class="flex flex-col px-4">
      <h1 class="text-lg font-semibold">
        GitHub Issues
      </h1>
      <p class="text-sm text-muted">
        Issues reported on the project repositories.
      </p>
    </div>

    <div class="flex flex-row items-center justify-between gap-4 px-4">
      <NInput
        v-model="search"
        placeholder="Search Issues..."
        :una="{
          inputWrapper: 'w-full md:w-80',
        }"
      />

      <div class="flex items-center gap-x-2">
        <NSelect
          v-model="visibleColumnHeaders"
          :una="{
            selectTrigger: 'max-w-50',
          }"
          multiple
          :items="columns.map(column => column.header!)"
          placeholder="Visible columns"
        />

        <NTooltip
          content="Reload"
        >
          <NButton
            btn="text-gray"
            label="i-radix-icons-update"
            icon
            square
            @click="refresh()"
          />
        </NTooltip>

        <NTooltip
          content="Add Issues"
        >
          <NButton
            btn="soft-gray"
            label="i-radix-icons-plus"
            icon
            square
            @click="addIssues(Math.floor(Math.random() * 100))"
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
        tableRoot: 'border-x-0 border-b-0 rounded-0',
      }"
      :data="data ?? []"
      :global-filter="search"
      :column-visibility
      enable-row-selection
      enable-sorting
      row-id="id"
    >
      <!-- filters -->
      <template #state-filter="{ column }">
        <NSelect
          :items="['open', 'closed']"
          placeholder="All"
          :model-value="column.getFilterValue()"
          @update:model-value="column?.setFilterValue($event)"
        />
      </template>

      <template #priority-filter="{ column }">
        <NSelect
          :items="['low', 'medium', 'high', 'critical']"
          placeholder="All"
          :model-value="column.getFilterValue()"
          @update:model-value="column?.setFilterValue($event)"
        />
      </template>
      <!-- end filter -->

      <!-- cells -->
      <template #state-cell="{ cell }">
        <NBadge
          :badge="cell.row.original.state === 'open' ? 'outline-success' : 'outline-error'"
          :icon="cell.row.original.state === 'open' ? 'i-lucide-check-circle' : 'i-lucide-x-circle'"
          class="text-nowrap capitalize"
          :label="cell.row.original.state"
        />
      </template>

      <template #priority-cell="{ cell }">
        <NBadge
          :badge="
            cell.row.original.priority === 'low' ? 'outline-gray'
            : cell.row.original.priority === 'medium' ? 'outline-info'
              : cell.row.original.priority === 'high' ? 'outline-warning'
                : 'outline-error'"
          class="text-nowrap capitalize"
          :label="cell.row.original.priority"
        />
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
            :items="[10, 20, 30, 40, 50]"
            :default-value="10"
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
