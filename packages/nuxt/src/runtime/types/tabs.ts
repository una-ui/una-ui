import type { TabsContentProps, TabsListProps, TabsRootProps, TabsTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

export interface NTabsProps extends TabsRootProps, BaseExtensions, Pick<NTabsTriggerProps, 'tabs'> {
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
}

export interface NTabsRootProps extends TabsRootProps, BaseExtensions {
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tabs.ts
   */
  una?: {
    // components
    tabsRoot?: HTMLAttributes['class']
  }
}

export interface NTabsListProps extends TabsListProps, BaseExtensions {
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tabs.ts
   */
  una?: {
    // components
    tabsList?: HTMLAttributes['class']
  }
}

export interface NTabsTriggerProps extends TabsTriggerProps, Omit<NButtonProps, 'una' | 'size'>, BaseExtensions {
  tabs?: string

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tabs.ts
   */
  una?: {
    // components
    tabsTrigger?: HTMLAttributes['class']
    tabsDefaultVariant?: HTMLAttributes['class']
  } & NButtonProps['una']
}

export interface NTabsContentProps extends TabsContentProps, BaseExtensions {
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tabs.ts
   */
  una?: {
    // components
    tabsContent?: HTMLAttributes['class']
  }
}
