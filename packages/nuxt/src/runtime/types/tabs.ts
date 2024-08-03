import type { TabsContentProps, TabsListProps, TabsRootProps, TabsTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface Extensions { class?: HTMLAttributes['class'] }

export interface NTabsProps extends TabsRootProps, Extensions {
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
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tabs.ts
   */
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tabs.ts
   */
  una?: {
    // base
    tabs?: HTMLAttributes['class']
    // components
    tabsRoot?: HTMLAttributes['class']
  }
}

export interface NTabsListProps extends TabsListProps, Extensions {
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
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/tabs.ts
   */
  una?: {
    // components
    tabsList?: HTMLAttributes['class']
  }
}

export interface NTabsTriggerProps extends TabsTriggerProps, Extensions {
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

export interface NTabsContentProps extends TabsContentProps, Extensions {
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
