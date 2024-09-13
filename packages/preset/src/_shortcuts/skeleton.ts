import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { parseColor } from '@unocss/preset-mini/utils'

type SkeletonPrefix = 'skeleton'

export const staticSkeleton: Record<`${SkeletonPrefix}-${string}` | SkeletonPrefix, string> = {
  // base
  skeleton: 'skeleton-gray text-md animate-pulse rounded-md w-full h-0.5em bg-brand',
}

export const dynamicSkeleton = [
  [/^skeleton-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `n-${body}-100 dark:n-${body}-800`
  }],
]

export const skeleton = [
  ...dynamicSkeleton,
  staticSkeleton,
]
