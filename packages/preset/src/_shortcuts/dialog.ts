type KbdPrefix = 'dialog'

export const staticDialog: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'dialog': '',

  // sub-components
  'dialog-overlay': 'fixed inset-0 z-50 data-[state=closed]:animate-out data-[state=open]:animate-in bg-black/80 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
  'dialog-content': 'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-base bg-base p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-48% data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-48% sm:rounded-lg',
  'dialog-scroll-content': 'relative z-50 grid w-full max-w-lg my-8 gap-4 border border-base bg-base p-6 shadow-lg duration-200 sm:rounded-lg md:w-full',
  'dialog-header': 'flex flex-col gap-y-1.5 text-center sm:text-left',
  'dialog-title': 'text-lg font-semibold leading-none tracking-tight',
  'dialog-description': 'text-sm text-muted',
  'dialog-close': 'absolute right-4 top-4',
  'dialog-footer': 'flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2',
}

export const dynamicDialog: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const dialog = [
  ...dynamicDialog,
  staticDialog,
]
