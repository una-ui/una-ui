/* TODO nv props should be prefixed */
export interface NFormGroupProps {
  label?: string
  hint?: string
  name?: string
  required?: boolean
  counterCurrent?: number
  counterMax?: number
  description?: string
  status?: 'info' | 'success' | 'warning' | 'error'
  message?: string

  nv?: {
    formGroupWrapper?: string
    formGroupTopWrapper?: string
    formGroupTopWrapperInner?: string

    formGroupDescriptionWrapper?: string

    formGroupBottomWrapper?: string

    formGroupLabelWrapper?: string
    formGroupLabelBase?: string
    formGroupLabelRequired?: string

    formGroupHintBase?: string

    formGroupMessageWrapper?: string
    formGroupMessageBase?: string
  }
}
