type PopoverPrefix = 'popover'

export const staticPopover: Record<`${PopoverPrefix}-${string}`, string> = {
  'popover-content': 'z-50 w-72 rounded-md border border-base bg-popover p-4 text-popover shadow-md outline-none animate-default',
}

export const dynamicPopover: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const popover = [
  ...dynamicPopover,
  staticPopover,
]
