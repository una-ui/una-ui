type KbdPrefix = 'kbd'

export const staticKbd: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'kbd': '',

  // wrappers
  'kbd-wrapper': '',
}

export const dynamicKbd: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const kbd = [
  ...dynamicKbd,
  staticKbd,
]
