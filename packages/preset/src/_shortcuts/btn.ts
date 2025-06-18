type BtnPrefix = 'btn'

export const staticBtn: Record<`${BtnPrefix}-${string}` | BtnPrefix, string> = {
  // config
  'btn-default-variant': 'btn-solid',
  'btn-loading-icon': 'i-loading',

  // base
  'btn': 'text-foreground btn-rectangle bg-transparent transition-colors leading-1.4285714285714286em shrink-0 gap-x-0.5714285714285714em rounded-md whitespace-nowrap inline-flex justify-center items-center btn-disabled font-medium outline-none',
  'btn-disabled': 'disabled:n-disabled',
  'btn-label': '',
  'btn-icon-label': 'size-1.1428571428571428em',
  'btn-leading': 'size-1.1428571428571428em',
  'btn-trailing': 'size-1.1428571428571428em',
  'btn-loading': 'animate-spin size-1.1428571428571428em',
  'btn-rectangle': 'h-2.5714285714285716em px-1.1428571428571428em py-0.5714285714285714em',
  'btn-square': 'square-2.5714285714285716em p-0',

  // options
  'btn-block': 'w-full',
  'btn-reverse': 'flex-row-reverse',

  // variants
  'btn-solid-primary': 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 btn-focus',
  'btn-solid': 'btn-solid-primary',
  'btn-solid-gray': 'border bg-background dark:bg-input/50 shadow-xs bg-accent dark:hover:bg-input btn-focus',
  'btn-solid-secondary': 'btn-solid-gray',
  'btn-solid-white': 'border bg-background shadow-xs hover:bg-accent dark:border-input dark:hover:bg-input',
  'btn-solid-black': 'bg-foreground text-background shadow-xs btn-focus',

  'btn-outline-primary': 'shadow-xs btn-focus text-primary bg-background dark:bg-input/30 border border-primary hover:bg-primary/10',
  'btn-outline': 'btn-outline-primary',
  'btn-outline-gray': 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
  'btn-outline-white': 'text-foreground border shadow-xs btn-focus hover:bg-input/50',

  'btn-link-primary': 'text-primary btn-focus hover:underline underline-offset-4',
  'btn-link': 'btn-link-primary',
  'btn-link-gray': 'text-muted-foreground btn-focus hover:text-foreground hover:underline underline-offset-4',
  'btn-link-black': 'text-foreground btn-focus hover:underline underline-offset-4',
  'btn-link-muted': 'text-muted-foreground hover:underline underline-offset-4 btn-focus',
  'btn-link-accent': 'text-accent-foreground hover:underline underline-offset-4 btn-focus',

  'btn-text-primary': 'text-primary btn-focus',
  'btn-text': 'btn-text-primary',
  'btn-text-gray': 'text-muted-foreground btn-focus hover:text-foreground',
  'btn-text-black': 'text-foreground btn-focus',
  'btn-text-muted': 'text-muted-foreground btn-focus',
  'btn-text-accent': 'text-accent-foreground hover:text-accent-foreground/80 btn-focus',

  'btn-soft-primary': 'bg-primary/10 text-primary shadow-xs hover:bg-primary/15 btn-focus',
  'btn-soft': 'btn-soft-primary',
  'btn-soft-gray': 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 btn-focus',
  'btn-soft-secondary': 'btn-soft-gray',
  'btn-soft-black': 'text-foreground bg-background btn-focus shadow-xs',
  'btn-soft-accent': 'text-accent-foreground bg-accent btn-focus',

  'btn-ghost-primary': 'hover:bg-primary/10 text-primary dark:hover:bg-primary/15 btn-focus',
  'btn-ghost': 'btn-ghost-primary',
  'btn-ghost-gray': 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',

  'btn-ghost-muted': 'hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50 btn-focus',
  'btn-ghost-white': 'text-foreground hover:bg-secondary/50 btn-focus',

  'btn-focus-primary': 'focus-visible:ring-3px focus-visible:border focus-visible:border-ring focus-visible:ring-ring/50',
  'btn-focus': 'btn-focus-primary',
}

export const dynamicBtn: [RegExp, (params: RegExpExecArray) => string][] = [
  // base
  [/^btn-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:ring-3px focus-visible:border focus-visible:border-${c}-400 dark:focus-visible:border-${c}-800 focus-visible:ring-${c}-400/50 dark:focus-visible:ring-${c}-800/50`],

  // variants
  [/^btn-solid(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-background shadow-xs bg-${c}-600 hover:bg-${c}-500 dark:bg-${c}-500 dark:hover:bg-${c}-400`],
  [/^btn-text(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-${c}-600 dark:text-${c}-500 hover:text-${c}-500 dark:hover:text-${c}-400`],
  [/^btn-outline(-(\S+))?$/, ([, , c = 'primary']) => `shadow-xs btn-focus-${c} text-${c}-500 dark:text-${c}-400 bg-background dark:bg-input/30 border border-${c}-500 dark:border-${c}-400 hover:bg-${c}-50 dark:hover:bg-${c}-950`],
  [/^btn-soft(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-${c}-600 dark:text-${c}-400 bg-${c}-50 dark:bg-${c}-950 hover:bg-${c}-100 dark:hover:bg-${c}-900`],
  [/^btn-ghost(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-${c}-600 dark:text-${c}-400 hover:bg-${c}-100 dark:hover:bg-${c}-900`],
  [/^btn-link(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} text-${c}-600 dark:text-${c}-500 hover:underline underline-offset-4`],
]

export const btn = [
  ...dynamicBtn,
  staticBtn,
]
