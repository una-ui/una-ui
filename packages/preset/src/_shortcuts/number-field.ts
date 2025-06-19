type NumberFieldPrefix = 'number-field'

export const staticNumberField: Record<`${NumberFieldPrefix}-${string}`, string> = {
  // base
  'number-field-root': 'grid gap-1.5',
  'number-field-content': 'relative [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-1.25em [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-1.25em',
  'number-field-decrement': 'grid place-items-center absolute top-1/2 -translate-y-1/2 left-0 p-0.75em disabled:cursor-not-allowed disabled:opacity-20',
  'number-field-input': 'flex  w-full rounded-md border border-input bg-transparent h-2.5714285714285716em py-0.2857142857142857em text-0.875em text-center shadow-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
  'number-field-increment': 'grid place-items-center absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-0.75em',
}

export const dynamicNumberField: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const numberField = [
  ...dynamicNumberField,
  staticNumberField,
]
