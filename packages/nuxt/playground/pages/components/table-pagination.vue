<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'

interface Row { id: number, name: string, email: string, status: string, amount: number }

const rows: Row[] = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  name: `Person ${i + 1}`,
  email: `person${i + 1}@example.com`,
  status: ['active', 'pending', 'archived'][i % 3],
  amount: (i + 1) * 37,
}))

const columns: ColumnDef<Row>[] = [
  { header: 'Name', accessorKey: 'name' },
  { header: 'Email', accessorKey: 'email' },
  { header: 'Status', accessorKey: 'status' },
  { header: 'Amount', accessorKey: 'amount' },
]

const data = ref(rows)
const emptyData = ref<Row[]>([])

const pDefault = ref({ pageIndex: 0, pageSize: 10 })
const pSelect = ref({ pageIndex: 0, pageSize: 10 })
const pOverride = ref({ pageIndex: 2, pageSize: 5 })
const pSlot = ref({ pageIndex: 0, pageSize: 10 })
const pStandalone = ref({ pageIndex: 0, pageSize: 10 })

// server-side: the table only ever holds the current page, and reports the
// full size through `rowCount`
const pServer = ref({ pageIndex: 0, pageSize: 10 })
const serverPage = computed(() => rows.slice(
  pServer.value.pageIndex * pServer.value.pageSize,
  (pServer.value.pageIndex + 1) * pServer.value.pageSize,
))

const standaloneTable = useTemplateRef<Table<Row>>('standaloneTable')
</script>

<template>
  <div class="p-6 space-y-12">
    <section class="space-y-2">
      <h2 class="font-medium">
        Default — <code>show-pagination</code>
      </h2>
      <NTable
        id="t-default"
        v-model:pagination="pDefault"
        :columns
        :data
        show-pagination
      />
    </section>

    <section class="space-y-2">
      <h2 class="font-medium">
        Row selection on — start region shows the selection count
      </h2>
      <NTable
        id="t-select"
        v-model:pagination="pSelect"
        :columns
        :data
        enable-row-selection
        show-pagination
      />
    </section>

    <section class="space-y-2">
      <h2 class="font-medium">
        <code>_table-pagination</code> overrides — page format, no rows-per-page, no edges
      </h2>
      <NTable
        id="t-override"
        v-model:pagination="pOverride"
        :columns
        :data
        show-pagination
        :_table-pagination="{ showRowsPerPage: false, showEdges: false, _paginationInfo: { format: 'page' } }"
      />
    </section>

    <section class="space-y-2">
      <h2 class="font-medium">
        <code>#pagination</code> slot replaces the whole bar
      </h2>
      <NTable
        id="t-slot"
        v-model:pagination="pSlot"
        :columns
        :data
        show-pagination
      >
        <template #pagination="{ pagination }">
          <div class="flex items-center justify-between border-t border-border px-4 py-3 text-sm">
            <span id="t-slot-text">custom bar — page index {{ pagination.pageIndex }}</span>
            <NButton size="xs" btn="outline-gray" label="next" @click="pSlot.pageIndex++" />
          </div>
        </template>
      </NTable>
    </section>

    <section class="space-y-2">
      <h2 class="font-medium">
        Server-side — <code>manual-pagination</code> + <code>row-count</code>
      </h2>
      <NTable
        id="t-server"
        v-model:pagination="pServer"
        :columns
        :data="serverPage"
        manual-pagination
        :row-count="rows.length"
        show-pagination
      />
    </section>

    <section class="space-y-2">
      <h2 class="font-medium">
        Standalone — shadcn shape, <code>NTablePagination :table</code> outside the root
      </h2>
      <NTable
        ref="standaloneTable"
        v-model:pagination="pStandalone"
        :columns
        :data
      />
      <NTablePagination
        v-if="standaloneTable"
        id="t-standalone-bar"
        class="mt-4 border-0 px-0"
        :table="standaloneTable"
      />
    </section>

    <section class="space-y-2">
      <h2 class="font-medium">
        Empty and loading
      </h2>
      <NTable id="t-empty" :columns :data="emptyData" show-pagination />
      <NTable id="t-loading" class="mt-6" :columns :data loading show-pagination />
    </section>
  </div>
</template>
