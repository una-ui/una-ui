type PinInputPrefix = 'pin-input'

export const staticPinInput: Record<`${PinInputPrefix}-${string}` | PinInputPrefix, string> = {
  // configurations
  'pin-input': 'flex items-center gap-2 has-disabled:opacity-50 disabled:cursor-not-allowed',
  'pin-input-separator-icon': 'i-lucide-minus',

  // components
  'pin-input-slot': 'relative flex square-2.5714285714285716em items-center justify-center bg-transparent shadow-sm border-y border-r first:rounded-l-md first:border-l last:rounded-r-md text-0.875em leading-1.4285714285714286em transition-all outline-none text-center',
  'pin-input-group': 'flex items-center',
  'pin-input-separator': 'grid',
}

export const dynamicPinInput: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^pin-input-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:ring-${c}-500 dark:focus-visible:ring-${c}-400 focus:z-10 focus:ring-1`],

  // dynamic preset
  [/^pin-input-outline(-(\S+))?$/, ([, , c = 'primary']) => `border-input  pin-input-focus-${c}`],
  [/^pin-input-solid(-(\S+))?$/, ([, , c = 'primary']) => `border-${c}-500 focus:border dark:border-${c}-400 pin-input-focus-${c}`],
]

export const pinInput = [
  ...dynamicPinInput,
  staticPinInput,
]
