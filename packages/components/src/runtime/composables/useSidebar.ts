import type { ComputedRef, Ref } from 'vue'
import type { UnaSidebarConfig } from '../types'
import { createContext } from 'reka-ui'

export const SIDEBAR_DEFAULTS: UnaSidebarConfig = {
  cookieName: 'sidebar:state',
  cookieMaxAge: 60 * 60 * 24 * 7,
  width: '16rem',
  widthMobile: '18rem',
  widthIcon: '3rem',
  keyboardShortcut: 'b',
} as const

export const [useSidebar, provideSidebarContext] = createContext<{
  state: ComputedRef<'expanded' | 'collapsed'>
  open: Ref<boolean>
  setOpen: (value: boolean) => void
  isMobile: Ref<boolean>
  openMobile: Ref<boolean>
  setOpenMobile: (value: boolean) => void
  toggleSidebar: () => void
}>('Sidebar')
