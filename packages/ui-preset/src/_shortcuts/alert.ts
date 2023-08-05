type AlertPrefix = 'alert'

export const staticAlert: Record<`${AlertPrefix}-${string}` | AlertPrefix, string> = {
  // base
  'alert': '',
  'alert-disabled': '',
}

export const dynamicAlert: [RegExp, (params: RegExpExecArray) => string][] = [
]

export const alert = [
  ...dynamicAlert,
  staticAlert,
]
