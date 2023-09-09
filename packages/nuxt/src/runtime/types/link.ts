// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore tsconfig
import type { NuxtLinkProps } from '@nuxt/types/app'

export interface NLinkProps extends NuxtLinkProps {
  inactiveClass?: string
  exact?: boolean
  exactQuery?: boolean
  exactHash?: boolean
}
