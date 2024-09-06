import type { HTMLAttributes } from 'vue'

/**
 * Base extensions for dropdown menu components.
 */
interface BaseExtensions {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
  /** Size of the component */
  size?: HTMLAttributes['class']
}

export interface NCalendarProps extends BaseExtensions {
}

export interface NCalendarRootProps {
  /** Additional properties for the una component */
  una?: NCalendarUnaProps
}

export interface NCalendarHeaderProps extends BaseExtensions {
}

export interface NCalendarUnaProps {
  calendarRoot?: HTMLAttributes['class']
  calendarHeader?: HTMLAttributes['class']
  calendarGrid?: HTMLAttributes['class']
  calendarGridCell?: HTMLAttributes['class']
  calendarPrevButton?: HTMLAttributes['class']
  calendarNextButton?: HTMLAttributes['class']
  calendarHeading?: HTMLAttributes['class']
}
