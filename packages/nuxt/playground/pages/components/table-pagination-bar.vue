<!--
  PROTOTYPE for #631 — the opt-in pagination bar on NTable.
  Drop at packages/nuxt/playground/pages/components/table-pagination-bar.vue
  once #638 and #639 are merged into v1.0.0.

  Deliberately hand-wired via a template ref: this proves the LAYOUT questions
  without prejudging the state-access question (defineExpose spread vs
  provide/inject), which is the thing #631 has to settle. Three variants to
  react to, then a narrow-width case and the two degenerate states.
-->
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

// each variant owns its own pagination state
const pA = ref({ pageIndex: 0, pageSize: 10 })
const pB = ref({ pageIndex: 0, pageSize: 10 })
const pC = ref({ pageIndex: 0, pageSize: 10 })
const pNarrow = ref({ pageIndex: 0, pageSize: 10 })

const tA = useTemplateRef<Table<Row>>('tableA')
const tB = useTemplateRef<Table<Row>>('tableB')
const tC = useTemplateRef<Table<Row>>('tableC')
const tNarrow = useTemplateRef<Table<Row>>('tableNarrow')

// what the bar needs from the table, however it ends up getting it
function bar(t: Table<Row> | null, state: { pageIndex: number, pageSize: number }) {
  return {
    page: state.pageIndex + 1,
    total: t?.getFilteredRowModel().rows.length ?? 0,
    itemsPerPage: state.pageSize,
  }
}
</script>

<template>
  <div class="p-6 space-y-12">
    <!-- ══ Variant A ══ bar INSIDE table-root, below the table, outside ScrollArea -->
    <section class="space-y-2">
      <h2 class="font-medium">
        A — bar inside <code>table-root</code>, below the table
      </h2>
      <p class="text-sm text-muted-foreground">
        Reads as one component. Bar must sit OUTSIDE <code>ScrollArea</code> so it
        does not scroll horizontally with a wide table. Needs
        <code>table-root</code> to gain a border-top divider.
      </p>

      <div class="table-root">
        <NTable
          ref="tableA"
          v-model:pagination="pA"
          :columns
          :data
          class="border-0"
          :una="{ tableRoot: 'border-0 rounded-none' }"
        />
        <div class="flex items-center justify-between gap-4 border-t border-border px-4 py-3">
          <NPagination
            v-bind="bar(tA, pA)"
            show-info
            show-rows-per-page
            show-edges
            :_pagination-info="{ format: 'range' }"
            :_pagination-rows-per-page="{ label: 'Rows per page' }"
            @update:page="n => pA.pageIndex = n - 1"
            @update:items-per-page="n => pA.pageSize = n"
          />
        </div>
      </div>
    </section>

    <!-- ══ Variant B ══ bar OUTSIDE table-root entirely -->
    <section class="space-y-2">
      <h2 class="font-medium">
        B — bar outside <code>table-root</code>
      </h2>
      <p class="text-sm text-muted-foreground">
        What the docs example does today. Simplest, no preset changes, but the bar
        is visually detached from the table.
      </p>

      <NTable
        ref="tableB"
        v-model:pagination="pB"
        :columns
        :data
      />
      <NPagination
        class="mt-4"
        v-bind="bar(tB, pB)"
        show-info
        show-rows-per-page
        show-edges
        :_pagination-info="{ format: 'range' }"
        :_pagination-rows-per-page="{ label: 'Rows per page' }"
        @update:page="n => pB.pageIndex = n - 1"
        @update:items-per-page="n => pB.pageSize = n"
      />
    </section>

    <!-- ══ Variant C ══ shadcn's DataTablePagination shape: selection count left -->
    <section class="space-y-2">
      <h2 class="font-medium">
        C — shadcn shape: selection count on the left
      </h2>
      <p class="text-sm text-muted-foreground">
        shadcn puts "<em>n of m row(s) selected</em>" in the start region rather
        than a range. Only meaningful with row selection on.
      </p>

      <NTable
        ref="tableC"
        v-model:pagination="pC"
        :columns
        :data
        enable-row-selection
      />
      <NPagination
        class="mt-4"
        v-bind="bar(tC, pC)"
        show-rows-per-page
        show-edges
        :_pagination-rows-per-page="{ label: 'Rows per page' }"
        @update:page="n => pC.pageIndex = n - 1"
        @update:items-per-page="n => pC.pageSize = n"
      >
        <template #start>
          <span class="text-sm text-muted-foreground">
            {{ tC?.getFilteredSelectedRowModel().rows.length ?? 0 }} of
            {{ tC?.getFilteredRowModel().rows.length ?? 0 }} row(s) selected
          </span>
        </template>
      </NPagination>
    </section>

    <!-- ══ narrow ══ does the bar survive a constrained width? -->
    <section class="space-y-2">
      <h2 class="font-medium">
        Narrow (360px) — wrap behaviour
      </h2>
      <div class="max-w-90 border border-border border-dashed p-2">
        <NTable
          ref="tableNarrow"
          v-model:pagination="pNarrow"
          :columns
          :data
        />
        <NPagination
          class="mt-3"
          v-bind="bar(tNarrow, pNarrow)"
          show-info
          show-rows-per-page
          show-edges
          :_pagination-info="{ format: 'range' }"
          @update:page="n => pNarrow.pageIndex = n - 1"
          @update:items-per-page="n => pNarrow.pageSize = n"
        />
      </div>
    </section>

    <!-- ══ degenerate states ══ -->
    <section class="space-y-2">
      <h2 class="font-medium">
        Empty and loading — what should the bar show?
      </h2>

      <NTable :columns :data="emptyData" />
      <NPagination class="mt-4" :page="1" :items-per-page="10" :total="0" show-info show-edges />

      <NTable class="mt-6" :columns :data loading />
      <NPagination class="mt-4" :page="1" :items-per-page="10" :total="48" show-info show-edges />
    </section>
  </div>
</template>
