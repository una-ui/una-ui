type SheetPrefix = 'sheet'

export const staticSheet: Record<`${SheetPrefix}-${string}` | SheetPrefix, string> = {
  // base
  'sheet': '',

  // sub components
  'sheet-content': 'bg-background fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out',
  'sheet-portal': '',
  'sheet-overlay': 'fixed inset-0 z-50 bg-black/80',
  'sheet-close': 'absolute right-4 top-4',
  'sheet-description': 'text-sm text-muted-foreground',
  'sheet-footer': 'mt-auto flex flex-col gap-2 p-4',
  'sheet-header': 'flex flex-col gap-1.5 p-4',
  'sheet-title': 'text-foreground font-semibold',

  // static variants
  'sheet-right': 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
  'sheet-left': 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
  'sheet-top': 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
  'sheet-bottom': 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
}

export const dynamicSheet: [RegExp, (params: RegExpExecArray) => string][] = [
// dynamic preset
]

export const sheet = [
  ...dynamicSheet,
  staticSheet,
]
