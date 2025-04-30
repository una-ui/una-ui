type KbdPrefix = 'alert-dialog'

export const staticAlertDialog: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'alert-dialog': '',

  // sub-components
  'alert-dialog-cancel': 'mt-2 sm:mt-0',
  'alert-dialog-overlay': 'fixed inset-0 z-50 bg-black/80',
  'alert-dialog-content': 'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-48% data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-48% sm:rounded-lg',

  'alert-dialog-title': 'text-lg font-semibold',
  'alert-dialog-description': 'text-muted text-sm',
}

export const dynamicAlertDialog: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const alertDialog = [
  ...dynamicAlertDialog,
  staticAlertDialog,
]
