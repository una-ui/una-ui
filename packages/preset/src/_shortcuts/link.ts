type LinkPrefix = '_link'

export const staticLink: Record<`${LinkPrefix}-${string}`, string> = {
  // base
  '_link-disabled': 'n-disabled',
}

export const dynamicLink: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const link = [
  ...dynamicLink,
  staticLink,
]
