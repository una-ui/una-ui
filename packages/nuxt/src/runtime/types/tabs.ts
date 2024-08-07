import type { TabsContentProps, TabsListProps, TabsRootProps, TabsTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

export interface NTabsProps extends TabsRootProps, BaseExtensions {
  /**
   * Allows you to add `UnaUI` tabs preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tabs.ts
   * @example
   * tabs="primary"
   */
  tabs?: string
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

export interface NTabsTriggerProps extends TabsTriggerProps, BaseExtensions {
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tabs.ts
   */
  una?: {
    // components
    tabsTrigger?: HTMLAttributes['class']
  }
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
