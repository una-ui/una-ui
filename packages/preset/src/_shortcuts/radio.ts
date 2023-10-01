type RadioPrefix = 'radio'

export const staticRadio: Record<`${RadioPrefix}-${string}` | RadioPrefix, string> = {
  // base
  'radio': '',

  // wrappers
  'radio-wrapper': '',
}

export const dynamicRadio: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const radio = [
  ...dynamicRadio,
  staticRadio,
]
