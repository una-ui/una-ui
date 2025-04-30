type KbdPrefix = 'alert-dialog'

export const staticAlertDialog: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'alert-dialog': '',

  // sub-components
  'alert-dialog-cancel': 'mt-2 sm:mt-0',
  'alert-dialog-overlay': 'fixed inset-0 z-50 bg-black/80',
  'alert-dialog-content': 'bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',

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
