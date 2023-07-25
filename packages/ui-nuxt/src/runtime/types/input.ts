export interface NInputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  status?: 'info' | 'success' | 'warning' | 'error'

  loading?: boolean
  reverse?: boolean

  modelValue?: string | number
  leading?: string
  trailing?: string
  input?: string
  id?: string

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
    inputTrailingBase?: string
    inputLeadingBase?: string
  }
}
