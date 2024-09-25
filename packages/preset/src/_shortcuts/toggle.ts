type TogglePrefix = 'toggle'

export const staticToggle: Record<`${TogglePrefix}-${string}` | TogglePrefix, string> = {
  // configurations
  toggle: '',
}

export const dynamicToggle = [

]

export const toggle = [
  ...dynamicToggle,
  staticToggle,
]
