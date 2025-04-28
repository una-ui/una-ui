type ResizablePrefix = 'resizable'

export const staticResizable: Record<`${ResizablePrefix}-${string}` | ResizablePrefix, string> = {
// config
  'resizable-handle-default-variant': 'resizable-handle-outline-white',
  'resizable-handle-icon': 'i-lucide-grip-vertical',

  // base
  'resizable': 'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
  'resizable-panel': '',
  'resizable-handle-wrapper': 'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-base focus-visible:ring-offset-1 [&[data-orientation=vertical]]:h-px [&[data-orientation=vertical]]:w-full [&[data-orientation=vertical]]:after:left-0 [&[data-orientation=vertical]]:after:h-1 [&[data-orientation=vertical]]:after:w-full [&[data-orientation=vertical]]:after:-translate-y-1/2 [&[data-orientation=vertical]]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90',
  'resizable-handle': 'z-10 flex h-4 w-3 items-center justify-center rounded-sm',
  'resizable-handle-icon-wrapper': 'w-2.5 h-2.5',

  // static variants
  'resizable-handle-solid-black': 'bg-inverted',
  'resizable-handle-outline-white': 'bg-border ring-1 ring-base',
}

export const dynamicResizable: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^resizable-handle-solid(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-100 dark:bg-${c}-800`],
  [/^resizable-handle-outline(-(\S+))?$/, ([, , c = 'primary']) => `bg-border ring-1 ring-${c}-700/60 dark:ring-${c}-400/60`],
]

export const resizable = [
  ...dynamicResizable,
  staticResizable,
]
