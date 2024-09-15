type KbdPrefix = 'dialog'

export const staticDialog: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'dialog': 'dialog-fade dialog-slow',

  // wrappers
  'dialog-overlay': 'fixed inset-0 z-30 bg-black/75 dialog-fade dialog-slow',
  'dialog-content': 'fixed z-100 left-50% top-50% translate-x--50% translate-y--50% max-h-85vh max-w-450px w-90vw rounded bg-popover px-4 py-1 shadow border border-$c focus:outline-none',
  'dialog-title': 'text-lg font-bold',
  'dialog-description': 'text-sm font-light',
  'dialog-close': 'absolute top-2 right-2 h-4 w-4 rounded-full bg-transparent hover:text-red',

  // animation variants
  'dialog-animate': 'data-[state=open]:animate-in data-[state=closed]:animate-out',
  'dialog-fast': 'dialog-animate data-[state=open]:animate-duration-300! data-[state=closed]:animate-duration-200!',
  'dialog-slow': 'dialog-animate data-[state=open]:animate-duration-700! data-[state=closed]:animate-duration-500!',

  'dialog-fade': 'dialog-animate data-[state=open]:fade-in data-[state=closed]:fade-out',
  'dialog-zoom': 'dialog-animate data-[state=open]:zoom-in-80 data-[state=closed]:zoom-out-80',
  'dialog-slide-left': 'dialog-animate data-[state=open]:animate-slide-in-from-left data-[state=closed]:animate-slide-out-to-left',
}

export const dynamicDialog: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const dialog = [
  ...dynamicDialog,
  staticDialog,
]
