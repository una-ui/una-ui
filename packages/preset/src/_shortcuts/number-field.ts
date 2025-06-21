type NumberFieldPrefix = 'number-field'

export const staticNumberField: Record<`${NumberFieldPrefix}-${string}` | NumberFieldPrefix, string> = {
  // base
  'number-field': 'grid gap-1.5',
  'number-field-content': 'relative [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-1.25em [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-1.25em',
  'number-field-decrement': 'grid place-items-center absolute top-1/2 -translate-y-1/2 left-0 p-0.75em disabled:cursor-not-allowed disabled:opacity-20',
  'number-field-input': 'flex w-full rounded-md bg-transparent h-2.5714285714285716em py-0.2857142857142857em text-0.875em text-center shadow-sm transition-colors placeholder:text-muted disabled:n-disabled focus-visible:outline-none',
  'number-field-increment': 'grid place-items-center absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-0.75em',
}

export const dynamicNumberField: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
  [/^number-field-([^-]+)-([^-]+)$/, ([, v = 'outline', c = 'primary']) => `input-${v}-${c}`],
]

export const numberField = [
  ...dynamicNumberField,
  staticNumberField,
]
