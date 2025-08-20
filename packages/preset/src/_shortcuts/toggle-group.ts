type ToggleGroupPrefix = 'toggle-group'

export const staticToggleGroup: Record<`${ToggleGroupPrefix}-${string}` | ToggleGroupPrefix, string> = {
  // configurations
  'toggle-group': 'flex gap-1 flex-wrap w-fit rounded-md',
  'toggle-group-horizontal': 'flex-row items-center',
  'toggle-group-vertical': 'flex-col items-start',

  // components
  'toggle-group-item': '',
}

export const dynamicToggleGroup: [RegExp, (params: RegExpExecArray) => string][] = []

export const toggleGroup = [
  staticToggleGroup,
  ...dynamicToggleGroup,
]
