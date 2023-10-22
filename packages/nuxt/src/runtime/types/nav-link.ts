import type { NBadgeProps } from './badge'
import type { NButtonProps } from './button'

export interface NNavLinkProps extends Omit<NButtonProps, 'una'> {
  navLink?: string
  navLinkInactive?: string
  navLinkActive?: string
  badge?: NBadgeProps

  una?: {
    navLinkDefaultVariant?: string
    navLink?: string
    navLinkActive?: string
    navLinkInactive?: string
  } & NButtonProps['una']
}
