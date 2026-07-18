type CheckboxPrefix = 'checkbox'

export const staticCheckbox: Record<`${CheckboxPrefix}-${string}` | CheckboxPrefix, string> = {
  // base
  'checkbox': 'dark:bg-input/30 square-1em shrink-0 rounded-4px shadow-xs transition-shadow outline-none disabled:n-disabled border border-input dark:border-input',
  'checkbox-label': 'block',
  'checkbox-reverse': 'flex-row-reverse',

  // wrappers
  'checkbox-wrapper': 'gap-x-3 relative inline-flex items-center hover:cursor-pointer',

  // icon
  'checkbox-indicator': 'flex items-center justify-center text-primary-foreground transition-none',
  'checkbox-icon-base': 'square-0.875rem',
  'checkbox-checked-icon': 'i-check',
  'checkbox-unchecked-icon': '',
  'checkbox-indeterminate-icon': 'i-lucide-minus',

  'checkbox-focus-primary': 'focus-visible:ring-3px focus-visible:border-ring focus-visible:ring-ring/50',
  'checkbox-checked-primary': 'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary',
  'checkbox-checked': 'checkbox-checked-primary',
  'checkbox-indeterminate-primary': 'data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary',
  'checkbox-indeterminate': 'checkbox-indeterminate-primary',
}

export const dynamicCheckbox = [
  [/^checkbox(-(\S+))?$/, ([, , c = 'primary']) => `checkbox-focus-${c} checkbox-checked-${c} checkbox-indeterminate-${c}`],
  [/^checkbox-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:ring-3px focus-visible:border-${c}-200 dark:focus-visible:border-${c}-800 focus-visible:ring-${c}-200/50 dark:focus-visible:ring-${c}-800/50`],
  [/^checkbox-indeterminate(-(\S+))?$/, ([, , c = 'primary']) => `data-[state=indeterminate]:(bg-${c}-600 text-${c}-50) dark:data-[state=indeterminate]:(bg-${c}-500 text-${c}-900)`],
  [/^checkbox-checked(-(\S+))?$/, ([, , c = 'primary']) => `data-[state=checked]:(bg-${c}-600 text-${c}-50) dark:data-[state=checked]:(bg-${c}-500 text-${c}-900)`],
]

export const checkbox = [
  ...dynamicCheckbox,
  staticCheckbox,
]
