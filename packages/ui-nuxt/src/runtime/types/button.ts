export interface NButtonProps {
  type?: 'button' | 'submit' | 'reset'
  loadingPlacement?: 'leading' | 'trailing' | 'label'

  icon?: boolean
  disabled?: boolean
  loading?: boolean

  to?: string
  label?: string
  btn?: string
  leading?: string
  trailing?: string

  nv?: {
    btnLabelBase?: string
    btnLeadingBase?: string
    btnTrailingBase?: string
    btnIconTextBase?: string
    btnLoadingBase?: string

    btnLoadingIcon?: string
  }
}
