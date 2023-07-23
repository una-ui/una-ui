export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  to?: string
  icon?: boolean
  label?: string
  btn?: string
  leading?: string
  trailing?: string

  nv?: {
    buttonLabelBase?: string
    buttonLeadingBase?: string
    buttonTrailingBase?: string
  }
}
