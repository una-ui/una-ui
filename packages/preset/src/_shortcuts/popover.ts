type PopoverPrefix = 'popover'

export const staticPopover: Record<`${PopoverPrefix}-${string}`, string> = {
  'popover-content': 'z-50 w-72 rounded-md border border-base bg-popover p-4 text-popover shadow-md outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  'popover-close': 'absolute right-2 top-2',
  'popover-arrow': '-mt-1px fill-base stroke-base',
}

export const dynamicPopover: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const popover = [
  ...dynamicPopover,
  staticPopover,
]
