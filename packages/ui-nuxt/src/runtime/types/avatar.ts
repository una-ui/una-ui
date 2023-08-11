export interface NAvatarProps {
  avatar?: string
  icon?: string
  label?: string
  src?: string
  alt?: string
  fallback?: string

  delay?: number

  skeleton?: boolean

  nv?: {
    avatarLabel?: string
  }
}
