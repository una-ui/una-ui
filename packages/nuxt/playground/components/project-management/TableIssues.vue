<script setup lang="ts">
import type { ColumnDef, RowSelectionState, Table } from '@tanstack/vue-table'
import type { Issue } from '../../data'
import { NAvatar } from '#components'

const limit = ref(50)

const { data, refresh } = await useFetch('/api/issues', {
  query: { limit },
  onResponse({ response }) {
    if (import.meta.client) {
      toast({
        title: 'Issues Added',
        description: `Successfully added ${response._data.length} new issues.`,
        leading: 'i-lucide-check-circle text-success',
      })
    }
  },
  watch: false,
})

async function addIssues() {
  limit.value += Math.floor(Math.random() * 100)
  await refresh()
}

const columns = [
  {
    header: 'Title',
    accessorKey: 'title',
    cell: (info: any) => {
      const title = info.getValue() || 'No Title'
      const number = info.row.original.number

      return h('div', {
        class: 'text-sm leading-none',
      }, [
        h('span', {}, title),
        number
          ? h('span', {
              class: 'text-sm text-muted-foreground ml-2',
            }, `#${number}`)
          : null,
      ])
    },
  },
  {
    header: 'Author',
    accessorKey: 'author',
    cell: (info: any) => {
      const value = info.getValue()
      if (!value) {
        return h('span', {
          class: 'text-muted-foreground text-sm',
        }, 'Unknown')
      }

      const username = value.username || 'Unknown'
      const email = value.email || ''

      return h('div', {
        class: 'flex items-center',
      }, [
        h(NAvatar, {
          src: value.avatar,
          alt: username,
          size: 'xs',
        }),
        [
          h('div', {
            class: 'ml-2',
          }, [
            h('div', {
              class: 'text-sm font-semibold leading-none',
            }, username),
            h('div', {
              class: 'text-xs text-muted-foreground',
            }, email),
          ]),
        ],
      ])
    },
    enableSorting: false,
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue)
        return true
      const author = row.getValue(columnId) as { username?: string } | null
      if (!author)
        return filterValue === 'Unknown'
      return author.username?.toLowerCase().includes(filterValue.toLowerCase()) ?? false
    },
  },
  {
    header: 'Assignee',
    accessorKey: 'assignee',
    cell: (info: any) => {
      const value = info.getValue()
      if (!value) {
        return h('span', {
          class: 'text-muted-foreground text-sm',
        }, 'Unassigned')
      }

      const username = value.username || 'Unknown'
      const email = value.email || ''

      return h('div', {
        class: 'flex items-center',
      }, [
        h(NAvatar, {
          src: value.avatar,
          alt: username,
          size: 'xs',
        }),
        [
          h('div', {
            class: 'ml-2',
          }, [
            h('div', {
              class: 'text-sm font-semibold leading-none',
            }, username),
            h('div', {
              class: 'text-xs text-muted-foreground',
            }, email),
          ]),
        ],
      ])
    },
    enableSorting: false,
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue)
        return true
      const assignee = row.getValue(columnId) as { username?: string } | null
      if (!assignee)
        return filterValue === 'Unassigned'
      return assignee.username?.toLowerCase().includes(filterValue.toLowerCase()) ?? false
    },
  },
  {
    header: 'State',
    accessorKey: 'state',
    cell: (info: any) => {
      const value = info.getValue()
      if (!value)
        return null

      return h('div', {}, value)
    },
  },
  {
    header: 'Repository',
    accessorKey: 'repository',
    cell: (info: any) => {
      const value = info.getValue()
      if (!value)
        return null

      return h('div', {}, value)
    },
  },
  {
    header: 'Priority',
    accessorKey: 'priority',
    cell: (info: any) => {
      const value = info.getValue()
      if (!value)
        return null

      return h('div', {}, value)
    },
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue || !Array.isArray(filterValue) || filterValue.length === 0)
        return true
      const value = row.getValue(columnId)
      return filterValue.includes(value)
    },
  },
  {
    header: 'Username',
    accessorKey: 'username',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
  {
    header: 'Progress',
    accessorKey: 'progress',
  },
  {
    header: 'Actions',
    accessorKey: 'actions',
    enableSorting: false,
    enableColumnFilter: false,
  },
] satisfies ColumnDef<Issue>[]
const search = ref('')
const select = ref<RowSelectionState>()
const table = useTemplateRef<Table<Issue>>('table')

