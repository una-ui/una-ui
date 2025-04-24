type AvatarGroupPrefix = 'avatar-group'

export const staticAvatarGroup: Record<`${AvatarGroupPrefix}-${string}` | AvatarGroupPrefix, string> = {
  'avatar-group': 'flex flex-row-reverse justify-end',
  'avatar-group-item': 'ring-0.125em ring-background -me-0.375em first:me-0',
  'avatar-group-count': 'text-0.875em',
}

export const dynamicAvatarGroup: [RegExp, (params: RegExpExecArray) => string][] = [
]

export const avatarGroup = [
  ...dynamicAvatarGroup,
  staticAvatarGroup,
]
