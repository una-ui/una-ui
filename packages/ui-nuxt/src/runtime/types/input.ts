import type { NFormGroupProps } from './index'

export interface NInputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  status?: Pick<NFormGroupProps, 'status'>
  modelValue?: string | number
  leading?: string
  trailing?: string
  input?: string
  id?: string

  loading?: boolean
  reverse?: boolean

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