// Set initial column visibility
const columnVisibility = ref({
  title: true,
  author: false,
  assignee: true,
  state: true,
  repository: false,
  priority: true,
  username: false,
  email: false,
  status: false,
  progress: true,
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
        return col?.header as string
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

const alertDialogData = reactive<{
  open: boolean
  meta: Issue | null
}>({
  open: false,
  meta: null,
})
</script>

<template>
  <div class="flex flex-col space-y-4">
    <!-- header -->
    <div class="flex flex-row items-center justify-between gap-4">
      <div class="hidden lg:block">
        <NTabs
          default-value="all"
          :items="[
            {
              value: 'all',
              name: 'All Issues',
            },
            {
              value: 'open',
              name: 'Open',
              _tabsTrigger: {
                leading: 'i-lucide-circle-dot',
              },
            },
            {
              value: 'in-progress',
              name: 'In Progress',
              _tabsTrigger: {
                leading: 'i-lucide-loader',
              },
            },
            {
              value: 'completed',
              name: 'Completed',
              _tabsTrigger: {
                leading: 'i-lucide-check-circle',
              },
            },
          ]"
        />
      </div>

      <div class="flex grow flex-wrap items-center justify-end gap-4 lg:gap-2">
        <NInput
          v-model="search"
          placeholder="Search Issues..."
          class="h-8"
          :una="{
            inputWrapper: 'w-full md:w-80',
          }"
        />
        <NSelect
          v-model="visibleColumnHeaders"
          :una="{
            selectTrigger: 'max-w-50 h-8 mr-auto lg:mr-0',
          }"
          multiple
          :_select-trigger="{
            leading: 'i-lucide-settings-2',
            trailing: 'i-lucide-chevrons-up-down',
          }"
          :items="columns.map(column => column.header!)"
          placeholder="Visible columns"
        >
          <template #value>
            Columns
          </template>
        </NSelect>

        <NTooltip
          content="Reload"
        >
          <NButton
            btn="outline-gray"
            label="i-radix-icons-update"
            square="8"
            icon
            @click="refresh()"
          />
        </NTooltip>

        <NTooltip
          content="Add Issues"
        >
          <NButton
            btn="outline-gray"
            label="i-radix-icons-plus"
            square="8"
            icon
            @click="addIssues()"
          />
        </NTooltip>
      </div>
    </div>

    <!-- table -->
    <NTable
      ref="table"
      v-model:row-selection="select"
      :columns
      :data="data ?? []"
      :pagination="{
        pageIndex: 0,
        pageSize: 10,
      }"
      :global-filter="search"
      :una="{
        tableCell: 'py-2',
        tableHead: 'h-10 bg-muted',
      }"
      class="overflow-x-auto"
      :column-visibility
      enable-row-selection enable-sorting
      row-id="id"
    >
      <!-- filters -->
      <template #state-filter="{ column }">
        <NSelect
          :items="['All', 'Open', 'Closed']"
          default-value="All"
          placeholder="All"
          :model-value="column.getFilterValue()"
          @update:model-value="column?.setFilterValue($event === 'All' ? null : $event)"
        />
      </template>

      <template #author-filter="{ column }">
        <NInput
          placeholder="Filter author..."
          :model-value="column.getFilterValue()"
          @update:model-value="column?.setFilterValue($event)"
        />
      </template>

      <template #priority-filter="{ column }">
        <NSelect
          :items="['low', 'medium', 'high', 'critical']"
          multiple
          :una="{
            selectTrigger: 'max-w-40 capitalize',
            selectItem: 'capitalize',
          }"
          :model-value="column.getFilterValue() || ['low', 'medium', 'high', 'critical']"
          @update:model-value="column?.setFilterValue(Array.isArray($event) && $event.length ? $event : null)"
        />
      </template>

      <template #status-filter="{ column }">
        <NSelect
          :items="['triaged', 'in-progress', 'completed', 'cancelled']"
          placeholder="All"
          :model-value="column.getFilterValue()"
          @update:model-value="column?.setFilterValue($event)"
        />
      </template>

      <template #progress-filter="{ column }">
        <div class="flex items-center space-x-2">
          <NInput
            type="number"
            class="min-w-20"
            placeholder="Min"
            :model-value="column.getFilterValue()?.[0] ?? ''"
            @update:model-value="column?.setFilterValue((old: [number, number]) => [
              $event,
              old?.[1],
            ])"
          />

          <NInput
            type="number"
            class="min-w-20"
            placeholder="Max"
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
      <template #state-cell="{ cell }">
        <NBadge
          v-if="cell.row.original.state"
          :badge="cell.row.original.state === 'open' ? 'outline-success' : 'outline-error'"
          :icon="cell.row.original.state === 'open' ? 'i-lucide-check-circle' : 'i-lucide-x-circle'"
          class="text-nowrap capitalize"
          :label="cell.row.original.state"
        />
      </template>

      <template #priority-cell="{ cell }">
        <NBadge
          v-if="cell.row.original.priority"
          :badge="
            cell.row.original.priority === 'low' ? 'outline-gray'
            : cell.row.original.priority === 'medium' ? 'outline-info'
              : cell.row.original.priority === 'high' ? 'outline-warning'
                : 'outline-error'"
          class="text-nowrap capitalize"
          :label="cell.row.original.priority"
        />
      </template>

      <template #status-cell="{ cell }">
        <NBadge
          v-if="cell.row.original.status"
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
        <div v-if="typeof cell.row.original.progress === 'number'" class="flex items-center">
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

      <template #actions-cell="{ cell }">
        <NDropdownMenu
          :items="[
            {
              label: 'View',
              leading: 'i-lucide-eye',
            },
            {
              label: 'Edit',
              leading: 'i-lucide-pencil',
            },
            {},
            {
              label: 'Delete',
              class: 'text-error',
              leading: 'i-lucide-trash',
              dropdownMenuItem: 'error',
              onSelect: () => {
                alertDialogData.open = true
                alertDialogData.meta = cell.row.original
              },
            },
          ]"
          :_dropdown-menu-trigger="{
            icon: true,
            btn: 'ghost-gray data-[state=open]:soft-gray',
            label: 'i-lucide-ellipsis',
            square: 8,
          }"
          :_dropdown-menu-content="{
            side: 'bottom',
            align: 'end',
          }"
        />
      </template>
    </NTable>

    <!-- footer -->
    <div class="flex items-center justify-between px-4">
      <div class="hidden text-sm text-muted-foreground sm:block">
        {{ table?.getFilteredSelectedRowModel().rows.length.toLocaleString() }} of
        {{ table?.getFilteredRowModel().rows.length.toLocaleString() }} row(s) selected.
      </div>

      <div class="ml-auto flex items-center space-x-6 lg:space-x-8">
        <div class="hidden items-center text-sm font-medium sm:flex space-x-2">
          <span class="text-nowrap">Rows per page</span>
          <NSelect
            :items="[5, 10, 20, 30, 40, 50]"
            :_select-trigger="{
              class: 'h-8',
            }"
            :default-value="10"
            :model-value="table?.getState().pagination.pageSize"
            @update:model-value="table?.setPageSize($event as unknown as number)"
          />
        </div>

        <div class="flex items-center gap-4">
          <div class="whitespace-nowrap text-sm font-medium">
            Page {{ (table?.getState().pagination.pageIndex ?? 0) + 1 }} of
            {{ table?.getPageCount().toLocaleString() }}
          </div>

          <NPagination
            square="8"
            :page="(table?.getState().pagination.pageIndex ?? 0) + 1"
            :total="table?.getFilteredRowModel().rows.length"
            :show-list-item="false"
            :items-per-page="table?.getState().pagination.pageSize ?? 5"
            @update:page="table?.setPageIndex($event - 1)"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- confirm delete dialog -->
  <NAlertDialog
    v-model:open="alertDialogData.open"
    description="This action cannot be undone."
    :_alert-dialog-action="{
      btn: 'soft-error',
    }"
    @action="console.log('issue deleted', alertDialogData.meta?.id)"
  >
    <template #title>
      Delete Issue
      <span class="text-error">
        #{{ alertDialogData.meta?.number }}: {{ alertDialogData.meta?.title }}?
      </span>
    </template>
  </NAlertDialog>
</template>
