type CollapsiblePrefix = 'collapsible'

export const staticCollapsible: Record<`${CollapsiblePrefix}-${string}`, string> = {
  'collapsible-content': 'overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
}

export const dynamicCollapsible: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const collapsible = [
  ...dynamicCollapsible,
  staticCollapsible,
]
