type SheetPrefix = 'sheet'

export const staticSheet: Record<`${SheetPrefix}-${string}` | SheetPrefix, string> = {
  // base
  'sheet': '',

  // sub components
  'sheet-content': 'fixed z-50 gap-4 bg-base p-6 shadow-lg transition animate-in fade-in-0 ease-in-out ',
  'sheet-portal': '',
  'sheet-overlay': 'fixed inset-0 z-50 bg-black/80',
  'sheet-close': 'absolute right-4 top-4',
  'sheet-description': 'text-sm text-muted',
  'sheet-footer': 'flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2',
  'sheet-header': 'flex flex-col gap-y-2 text-center sm:text-left',
  'sheet-title': 'text-lg font-semibold text-base',

  // static variants
  'sheet-top': 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
  'sheet-right': 'inset-y-0 right-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
  'sheet-bottom': 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
  'sheet-left': 'inset-y-0 left-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
}

export const dynamicSheet: [RegExp, (params: RegExpExecArray) => string][] = [
// dynamic preset
]

export const sheet = [
  ...dynamicSheet,
  staticSheet,
]
