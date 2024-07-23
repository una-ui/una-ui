<script setup lang="ts">
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
} from '@tanstack/vue-table'

const autoReset = ref(true)

const select = ref()
const sorting = ref()

interface Person {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]

// const columnHelper = createColumnHelper<Person>()

const columns = [
  // columnHelper.group({
  //   header: 'Name',
  //   footer: props => props.column.id,
  //   columns: [
  //     columnHelper.accessor('firstName', {
  //       cell: info => info.getValue(),
  //       footer: props => props.column.id,
  //     }),
  //     columnHelper.accessor(row => row.lastName, {
  //       id: 'lastName',
  //       cell: info => info.getValue(),
  //       header: () => 'Last Name',
  //       footer: props => props.column.id,
  //     }),
  //   ],
  // }),
  // columnHelper.group({
  //   header: 'Info',
  //   footer: props => props.column.id,
  //   columns: [
  //     columnHelper.accessor('age', {
  //       header: () => 'Age',
  //       footer: props => props.column.id,
  //     }),
  //     columnHelper.group({
  //       header: 'More Info',
  //       columns: [
  //         columnHelper.accessor('visits', {
  //           header: () => 'Visits',
  //           footer: props => props.column.id,
  //         }),
  //         columnHelper.accessor('status', {
  //           header: 'Status',
  //           footer: props => props.column.id,
  //         }),
  //         columnHelper.accessor('progress', {
  //           header: 'Profile Progress',
  //           footer: props => props.column.id,
  //         }),
  //       ],
  //     }),
  //   ],
  // }),
  // {
  //   accessorKey: 'select',
  //   header: Checkbox,
  //   cell: Checkbox,
  // },
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
    enableSorting: true,
  },
  {
    header: 'Age',
    accessorKey: 'age',
    enableSorting: true,
  },
]

const data = ref(defaultData)

function rerender() {
  data.value = defaultData
}

const table = useVueTable({
  get data() {
    return data.value
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
  <div class="h-full w-8/12 overflow-auto">
    <pre>
    {{ columns }}
  </pre>

    {{ sorting }}
    {{ select }}
    <h1>Stack</h1>
    <div v-if="false" class="p-2">
      <table>
        <thead>
          <tr
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <th
              v-for="header in headerGroup.headers"
              :key="header.id"
              :colspan="header.colSpan"
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in table.getRowModel().rows" :key="row.id">
            <td v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr
            v-for="footerGroup in table.getFooterGroups()"
            :key="footerGroup.id"
          >
            <th
              v-for="header in footerGroup.headers"
              :key="header.id"
              :colSpan="header.colSpan"
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.footer"
                :props="header.getContext()"
              />
            </th>
          </tr>
        </tfoot>
      </table>
      <div class="h-4" />
      <button class="border p-2" @click="rerender">
        Rerender
      </button>
    </div>

    <h1>Una</h1>

    <NTable
      v-model="data"
      v-model:row-selection="select"
      v-model:sorting="sorting"
      :auto-reset-all="autoReset"
      :columns="columns"
      enable-row-selection
    />
  </div>
</template>

<!-- <style>
html {
  font-family: sans-serif;
  font-size: 14px;
}

table {
  border: 1px solid lightgray;
}

tbody {
  border-bottom: 1px solid lightgray;
}

th {
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;
  padding: 2px 4px;
}

tfoot {
  color: gray;
}

tfoot th {
  font-weight: normal;
}
</style> -->
