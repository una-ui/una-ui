type KbdPrefix = 'command'

export const staticCommand: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'command': '',

  // sub-components
  'command-dialog': 'overflow-hidden p-0 shadow-lg',
  'command-root': 'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
  'command-empty': 'py-6 text-center text-sm',
  'command-group': 'overflow-hidden p-1 text-foreground',
  'command-group-heading': 'text-foreground px-2 py-1.5 text-xs font-medium',
  'command-list': 'max-h-[300px] overflow-y-auto overflow-x-hidden',
  'command-item': 'relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
  'command-input': 'flex h-15 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted text-base disabled:cursor-not-allowed disabled:opacity-50',
  'command-input-wrapper': 'flex items-center border-b px-3',
  'command-icon': 'mr-2 h-4 w-4 shrink-0 opacity-50',
  'command-shortcut': 'ml-auto text-xs tracking-widest text-muted',
  'command-separator': '-mx-1 h-px bg-border',

}

export const dynamicCommand: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const command = [
  ...dynamicCommand,
  staticCommand,
]
