export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  to?: string
  icon?: boolean
  label?: string
  btn?: string
  leading?: string
  trailing?: string
  circle?: boolean

  nv?: {
    buttonLeadingWrapper?: string
    buttonTrailingWrapper?: string
  }
}
