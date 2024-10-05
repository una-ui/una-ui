type TogglePrefix = 'toggle'

export const staticToggle: Record<`${TogglePrefix}-${string}` | TogglePrefix, string> = {
  // configurations
  toggle: '',
}

export const dynamicToggle = [
  [
    /^toggle-on(?:-([^-]+))?(?:-([^-]+))?$/,
    ([, variant = 'soft', color = 'accent']) =>
      `data-[state=on]:btn-${variant}-${color}`,
  ],
  [
    /^toggle-off(?:-([^-]+))?(?:-([^-]+))?$/,
    ([, variant = 'ghost', color = 'gray']) =>
      `data-[state=off]:btn-${variant}-${color}`,
  ],
]

export const toggle = [
  ...dynamicToggle,
  staticToggle,
]
