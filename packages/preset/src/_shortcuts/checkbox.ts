type CheckboxPrefix = 'checkbox'

export const staticCheckbox: Record<`${CheckboxPrefix}-${string}` | CheckboxPrefix, string> = {
  // base
  'checkbox': 'square-1em shrink-0 rounded-4px shadow-xs transition-shadow outline-none disabled:n-disabled border border-input dark:border-input/30',
  'checkbox-label': 'block',
  'checkbox-reverse': 'flex-row-reverse',

  // wrappers
  'checkbox-wrapper': 'gap-x-3 relative inline-flex items-center hover:cursor-pointer',

  // icon
  'checkbox-indicator': 'flex items-center justify-center text-current transition-none',
  'checkbox-icon-base': 'square-0.875rem',
  'checkbox-checked-icon': 'i-check',
  'checkbox-unchecked-icon': '',
  'checkbox-indeterminate-icon': 'i-lucide-minus',
}

export const dynamicCheckbox = [
  [/^checkbox(-(\S+))?$/, ([, , c = 'primary']) => `checkbox-focus-${c} checkbox-checked-${c} checkbox-indeterminate-${c} checkbox-unchecked-gray`],
  [/^checkbox-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:ring-3px focus-visible:border-${c}-200 dark:focus-visible:border-${c}-800 focus-visible:ring-${c}-200/50 dark:focus-visible:ring-${c}-800/50`],
  [/^checkbox-indeterminate(-(\S+))?$/, ([, , c = 'gray']) => `data-[state=indeterminate]:(bg-${c}-600 text-${c}-50) dark:data-[state=indeterminate]:(bg-${c}-500 text-${c}-900)`],
  [/^checkbox-checked(-(\S+))?$/, ([, , c = 'primary']) => `data-[state=checked]:(bg-${c}-600 text-${c}-50) dark:data-[state=checked]:(bg-${c}-500 text-${c}-900)`],
  [/^checkbox-unchecked(-(\S+))?$/, ([, , c = 'gray']) => `data-[state=unchecked]:(bg-${c}-200 text-${c}-50) dark:data-[state=unchecked]:(bg-${c}-800/30 text-${c}-900)`],
]

export const checkbox = [
  ...dynamicCheckbox,
  staticCheckbox,
]
