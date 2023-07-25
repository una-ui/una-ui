export interface NFormGroupProps {
  status?: 'info' | 'success' | 'warning' | 'error'

  required?: boolean

  name?: string
  label?: string
  hint?: string
  description?: string
  message?: string

  counter?: {
    value: number
    persistent?: boolean
    max?: number
  }

  nv?: {
    formGroupTopWrapper?: string
    formGroupTopWrapperInner?: string
    formGroupBottomWrapper?: string
    formGroupCounterWrapper?: string
    formGroupMessageWrapper?: string

    formGroupLabelWrapper?: string
    formGroupLabelRequired?: string
    formGroupLabelBase?: string

    formGroupDescriptionBase?: string
    formGroupHintBase?: string
    formGroupMessageBase?: string
  }
}
