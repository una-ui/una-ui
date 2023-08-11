type AvatarPrefix = 'avatar'

export const staticAvatar: Record<`${AvatarPrefix}-${string}` | AvatarPrefix, string> = {
  // config
  'avatar-default-variant': 'avatar-solid',
  'avatar-fallback-icon': 'i-heroicons-user-20-solid',
  'avatar-skeleton': 'animate-pulse',

  // base
  'avatar': 'relative font-medium leading-none h-2.5em w-2.5em inline-flex items-center justify-center rounded-full overflow-hidden',
  'avatar-label': '',
  'avatar-fallback': '',
  'avatar-fallback-icon-base': 'text-1.5em',
  'avatar-src': 'w-full h-full',
  'avatar-icon-base': 'text-1.2em',

  // variants
  'avatar-solid-white': 'avatar bg-base text-base ring-1 ring-base',
  'avatar-solid-black': 'avatar bg-inverted text-inverted',
}

export const dynamicAvatar: [RegExp, (params: RegExpExecArray) => string][] = [
  // variants
  [/^avatar-solid(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-600 dark:bg-${c}-500 text-inverted`],
  [/^avatar-soft(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-50 text-${c}-700 dark:text-${c}-400 dark:bg-${c}-900`], // ring-1 ring-${c}-700/10 dark:ring-${c}-400/30 dark:bg-${c}-400/10
  [/^avatar-outline(-(\S+))?$/, ([, , c = 'gray']) => `bg-transparent text-${c}-500 dark:text-${c}-400 ring-1 ring-current`],
]

export const avatar = [
  ...dynamicAvatar,
  staticAvatar,
]
