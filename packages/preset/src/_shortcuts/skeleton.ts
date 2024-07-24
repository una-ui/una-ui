type SkeletonPrefix = 'skeleton'

export const staticSkeleton: Record<`${SkeletonPrefix}-${string}` | SkeletonPrefix, string> = {

  'skeleton-default-variant': 'skeleton-gray',
  // base
  'skeleton': 'animate-pulse rounded-md w-full h-2',

  // variants
  'skeleton-circle': 'rounded-full',
  'skeleton-rectangle': 'rounded-md',
}

export const dynamicSkeleton: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^skeleton(-(\S+))?(-(\S+))?$/, ([, , c = 'gray']) => {
    return `bg-${c}-100 dark:bg-${c}-900`
  }],
]

export const skeleton = [
  ...dynamicSkeleton,
  staticSkeleton,
]
