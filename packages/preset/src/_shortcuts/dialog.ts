type KbdPrefix = 'dialog'

export const staticDialog: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'dialog': '',

  // sub-components
  'dialog-overlay': 'fixed inset-0 z-50 bg-black/80',
  'dialog-content': 'bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',

  'dialog-scroll-overlay': 'fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80',
  'dialog-scroll-content': 'relative z-50 grid w-full max-w-lg my-8 gap-4 border border-base bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full',

  'dialog-header': 'flex flex-col gap-y-1.5 text-center sm:text-left',
  'dialog-title': 'text-lg font-semibold leading-none tracking-tight',
  'dialog-description': 'text-sm text-muted-foreground',
  'dialog-close': 'absolute right-4 top-4',
  'dialog-footer': 'flex flex-col-reverse sm:flex-row sm:justify-end gap-2',
}

export const dynamicDialog: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const dialog = [
  ...dynamicDialog,
  staticDialog,
]
