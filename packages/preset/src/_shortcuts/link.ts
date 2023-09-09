type LinkPrefix = 'link'

export const staticLink: Record<LinkPrefix, string> = {
  // base
  link: '',
}

export const dynamicLink: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const link = [
  ...dynamicLink,
  staticLink,
]
