type PinInputPrefix = 'pin-input'

export const staticPinInput: Record<`${PinInputPrefix}-${string}` | PinInputPrefix, string> = {
  // configurations
  'pin-input': 'flex items-center gap-2 has-disabled:opacity-50 disabled:cursor-not-allowed',

  // components
  'pin-input-slot': 'border-input focus:border-input focus:ring-input/50 focus:invalid:ring-error/20 dark:bg-input/30 dark:focus:invalid:ring-error/40 invalid:border-error focus:invalid:border-error relative flex h-2.25em w-2.25em items-center justify-center border-y border-r text-sm shadow-sm transition-all outline-none text-center first:rounded-l-md first:border-l last:rounded-r-md focus:z-10 focus:ring-3px',
  'pin-input-group': 'flex items-center',
  'pin-input-separator': 'flex items-center mx-0.25em text-muted',

  'pin-input-slot-with-separator': 'rounded-md',
}

export const dynamicPinInput: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
  [/^pin-input-([^-]+)-([^-]+)$/, ([, v = 'outline', c = 'primary']) => `input-${v}-${c}`],
]

export const pinInput = [
  ...dynamicPinInput,
  staticPinInput,
]
