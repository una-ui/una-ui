import type { SplitterGroupProps, SplitterPanelProps, SplitterResizeHandleProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtension {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
}

type RequiredDefaults<T, K extends keyof T> = T & Required<Pick<T, K>>

export interface NResizablePanelGroupProps extends RequiredDefaults<SplitterGroupProps, 'id'>, BaseExtension {
  /** Additional properties for the una component */
  una?: Pick<NResizableUnaProps, 'resizablePanelGroup'>
}

export interface NResizablePanelProps extends RequiredDefaults<SplitterPanelProps, 'id'>, BaseExtension {
  /** Additional properties for the una component */
  una?: Pick<NResizableUnaProps, 'resizablePanel'>
}

export interface NResizableHandleProps extends RequiredDefaults<SplitterResizeHandleProps, 'id'>, BaseExtension {
  /**
   * Show the handle icon
   */
  withHandle?: boolean
  /**
   * Custom handle icon
   */
  icon?: string
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
