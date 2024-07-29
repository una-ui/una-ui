import type { ColumnDef } from '@tanstack/vue-table'
import type { Task } from './rows'

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'title',
    header: 'Title',
    enableHiding: true,
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'label',
    header: 'Label',
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
  },
]

export default columns
