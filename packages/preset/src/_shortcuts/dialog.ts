type KbdPrefix = 'dialog'

export const staticDialog: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'dialog': '',

  // wrappers
  'dialog-overlay': 'fixed inset-0 z-30 bg-black/75 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  'dialog-content': 'fixed z-100 left-50% top-50% translate-x--50% translate-y--50% max-h-85vh max-w-450px w-90vw rounded bg-popover px-4 py-1 shadow border border-$c focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
  'dialog-title': 'text-lg font-bold',
  'dialog-description': 'text-sm font-light',
  'dialog-close': 'absolute top-2 right-2 h-4 w-4 rounded-full bg-transparent hover:text-red',
}

export const dynamicDialog: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const dialog = [
  ...dynamicDialog,
  staticDialog,
]
