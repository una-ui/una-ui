type KbdPrefix = 'alert-dialog'

export const staticAlertDialog: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'alert-dialog': '',

  // sub-components
  'alert-dialog-overlay': 'fixed inset-0 z-50 bg-black/80',
  'alert-dialog-content': 'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-base bg-base p-6 shadow-lg duration-200 sm:rounded-lg',

  'alert-dialog-title': 'text-lg font-semibold leading-none tracking-tight',
  'alert-dialog-description': 'text-sm text-muted',
}

export const dynamicAlertDialog: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const alertDialog = [
  ...dynamicAlertDialog,
  staticAlertDialog,
]
