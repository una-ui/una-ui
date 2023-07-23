export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  loadingPlacement?: 'leading' | 'trailing' | 'label'

  to?: string
  label?: string
  btn?: string
  leading?: string
  trailing?: string
  nv?: {
    btnLabelBase?: string
    btnLeadingBase?: string
    btnTrailingBase?: string
    btnLoadingBase?: string

    btnLoadingIcon?: string
  }

  icon?: boolean
  disabled?: boolean
  loading?: boolean
}
