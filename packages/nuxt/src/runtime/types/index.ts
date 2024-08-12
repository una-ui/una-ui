export * from './input'
export * from './button'
export * from './form-group'
export * from './icon'
export * from './accordion'
export * from './switch'
export * from './alert'
export * from './badge'
export * from './avatar'
export * from './avatar-group'
export * from './indicator'
export * from './kbd'
export * from './nav-link'
export * from './nav-link-group'
export * from './link'
export * from './radio'
export * from './checkbox'
export * from './slider'
export * from './progress'
export * from './skeleton'
export * from './select'
export * from './separator'
export * from './card'

export interface Colors {
  [key: string]: string
}

export interface ColorPalette {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

export interface UnaSettings {
  primaryColors: Colors
  grayColors: Colors
  primary: string
  gray: string
  fontSize: number
}
