type ComboboxPrefix = 'combobox'

export const staticCombobox: Record<`${ComboboxPrefix}-${string}` | ComboboxPrefix, string> = {
// base
  'combobox': 'flex',
  'combobox-trigger-info-icon': 'i-info',
  'combobox-trigger-error-icon': 'i-error',
  'combobox-trigger-success-icon': 'i-success',
  'combobox-trigger-warning-icon': 'i-warning',
  'combobox-trigger-trailing-icon': 'i-lucide-chevrons-up-down',
  'combobox-input-leading-icon': 'i-lucide-search',

  'combobox-trigger': 'px-0.8571428571428571em min-w-200px w-full justify-between font-normal [&>span]:truncate',
  'combobox-trigger-trailing': 'size-1.1428571428571428em data-[status=error]:text-error data-[status=success]:text-success data-[status=warning]:text-warning data-[status=info]:text-info data-[status=default]:(n-disabled) rtl:mr-auto ltr:ml-auto',
  'combobox-trigger-leading': 'size-1.1428571428571428em',

  'combobox-item': 'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm px-0.5em py-0.375em text-1em outline-none select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
  'combobox-item-indicator': 'ml-auto',
  'combobox-item-indicator-icon': '',
  'combobox-item-indicator-icon-name': 'i-check',
  'combobox-anchor': 'w-full',
  'combobox-empty': 'py-1.7142857142857142em text-center text-1em leading-1.4285714285714286em',
  'combobox-group': 'overflow-hidden p-0.2857142857142857em text-foreground',
  'combobox-label': 'px-0.6666666666666666em py-0.5em text-0.8571428571428571em leading-1.1428571428571428em text-muted-foreground font-medium',
  'combobox-list': 'z-50 w-[--reka-popper-anchor-width] rounded-md border bg-popover text-popover-foreground overflow-hidden shadow-md outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
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
