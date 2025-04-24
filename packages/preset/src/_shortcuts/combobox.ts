type ComboboxPrefix = 'combobox'

export const staticCombobox: Record<`${ComboboxPrefix}-${string}` | ComboboxPrefix, string> = {
// base
  'combobox': '',

  'combobox-item': 'data-[highlighted]:bg-accent data-[highlighted]:text-accent relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
  'combobox-item-indicator': 'ml-auto',
  'combobox-anchor': 'min-w-200px',
  'combobox-empty': 'py-6 text-center text-sm',
  'combobox-group': 'overflow-hidden p-1 text-foreground',
  'combobox-label': 'px-2 py-1.5 text-xs text-muted font-medium',
  'combobox-content': 'z-50 w-[200px] rounded-md border bg-popover text-popover overflow-hidden shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  'combobox-separator': 'bg-border -mx-1 h-px',
  'combobox-viewport': 'max-h-300px scroll-py-1 overflow-x-hidden overflow-y-auto',
}

export const dynamicCombobox: [RegExp, (params: RegExpExecArray) => string][] = [
// dynamic preset
]

export const combobox = [
  ...dynamicCombobox,
  staticCombobox,
]
