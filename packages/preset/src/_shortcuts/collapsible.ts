type CollapsiblePrefix = 'collapsible'

export const staticCollapsible: Record<`${CollapsiblePrefix}-${string}`, string> = {
  'collapsible-content': 'overflow-hidden transition-all',
}

export const dynamicCollapsible: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const collapsible = [
  ...dynamicCollapsible,
  staticCollapsible,
]
