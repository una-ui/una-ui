type LabelPrefix = 'label'

export const staticLabel: Record<`${LabelPrefix}-${string}`, string> = {
  // base
  'label-base': 'text-sm font-medium leading-none peer-disabled:(cursor-not-allowed opacity-50)',
}

export const dynamicLabel: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const label = [
  ...dynamicLabel,
  staticLabel,
]
