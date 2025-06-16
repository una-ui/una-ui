type NumberFieldPrefix = 'number-field'

export const staticNumberField: Record<`${NumberFieldPrefix}-${string}`, string> = {
  // base
  'number-field-root': 'grid gap-1.5',
  'number-field-content': 'relative [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-5 [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-5',
  'number-field-decrement': 'absolute top-1/2 -translate-y-1/2 left-0 p-3 disabled:cursor-not-allowed disabled:opacity-20',
  'number-field-input': 'flex h-9 w-full rounded-md border border-input bg-transparent py-1 text-sm text-center shadow-sm transition-colors placeholder:text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
  'number-field-increment': 'absolute top-1/2 -translate-y-1/2 right-0 disabled:cursor-not-allowed disabled:opacity-20 p-3',
}

export const dynamicNumberField: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const numberField = [
  ...dynamicNumberField,
  staticNumberField,
]
