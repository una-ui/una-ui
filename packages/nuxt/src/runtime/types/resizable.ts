import type { SplitterGroupProps, SplitterPanelProps, SplitterResizeHandleProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtension {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
}

export interface NResizableProps extends SplitterGroupProps, BaseExtension {
  /** Additional properties for the una component */
  una?: Pick<NResizableUnaProps, 'resizablePanelGroup'>
}

export interface NResizablePanelProps extends SplitterPanelProps, BaseExtension {
  /** Additional properties for the una component */
  una?: Pick<NResizableUnaProps, 'resizablePanel'>
}

export interface NResizableHandleProps extends SplitterResizeHandleProps, BaseExtension {
  /**
   * Allows you to add `UnaUI` resizable handle preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/resizable.ts
   * @example
   * resizable-handle="outline-yellow"
   */
  resizableHandle?: string
  /**
   * Custom handle icon
   * @example
   * icon="i-lucide-grip-vertical"
   */
  icon?: string
  /**
   * Set visibility of the handle
   *
   * @default false
   */
  withHandle?: boolean
  /** Additional properties for the una component */
  una?: Pick<NResizableUnaProps, 'resizableHandle'>
}

interface NResizableUnaProps {
  /** CSS class for the resizable panel */
  resizablePanel?: HTMLAttributes['class']
  /** CSS class for the resizable panel group */
  resizablePanelGroup?: HTMLAttributes['class']
  /** CSS class for the resizable handle */
  resizableHandle?: HTMLAttributes['class']
}
