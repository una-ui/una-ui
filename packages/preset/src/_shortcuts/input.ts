type InputPrefix = 'input'

export const staticInput: Record<`${InputPrefix}-${string}` | InputPrefix, string> = {
  // config
  'input-default-variant': 'input-outline-primary',
  'input-loading-icon': 'i-loading',
  'input-info-icon': 'i-info',
  'input-error-icon': 'i-error',
  'input-success-icon': 'i-success',
  'input-warning-icon': 'i-warning',
  'input-leading-padding': 'pl-2.5714285714285716em',
  'input-trailing-padding': 'pr-2.5714285714285716em',

  // base
  'input': 'text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground text-0.875em leading-1.4285714285714286em px-0.8571428571428571em bg-transparent w-full focus-visible:outline-none input-disabled placeholder:text-muted-foreground block rounded-md transition-colors file:text-foreground file:border-0  file:bg-transparent file:text-0.875em file:font-medium',
  'input-input': 'h-2.5714285714285716em py-0.2857142857142857em', // role='input'
  'input-textarea': 'min-h-4.285714285714286em py-0.5714285714em', // role='textarea'
  'input-disabled': 'disabled:(n-disabled)',
  'input-status-ring': 'ring-opacity-50 dark:ring-opacity-40',
  'input-status-icon-base': 'square-1em',
  'input-leading': 'square-1em',
  'input-trailing': 'square-1em',
  'input-loading': 'animate-spin square-1em',

  // wrappers
  'input-wrapper': 'relative flex items-center',
  'input-leading-wrapper': 'pointer-events-none absolute inset-y-0 start-0 flex items-center px-0.8571428571428571em text-muted-foreground',
  'input-trailing-wrapper': 'pointer-events-none absolute inset-y-0 end-0 flex items-center px-0.8571428571428571em text-muted-foreground',

  // variants
  'input-outline-gray': 'shadow-xs border bg-transparent dark:bg-input/30 border-input focus-visible:ring-input/50 focus-visible:ring-3px',
  'input-outline-black': 'shadow-xs border bg-transparent dark:bg-input/30 border-foreground focus-visible:ring-foreground/50 focus-visible:ring-3px',

  'input-solid-primary': 'shadow-xs bg-transparent dark:bg-input/30 border border-ring input-focus',
  'input-solid': 'input-solid-primary',

  'input-focus-primary': 'focus-visible:ring-3px focus-visible:border-ring focus-visible:ring-ring/50',
  'input-focus': 'input-focus-primary',
}

export const dynamicInput: [RegExp, (params: RegExpExecArray) => string][] = [
  // config
  [/^input-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:ring-3px focus-visible:border-${c}-400 dark:focus-visible:border-${c}-500 focus-visible:ring-${c}-400/50 dark:focus-visible:ring-${c}-500/50`],
  [/^input-status(-(\S+))?$/, ([, , c = 'info']) => `text-${c}-700 dark:text-${c}-200 placeholder:text-${c}-500 dark:placeholder:text-${c}-400`],

  // variants
  [/^input-outline(-(\S+))?$/, ([, , c = 'primary']) => `shadow-xs border bg-transparent dark:bg-input/30 border-input input-focus-${c}`],
  [/^input-solid(-(\S+))?$/, ([, , c = 'primary']) => `shadow-xs bg-transparent dark:bg-input/30 input-focus-${c} border border-${c}-500 dark:border-${c}-400`],
]

export const input = [
  ...dynamicInput,
  staticInput,
]
