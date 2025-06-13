import { staticIcons } from './config/icons'

export const staticGeneral = {
  // text-size
  'text-md': 'text-1rem leading-1.5rem',
  'size-md': 'text-md',

  // text color
  'text-background': 'text-$c-background',

  'text-accent': 'text-$c-accent-foreground',
  'text-accent-foreground': 'text-$c-accent',

  'text-popover': 'text-$c-popover-foreground',
  'text-popover-foreground': 'text-$c-popover',

  'text-info': 'text-info-600 dark:text-info-500',
  'text-info-active': 'text-info-500 dark:text-info-400',
  'text-error': 'text-error-600 dark:text-error-500',
  'text-error-active': 'text-error-500 dark:text-error-400',
  'text-success': 'text-success-600 dark:text-success-500',
  'text-success-active': 'text-success-500 dark:text-success-400',
  'text-warning': 'text-warning-600 dark:text-warning-500',
  'text-warning-active': 'text-warning-500 dark:text-warning-400',

  // border
  'border-base': 'border-$c-border',
  'border-foreground': 'border-$c-border-foreground',

  // divide
  'divide-base': 'divide-$c-divider',

  // bg
  'bg-foreground': 'bg-$c-foreground',
  'bg-border': 'bg-$c-border',

  'bg-accent': 'bg-$c-accent',
  'bg-accent-foreground': 'bg-$c-accent-foreground',

  'bg-popover': 'bg-$c-popover',
  'bg-popover-foreground': 'bg-$c-popover-foreground',

  'fill-base': 'fill-$c-background',
  'stroke-base': 'stroke-$c-border',

  // transition
  'transition-base': 'transition-all duration-100 ease-out',

  // overrides
  'square-false': '',
}

export const dynamicGeneral: [RegExp, (params: RegExpExecArray) => string][] = [
  // TODO: una-text-<color><-number><-number>
  // [/^una-text(-(\S+))?$/, ([, , c = 'primary']) => `text-${c}-700 dark:text-${c}-400`],
]

export const general = [
  ...dynamicGeneral,
  staticGeneral,
  staticIcons,
]
