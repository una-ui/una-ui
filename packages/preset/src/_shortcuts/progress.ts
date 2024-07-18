type ProgressPrefix = 'progress'

export const staticProgress: Record<`${ProgressPrefix}-${string}` | ProgressPrefix, string> = {
  // configurations
  'progress': '',

  // components
  'progress-root': 'relative h-4 w-full overflow-hidden rounded-full bg-muted',
  'progress-indicator': 'h-full w-full flex-1 bg-primary transition-all',
}

export const dynamicProgress: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const progress = [
  ...dynamicProgress,
  staticProgress,
]
