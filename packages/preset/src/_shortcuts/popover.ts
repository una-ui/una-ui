type PopoverPrefix = 'popover'

export const staticPopover: Record<`${PopoverPrefix}-${string}`, string> = {
  'popover-content': 'w-72 rounded-md border border-base bg-popover p-4 text-popover shadow-md outline-none',

  'popover-animation': 'duration-fast fade slide-2',
}

export const dynamicPopover: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const popover = [
  ...dynamicPopover,
  staticPopover,
]
