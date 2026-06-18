type PinInputPrefix = 'pin-input'

export const staticPinInput: Record<`${PinInputPrefix}-${string}` | PinInputPrefix, string> = {
  // configurations
  'pin-input': 'flex items-center gap-2 has-disabled:opacity-50 disabled:cursor-not-allowed',
  'pin-input-separator-icon': 'i-lucide-minus',

  // components
  'pin-input-slot': 'relative flex square-2.5714285714285716em items-center justify-center shadow-xs border-y border-r first:rounded-l-md first:border-l last:rounded-r-md text-0.875em leading-1.4285714285714286em transition-all outline-none text-center',
  'pin-input-group': 'flex items-center',
  'pin-input-separator': 'grid',

  'pin-input-solid-primary': 'shadow-xs bg-transparent dark:bg-input/30 border border-ring pin-input-focus',
  'pin-input-solid': 'pin-input-solid-primary',

  'pin-input-focus-primary': 'focus:ring-3px focus:border focus:border-ring focus:ring-ring/50',
  'pin-input-focus': 'pin-input-focus-primary',
}

export const dynamicPinInput: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^pin-input-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus:ring-3px focus:border focus:border-${c}-400 dark:focus:border-${c}-500 focus:ring-${c}-400/50 dark:focus:ring-${c}-500/50 focus:z-10`],

  // dynamic preset
  [/^pin-input-outline(-(\S+))?$/, ([, , c = 'primary']) => `bg-transparent dark:bg-input/30 border-input pin-input-focus-${c}`],
  [/^pin-input-solid(-(\S+))?$/, ([, , c = 'primary']) => `bg-transparent dark:bg-input/30 border-${c}-500 dark:border-${c}-400 pin-input-focus-${c}`],
]

export const pinInput = [
  ...dynamicPinInput,
  staticPinInput,
]
