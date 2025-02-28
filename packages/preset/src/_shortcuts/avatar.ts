type AvatarPrefix = 'avatar'

export const staticAvatar: Record<`${AvatarPrefix}-${string}` | AvatarPrefix, string> = {
  // base
  'avatar': 'relative flex shrink-0 overflow-hidden leading-1.5em',
  'avatar-image': 'aspect-square h-full w-full',
  'avatar-fallback': 'flex h-full w-full items-center justify-center',

  'avatar-label': 'uppercase',
  'avatar-icon': 'text-1em',

  // variants
  'avatar-solid-white': 'bg-base text-base ring-1 ring-base',
  'avatar-solid-black': 'bg-inverted text-inverted',
}

export const dynamicAvatar: [RegExp, (params: RegExpExecArray) => string][] = [
  // variants
  [/^avatar-solid(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-600 dark:bg-${c}-500 text-inverted`],
  [/^avatar-soft(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-50 text-${c}-700 dark:text-${c}-400 dark:bg-${c}-900`],
  [/^avatar-outline(-(\S+))?$/, ([, , c = 'gray']) => `bg-transparent text-${c}-500 dark:text-${c}-400 ring-1 ring-${c}-500 dark:ring-${c}-400`],
]

export const avatar = [
  ...dynamicAvatar,
  staticAvatar,
]
