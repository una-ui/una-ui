type AvatarPrefix = 'avatar'

export const staticAvatar: Record<`${AvatarPrefix}-${string}` | AvatarPrefix, string> = {
  // base
  'avatar': 'inline-flex items-center justify-center overflow-hidden',
  'avatar-base': 'flex-none',
}

export const dynamicAvatar: [RegExp, (params: RegExpExecArray) => string][] = []

export const avatar = [
  ...dynamicAvatar,
  staticAvatar,
]
