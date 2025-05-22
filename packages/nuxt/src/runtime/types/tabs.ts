import type { TabsContentProps, TabsListProps, TabsRootProps, TabsTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

export interface NTabsProps extends TabsRootProps, BaseExtensions, Pick<NTabsTriggerProps, 'tabsActive' | 'tabsInactive' | 'disabled'> {
  /**
   * The array of items that is passed to tabs.
   *
   * @default []
   */
  items: any[]

  // sub-components
  _tabsContent?: Partial<NTabsContentProps>
  _tabsTrigger?: Partial<NTabsTriggerProps>
  _tabsList?: Partial<NTabsListProps>

  una?: NTabsUnaProps
}

export interface NTabsListProps extends TabsListProps, BaseExtensions {
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tabs.ts
   */
  una?: Pick<NTabsUnaProps, 'tabsList'>
}

export interface NTabsTriggerProps extends TabsTriggerProps, Omit<NButtonProps, 'una'> {
  una?: Pick<NTabsUnaProps, 'tabsTrigger'> & Pick<NButtonProps, 'una'>
}

export interface NTabsContentProps extends TabsContentProps, BaseExtensions {
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tabs.ts
   */
  una?: Pick<NTabsUnaProps, 'tabsContent'>
}

export interface NTabsUnaProps {
  tabs?: HTMLAttributes['class']
  tabsList?: HTMLAttributes['class']
  tabsTrigger?: HTMLAttributes['class']
  tabsContent?: HTMLAttributes['class']
}
