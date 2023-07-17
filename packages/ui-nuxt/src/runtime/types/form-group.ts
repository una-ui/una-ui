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
