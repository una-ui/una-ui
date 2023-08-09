type AvatarPrefix = 'avatar'

export const staticAvatar: Record<`${AvatarPrefix}-${string}` | AvatarPrefix, string> = {
  // config
  'avatar-default-variant': 'avatar-solid-gray',

  // base
  'avatar': 'relative font-medium leading-none h-2.5em w-2.5em text-brand inline-flex items-center justify-center rounded-full overflow-hidden',
  'avatar-fallback': '',

  'avatar-src': 'w-full h-full',
}

export const dynamicAvatar: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^avatar-solid(-(\S+))?$/, ([, , c = 'primary']) => `avatar bg-${c}-600 dark:bg-${c}-500 text-inverted`],
  // [/^avatar-soft(-(\S+))?$/, ([, , c = 'primary']) => `avatar bg-${c}-50 n-${c}-700 dark:n-${c}-400 ring-1 ring-${c}-700/10 ring-inset dark:bg-${c}-400/10 dark:ring-${c}-400/30`],
]

export const avatar = [
  ...dynamicAvatar,
  staticAvatar,
]
