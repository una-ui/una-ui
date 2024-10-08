import type { CollapsibleContentProps, CollapsibleRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions { class?: HTMLAttributes['class'] }

export interface NCollapsibleProps extends CollapsibleRootProps {
  /** Props for the collapsible content */
  _collapsibleContent?: NCollapsibleContentProps
}

export interface NCollapsibleContentProps extends CollapsibleContentProps, BaseExtensions {
}
