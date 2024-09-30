type KbdPrefix = 'dialog'

export const staticDialog: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'dialog': '',

  // sub-components
  'dialog-overlay': 'fixed inset-0 z-50 bg-black/80 animate-base animate-duration-fast animate-fade-0',
  'dialog-content': 'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-base bg-base p-6 shadow-lg animate-default data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-48% data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-48% sm:rounded-lg',

  'dialog-scroll-overlay': 'fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 animate-base animate-duration-fast animate-fade-0',
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
