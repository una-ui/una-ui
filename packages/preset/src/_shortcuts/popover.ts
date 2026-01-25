type PopoverPrefix = 'popover'

export const staticPopover: Record<`${PopoverPrefix}-${string}`, string> = {
  'popover-content': 'z-50 w-72 rounded-md border border-base bg-popover p-4 text-popover shadow-md outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  'popover-close': 'rounded-full h-6 w-6 inline-flex items-center justify-center text-foreground/80 absolute top-2 right-2 hover:text-foreground focus:(outline outline-foreground outline-1) cursor-default',
  'popover-close-icon': 'i-close',
  'popover-arrow': 'fill-$c-popover stroke-base stroke-2',
}

export const dynamicPopover: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const popover = [
  ...dynamicPopover,
  staticPopover,
]
