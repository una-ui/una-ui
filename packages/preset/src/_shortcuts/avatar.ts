type AvatarPrefix = 'avatar'

export const staticAvatar: Record<`${AvatarPrefix}-${string}` | AvatarPrefix, string> = {
  // base
  'avatar': 'relative inline-flex items-center font-normal select-none shrink-0 overflow-hidden',
  'avatar-image': 'h-full w-full object-cover',
  'avatar-fallback': 'flex h-full w-full items-center justify-center',

  'avatar-label': 'uppercase',
  'avatar-icon': 'text-1em',

  // variants
  'avatar-solid-white': 'bg-background text-foreground border border-base',
  'avatar-solid-black': 'bg-foreground text-inverted',
}

export const dynamicAvatar: [RegExp, (params: RegExpExecArray) => string][] = [
  // variants
  [/^avatar-solid(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-600 dark:bg-${c}-500 text-inverted`],
  [/^avatar-soft(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-50 text-${c}-700 dark:text-${c}-400 dark:bg-${c}-900`],
  [/^avatar-outline(-(\S+))?$/, ([, , c = 'gray']) => `bg-transparent text-${c}-500 dark:text-${c}-400 border border-${c}-500 dark:border-${c}-400`],
]

export const avatar = [
  ...dynamicAvatar,
  staticAvatar,
]
