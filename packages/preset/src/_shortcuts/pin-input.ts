type PinInputPrefix = 'pin-input'

export const staticPinInput: Record<`${PinInputPrefix}-${string}` | PinInputPrefix, string> = {
  // configurations
  'pin-input': '',
  'pin-input-default-variant': 'pin-input-outline',
  'pin-input-disabled': 'disabled:(n-disabled)',
  'pin-input-separator-icon': 'i-radix-icons:dot-filled',

  // components
  'pin-input-root': 'flex gap-2 items-center',
  'pin-input-input': 'relative flex h-9 w-9 items-center justify-center text-center text-0.875em pin-input-disabled placeholder:text-$c-gray-400 focus:z-10 outline-none border-y border-r transition-all focus-visible:rounded-none focus:outline-none first:!rounded-l-md first:border-l last:!rounded-r-md',
  'pin-input-group': 'flex items-center',
  'pin-input-separator': '',

  // static variants
  'pin-input-outline-gray': 'focus:ring-2 focus:!ring-$c-gray-400',
  'pin-input-outline-black': 'focus:ring-2 focus:!ring-$c-foreground',
}

export const dynamicPinInput: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^pin-input-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus:ring-2 focus:ring-${c}-500 dark:focus:ring-${c}-400`],

  [/^pin-input-outline(-(\S+))?$/, ([, , c = 'primary']) => `pin-input-focus-${c}`],
  [/^pin-input-solid(-(\S+))?$/, ([, , c = 'primary']) => `pin-input-focus-${c} ring-1 ring-${c}-500 dark:ring-${c}-400`],
]

export const pinInput = [
  ...dynamicPinInput,
  staticPinInput,
]
