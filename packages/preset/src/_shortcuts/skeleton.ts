type SkeletonPrefix = 'skeleton'

export const staticSkeleton: Record<`${SkeletonPrefix}-${string}` | SkeletonPrefix, string> = {
  // base
  skeleton: 'skeleton-gray animate-pulse rounded-md w-full h-0.5em',
}

export const dynamicSkeleton: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^skeleton(-(\S+))?(-(\S+))?$/, ([, , c = 'gray']) => {
    return `bg-${c}-100 dark:bg-${c}-800`
  }],
]

export const skeleton = [
  ...dynamicSkeleton,
  staticSkeleton,
]
