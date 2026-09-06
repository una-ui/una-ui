type AspectRatioPrefix = 'aspect-ratio'

export const staticAspectRatio: Record<`${AspectRatioPrefix}-${string}` | AspectRatioPrefix, string> = {
  // base
  'aspect-ratio': 'overflow-hidden',

  // static variants
  'aspect-ratio-soft-gray': 'bg-muted border border-border',
  'aspect-ratio-outline-gray': 'bg-background border border-border',
}

export const dynamicAspectRatio: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^aspect-ratio-soft(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-50 dark:bg-${c}-900 border-${c}-200 dark:border-${c}-800`],
  [/^aspect-ratio-outline(-(\S+))?$/, ([, , c = 'gray']) => `border border-${c}-200 dark:border-${c}-800`],
]

export const aspectRatio = [
  ...dynamicAspectRatio,
  staticAspectRatio,
]
