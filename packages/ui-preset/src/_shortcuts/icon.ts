type IconPrefix = 'icon'

export const staticIcon: Record<`${IconPrefix}-${string}`, string> = {
  // base
  'icon-base': 'flex-none',
}

export const dynamicIcon: [RegExp, (params: RegExpExecArray) => string][] = []

export const icon = [
  ...dynamicIcon,
  staticIcon,
]
