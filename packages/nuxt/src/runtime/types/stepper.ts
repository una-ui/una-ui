import type {
  StepperDescriptionProps,
  StepperIndicatorProps,
  StepperItemProps,
  StepperRootEmits,
  StepperRootProps,
  StepperSeparatorProps,
  StepperTitleProps,
  StepperTriggerProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions {
  /** CSS class for the component */
  class?: HTMLAttributes['class']
  /** Size of the component */
  size?: HTMLAttributes['class']
}

export interface NStepperProps<T> extends StepperRootProps, Pick<StepperItemProps, 'disabled'>, BaseExtensions {
  /**
   * The array of steps that is passed to the stepper.
   *
   * @default []
   */
  items?: T[]
  /**
   * Allows you to add `UnaUI` stepper preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/stepper.ts
   * @example
   * stepper="solid-yellow"
   */
  stepper?: string

  /** Props for the stepper item */
  _stepperItem?: Partial<NStepperItemProps>
  /** Props for the stepper trigger */
  _stepperTrigger?: Partial<NStepperTriggerProps>
  /** Props for the stepper separator */
  _stepperSeparator?: Partial<NStepperSeparatorProps>
  /** Props for the stepper title */
  _stepperTitle?: Partial<NStepperTitleProps>
  /** Props for the stepper description */
  _stepperDescription?: Partial<NStepperDescriptionProps>
  /** Props for the stepper indicator */
  _stepperIndicator?: Partial<NStepperIndicatorProps>
  /** Props for the stepper header */
  _stepperHeader?: Partial<NStepperHeaderProps>
  /** Props for the stepper wrapper */
  _stepperWrapper?: Partial<NStepperWrapperProps>
  /** Props for the stepper container */
  _stepperContainer?: Partial<NStepperContainerProps>

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/stepper.ts
   */
  una?: NStepperUnaProps
}

export type NStepperEmits<T> = StepperRootEmits & {
  next: [payload: T]
  prev: [payload: T]
}

export interface NStepperItemProps extends StepperItemProps, Pick<NStepperProps<NStepperItemProps>, 'orientation'>,
  Pick<BaseExtensions, 'class'> {
  /** Slot of the stepper item */
  slot?: string
  /** Title of the stepper item. */
  title?: string
  /** Description of the stepper item. */
  description?: string

  value?: string | number
  /**
   * Icon name
   * @see @IconifyIcon
   *
   * @example
   * 'i-heroicons-book-open-20-solid'
   */
  icon?: string
  /** Additional properties for the una component */
  una?: Pick<NStepperUnaProps, 'stepperItem'>
}

export interface NStepperTriggerProps extends StepperTriggerProps, Pick<NStepperProps<StepperItemProps>, 'stepper'>, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NStepperUnaProps, 'stepperTrigger' | 'stepperMenuDefaultVariant'>
}

export interface NStepperSeparatorProps extends StepperSeparatorProps, Pick<NStepperProps<StepperItemProps>, 'stepper'>,
  Pick<BaseExtensions, 'class'> {
  /** Additional properties for the una component */
  una?: Pick<NStepperUnaProps, 'stepperSeparator'>
}

export interface NStepperIndicatorProps extends StepperIndicatorProps, Pick<NStepperProps<StepperItemProps>, 'stepper'>, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NStepperUnaProps, 'stepperIndicator'>
}

export interface NStepperHeaderProps extends Pick<BaseExtensions, 'class'>, Pick<NStepperProps<StepperItemProps>, 'orientation'> {
  /** Additional properties for the una component */
  una?: Pick<NStepperUnaProps, 'stepperHeader'>
}

export interface NStepperTitleProps extends StepperTitleProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NStepperUnaProps, 'stepperTitle'>
}

export interface NStepperDescriptionProps extends StepperDescriptionProps, BaseExtensions {
  /** Additional properties for the una component */
  una?: Pick<NStepperUnaProps, 'stepperDescription'>
}

export interface NStepperContainerProps extends Pick<BaseExtensions, 'class'>, Pick<NStepperProps<StepperItemProps>, 'orientation'> {
  /** Additional properties for the una component */
  una?: Pick<NStepperUnaProps, 'stepperContainer'>
}

export interface NStepperWrapperProps extends Pick<BaseExtensions, 'class'>, Pick<NStepperProps<StepperItemProps>, 'orientation'> {
  /** Additional properties for the una component */
  una?: Pick<NStepperUnaProps, 'stepperWrapper'>
}

interface NStepperUnaProps {
  /** CSS class for the stepper */
  stepper?: HTMLAttributes['class']
  /** CSS class for the stepper trigger */
  stepperTrigger?: HTMLAttributes['class']
  /** CSS class for the stepper trigger default variant */
  stepperMenuDefaultVariant?: HTMLAttributes['class']
  /** CSS class for the stepper item */
  stepperItem?: HTMLAttributes['class']
  /** CSS class for the stepper title */
  stepperTitle?: HTMLAttributes['class']
  /** CSS class for the stepper description */
  stepperDescription?: HTMLAttributes['class']
  /** CSS class for the stepper indicator */
  stepperIndicator?: HTMLAttributes['class']
  /** CSS class for the stepper separator */
  stepperSeparator?: HTMLAttributes['class']
  /** CSS class for the stepper header */
  stepperHeader?: HTMLAttributes['class']
  /** CSS class for the stepper container */
  stepperContainer?: HTMLAttributes['class']
  /** CSS class for the stepper wrapper */
  stepperWrapper?: HTMLAttributes['class']
}
