type KbdPrefix = 'alert-dialog'

export const staticAlertDialog: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'alert-dialog': '',

  // sub-components
  'alert-dialog-cancel': 'mt-2 sm:mt-0',
  'alert-dialog-overlay': 'fixed inset-0 z-50 bg-black/80',
  'alert-dialog-content': 'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg',

  'alert-dialog-title': 'text-lg font-semibold',
  'alert-dialog-description': 'text-muted text-sm',
  'alert-dialog-header': 'flex flex-col gap-2 text-center sm:text-left',
  'alert-dialog-footer': 'flex flex-col gap-2 sm:flex-row sm:justify-end',
}

export const dynamicAlertDialog: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const alertDialog = [
  ...dynamicAlertDialog,
  staticAlertDialog,
]
