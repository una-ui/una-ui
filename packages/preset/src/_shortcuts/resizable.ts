type ResizablePrefix = 'resizable'

export const staticResizable: Record<`${ResizablePrefix}-${string}`, string> = {
  // config
  'resizable-handle-icon-name': 'i-lucide-grip-vertical',

  // base
  'resizable-panel-group': 'flex h-full w-full data-[orientation=vertical]:flex-col',
  'resizable-panel': '',
  'resizable-handle': 'relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:outline-none data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2 data-[orientation=vertical]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90',
  'resizable-handle-icon-wrapper': 'bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border',
  'resizable-handle-icon': 'square-2.5',

  // static variants
  'resizable-handle-solid-gray': 'bg-border focus-visible:ring-foreground/58',
  'resizable-handle-solid-black': 'bg-foreground focus-visible:ring-foreground/58',
  'resizable-handle-outline-gray': 'ring-1 ring-ring focus-visible:ring-foreground/58',
}

export const dynamicResizable: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^resizable-handle-solid(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-200 dark:bg-${c}-700/58 focus-visible:ring-${c}-200 dark:focus-visible:ring-${c}-700/58`],
  [/^resizable-handle-outline(-(\S+))?$/, ([, , c = 'gray']) => `ring-1 ring-${c}-200 dark:ring-${c}-700/58 focus-visible:ring-${c}-200 dark:focus-visible:ring-${c}-700/58`],
]

export const resizable = [
  ...dynamicResizable,
  staticResizable,
]
