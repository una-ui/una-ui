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
    // base
    avatar?: string
    avatarLabel?: string
    avatarSrc?: string
    avatarFallback?: string
    avatarIconBase?: string

    // icons
    avatarFallbackIcon?: string
  }
}
