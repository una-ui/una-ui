type StepperPrefix = 'stepper'

export const staticStepper: Record<`${StepperPrefix}-${string}` | StepperPrefix, string> = {
  // configurations
  'stepper': 'flex gap-4',
  'stepper-horizontal': 'flex-col',

  // components
  'stepper-wrapper': 'flex',
  'stepper-wrapper-vertical': 'flex-col gap-6',

  'stepper-item': 'text-center relative w-full data-[disabled]:pointer-events-none',
  'stepper-item-vertical': 'flex text-start gap-2.5',

  'stepper-trigger': 'rounded-full font-medium text-center align-middle flex items-center justify-center font-semibold text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',

  'stepper-header': 'flex flex-col',
  'stepper-header-horizontal': 'mt-2.5',

  'stepper-indicator': 'inline-flex items-center justify-center rounded-full square-2.25em text-foreground/50 bg-muted group-data-[state=active]:text-inverted group-data-[state=completed]:text-inverted',

  'stepper-separator': 'bg-muted group-data-[disabled]:bg-muted group-data-[state=active]:!bg-muted group-data-[disabled]:opacity-50 absolute rounded-full group-data-[disabled]:opacity-75',
  'stepper-separator-horizontal': 'top-[calc(50%-2px)] h-0.5 start-[calc(50%+1.5em)] end-[calc(-50%+1.5em)]',
  'stepper-separator-vertical': 'start-[calc(50%-1px)] bottom-[calc(50%-2.8em)] w-0.5 top-[calc(50%+1em)]',
  'stepper-title': 'text-md font-semibold whitespace-nowrap',
  'stepper-description': 'text-muted text-wrap text-sm',

  'stepper-container': 'relative',
  'stepper-container-horizontal': 'flex justify-center',

  // static variants
  'stepper-solid-black': 'group-data-[state=active]:bg-inverted group-data-[state=completed]:bg-inverted focus-visible:ring-$c-foreground',
}

export const dynamicStepper: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic presets
  [/^stepper-solid(-(\S+))?$/, ([, , c = 'primary']) => `group-data-[state=completed]:bg-${c}-600 group-data-[state=active]:bg-${c}-600 focus-visible:ring-${c}-600 dark:(group-data-[state=completed]:bg-${c}-500 group-data-[state=active]:bg-${c}-500 focus-visible:ring-${c}-500)`],
]

export const stepper = [
  ...dynamicStepper,
  staticStepper,
]
