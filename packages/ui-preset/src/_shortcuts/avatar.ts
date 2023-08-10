type AvatarPrefix = 'avatar'

export const staticAvatar: Record<`${AvatarPrefix}-${string}` | AvatarPrefix, string> = {
  // config
  'avatar-default-variant': 'avatar-solid',

  // base
  'avatar': 'relative font-medium leading-none h-2.5em w-2.5em inline-flex items-center justify-center rounded-full overflow-hidden',
  'avatar-fallback': '',

  'avatar-src': 'w-full h-full',
  'avatar-solid-white': 'avatar bg-base text-base ring-1 ring-base',
  'avatar-solid-black': 'avatar bg-inverted text-inverted',
}

export const dynamicAvatar: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^avatar-solid(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-600 dark:bg-${c}-500 text-inverted`],
  [/^avatar-soft(-(\S+))?$/, ([, , c = 'primary']) => `text-brand bg-${c}-50 n-${c}-700 dark:n-${c}-400 ring-1 ring-${c}-700/10 ring-inset dark:bg-${c}-400/10 dark:ring-${c}-400/30`],
  [/^avatar-outline(-(\S+))?$/, ([, , c = 'primary']) => `bg-transparent n-${c}-700 dark:n-${c}-400 ring-1 ring-${c}-700/10 dark:ring-${c}-400/30`],
]

export const avatar = [
  ...dynamicAvatar,
  staticAvatar,
]
