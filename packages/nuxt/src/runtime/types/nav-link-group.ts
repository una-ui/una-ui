import type { NNavLinkProps } from './nav-link'

export interface NNavLinkGroupLink extends NNavLinkProps {
  children?: NNavLinkProps[]
  defaultOpen?: boolean
}

export interface NVerticalNav {
  links: NNavLinkGroupLink[]
}
