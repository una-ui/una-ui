type PinInputPrefix = 'pin-input'

export const staticPinInput: Record<`${PinInputPrefix}-${string}` | PinInputPrefix, string> = {
  'pin-input': 'flex items-center gap-2 has-disabled:opacity-50 disabled:cursor-not-allowed',
  'pin-input-slot': 'border rounded-md border-input focus:border-primary focus:ring-primary/50 focus:invalid:ring-error/20 bg-input/30 invalid:border-error focus:invalid:border-error relative flex h-2.25em w-2.25em items-center justify-center border-y border-r text-sm shadow-sm transition-all outline-none text-center first:rounded-l-md first:border-l last:rounded-r-md focus:z-10 focus:ring-3px',
  'pin-input-group': 'flex items-center',
  'pin-input-separator': 'flex items-center mx-0.25em text-muted',
}

export const dynamicPinInput: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const pinInput = [
  ...dynamicPinInput,
  staticPinInput,
]
