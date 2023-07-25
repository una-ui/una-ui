export interface NFormGroupProps {
  label?: string
  hint?: string
  name?: string
  required?: boolean
  counter?: {
    value: number
    persistent?: boolean
    max?: number
  }
  description?: string
  status?: 'info' | 'success' | 'warning' | 'error'
  message?: string

  nv?: {
    formGroupTopWrapper?: string
    formGroupTopWrapperInner?: string

    formGroupBottomWrapper?: string

    formGroupDescriptionBase?: string

    formGroupLabelWrapper?: string
    formGroupLabelBase?: string
    formGroupLabelRequired?: string

    formGroupHintBase?: string

    formGroupMessageWrapper?: string
    formGroupMessageBase?: string

    formGroupCounterWrapper?: string
  }
}
