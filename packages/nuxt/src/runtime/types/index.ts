export * from './accordion'
export * from './alert'
export * from './alert-dialog'
export * from './aspect-ratio'
export * from './avatar'
export * from './avatar-group'
export * from './badge'
export * from './breadcrumb'
export * from './button'
export * from './card'
export * from './checkbox'
export * from './collapsible'
export * from './combobox'
export * from './dialog'
export * from './drawer'
export * from './dropdown-menu'
export * from './form'
export * from './form-group'
export * from './hover-card'
export * from './icon'
export * from './indicator'
export * from './input'
export * from './kbd'
export * from './label'
export * from './link'
export * from './navigation-menu'
export * from './pagination'
export * from './popover'
export * from './progress'
export * from './radio-group'
export * from './resizable'
export * from './scroll-area'
export * from './select'
export * from './separator'
export * from './sheet'
export * from './sidebar'
export * from './skeleton'
export * from './slider'
export * from './switch'
export * from './table'
export * from './tabs'
export * from './toast'
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

export type OutsideEvent<T extends Event> = CustomEvent<{
  originalEvent: T
}>

export type PointerDownOutsideEvent = OutsideEvent<PointerEvent>

export type FocusOutsideEvent = OutsideEvent<FocusEvent>
