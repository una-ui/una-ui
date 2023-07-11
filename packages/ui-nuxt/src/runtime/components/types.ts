export interface InputProps {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  leading?: string
  trailing?: string
  status?: 'info' | 'success' | 'warning' | 'error'
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

    inputBase?: string
    inputLoadingBase?: string
  }
}

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  to?: string
  icon?: string
  label?: string
}

/* TODO nv props should be prefixed */
export interface FormGroupProps {
  label: string
  hint?: string
  name?: string
  required?: boolean
  error?: string
  counterCurrent?: number
  counterMax?: number
  description?: string
  status?: 'info' | 'success' | 'warning' | 'error'
  message?: string

  nv?: {
    wrapper?: string

    topWrapper?: string
    topWrapperInner?: string

    descriptionWrapper?: string

    bottomWrapper?: string

    labelWrapper?: string
    labelBase?: string
    labelRequired?: string

    hintBase?: string

    messageWrapper?: string
    messageBase?: string
  }
}
