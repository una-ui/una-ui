import type { CalendarCellProps, CalendarCellTriggerProps, CalendarGridHeadProps, CalendarGridProps, CalendarGridRowProps, CalendarHeadCellProps, CalendarHeaderProps, CalendarHeadingProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'

/**
 * Base extensions for dropdown menu components.
 */
interface BaseExtensions {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
  /** Size of the component */
  size?: HTMLAttributes['class']
}

export interface NCalendarProps extends BaseExtensions, NCalendarRootProps {
  _calendarHeader?: Partial<NCalendarHeaderProps>
  _calendarCell?: Partial<NCalendarCellProps>
  _calendarCellTrigger?: Partial<NCalendarCellTriggerProps>
  _calendarGrid?: Partial<NCalendarGridProps>
  _calendarGridBody?: Partial<NCalendarGridProps>
  _calendarGridHead?: Partial<NCalendarGridProps>
  _calendarGridRow?: Partial<NCalendarGridRowProps>
  _calendarHeadCell?: Partial<NCalendarHeadCellProps>
  _calendarHeading?: Partial<NCalendarHeadingProps>
  _calendarPrevButton?: Partial<NCalendarPrevButtonProps>
  _calendarNextButton?: Partial<NCalendarNextButtonProps>

  _calendarUna?: Partial<NCalendarUnaProps>
}

export interface NCalendarRootProps extends BaseExtensions {
  /** Additional properties for the una component */
  una?: NCalendarUnaProps['calendarRoot']
}

export interface NCalendarHeaderProps extends CalendarHeaderProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NCalendarUnaProps['calendarHeader']
}

export interface NCalendarCellProps extends CalendarCellProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NCalendarUnaProps['calendarCell']
}

export interface NCalendarCellTriggerProps extends CalendarCellTriggerProps, BaseExtensions {
  calendarToday?: HTMLAttributes['class']
  calendarSelected?: HTMLAttributes['class']
  calendarUnselected?: HTMLAttributes['class']
  calendarUnavailable?: HTMLAttributes['class']
  calendarOutside?: HTMLAttributes['class']

  /** Additional properties for the una component */
  una?: NCalendarUnaProps['calendarCellTrigger']
}

export interface NCalendarGridWrapperProps extends BaseExtensions {
  /** Additional properties for the una component */
  una?: NCalendarUnaProps['calendarGrid']
}

export interface NCalendarGridProps extends CalendarGridProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NCalendarUnaProps['calendarGrid']
}

export interface NCalendarGridBodyProps extends CalendarGridProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NCalendarUnaProps['calendarGridBody']
}

export interface NCalendarGridHeadProps extends CalendarGridHeadProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NCalendarUnaProps['calendarGridHead']
}

export interface NCalendarGridRowProps extends CalendarGridRowProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NCalendarUnaProps['calendarGridRow']
}

export interface NCalendarHeadCellProps extends CalendarHeadCellProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NCalendarUnaProps['calendarHeadCell']
}

export interface NCalendarHeadingProps extends CalendarHeadingProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: NCalendarUnaProps['calendarHeading']
}

export interface NCalendarPrevButtonProps extends NButtonProps {
}

export interface NCalendarNextButtonProps extends NButtonProps {
}

export interface NCalendarUnaProps {
  calendarRoot?: HTMLAttributes['class']
  calendarHeader?: HTMLAttributes['class']
  calendarCell?: HTMLAttributes['class']
  calendarCellTrigger?: HTMLAttributes['class']
  calendarGrid?: HTMLAttributes['class']
  calendarGridBody?: HTMLAttributes['class']
  calendarGridHead?: HTMLAttributes['class']
  calendarGridRow?: HTMLAttributes['class']
  calendarHeadCell?: HTMLAttributes['class']
  calendarHeading?: HTMLAttributes['class']
  calendarPrevButton?: HTMLAttributes['class']
  calendarNextButton?: HTMLAttributes['class']
}
