type LabelPrefix = 'label'

export const staticLabel: Record<`${LabelPrefix}-${string}`, string> = {
  // base
  'label-base': 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:n-disabled',
}

export const dynamicLabel: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const label = [
  ...dynamicLabel,
  staticLabel,
]
