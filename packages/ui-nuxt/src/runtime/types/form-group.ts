export interface NFormGroupProps {
  status?: 'info' | 'success' | 'warning' | 'error'

  required?: boolean

  name?: string
  label?: string
  hint?: string
  description?: string
  message?: string

  nv?: {
    formGroupTopWrapper?: string
    formGroupTopWrapperInner?: string
    formGroupBottomWrapper?: string

    formGroupLabelWrapper?: string
    formGroupLabelRequired?: string
    formGroupLabelBase?: string

    formGroupDescriptionBase?: string
    formGroupHintBase?: string
    formGroupMessageBase?: string
  }
}
