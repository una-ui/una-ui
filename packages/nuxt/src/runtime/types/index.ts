export * from './accordion'
export * from './alert'
export * from './avatar'
export * from './avatar-group'
export * from './badge'
export * from './breadcrumb'
export * from './button'
export * from './card'
export * from './checkbox'
export * from './collapsible'
export * from './dialog'
export * from './dropdown-menu'
export * from './form-group'
export * from './icon'
export * from './indicator'
export * from './input'
export * from './kbd'
export * from './label'
export * from './link'
export * from './nav-link'
export * from './nav-link-group'
export * from './pagination'
export * from './pin-input'
export * from './popover'
export * from './progress'
export * from './radio'
export * from './select'
export * from './separator'
export * from './skeleton'
export * from './slider'
export * from './switch'
export * from './table'
export * from './tabs'
export * from './toggle'
export * from './tooltip'

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
  radius: number
}
