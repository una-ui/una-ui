type AlertDialogPrefix = 'alert-dialog'

export const staticAlertDialog: Record<`${AlertDialogPrefix}-${string}` | AlertDialogPrefix, string> = {
  // base
  'alert-dialog': '',

  // sub-components
  'alert-dialog-cancel': 'mt-2 sm:mt-0',
  'alert-dialog-overlay': 'fixed inset-0 z-50 bg-black/80',
  'alert-dialog-content': 'bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',

  'alert-dialog-title': 'text-lg font-semibold',
  'alert-dialog-description': 'text-muted text-sm',
  'alert-dialog-header': 'flex flex-col gap-2 text-center sm:text-left',
  'alert-dialog-footer': 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
}

export const dynamicAlertDialog: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const alertDialog = [
  ...dynamicAlertDialog,
  staticAlertDialog,
]
