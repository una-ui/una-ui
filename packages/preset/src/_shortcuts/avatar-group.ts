type AvatarGroupPrefix = 'avatar-group'

export const staticAvatarGroup: Record<`${AvatarGroupPrefix}-${string}` | AvatarGroupPrefix, string> = {
  'avatar-group': 'flex flex-row-reverse justify-end',
  'avatar-group-child': 'ring-2 ring-$c-background',
  'avatar-group-margin': '-me-1.5 first:me-0',
  'avatar-group-label': 'text-.9em',
}

export const dynamicAvatarGroup: [RegExp, (params: RegExpExecArray) => string][] = [
]

export const avatarGroup = [
  ...dynamicAvatarGroup,
  staticAvatarGroup,
]
