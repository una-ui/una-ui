export interface NInputProps {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  leading?: string
  trailing?: string
  status?: 'info' | 'success' | 'warning' | 'error'
  loading?: boolean
  reverse?: boolean
  input?: string

  nv?: {
    inputWrapper?: string
    inputLeadingWrapper?: string
    inputTrailingWrapper?: string

    inputWarningIcon?: string
    inputErrorIcon?: string
    inputSuccessIcon?: string
    inputInfoIcon?: string
    inputLoadingIcon?: string

    inputLoadingBase?: string
  }
}
