export interface NAlertProps {
  alert?: string
  icon?: string | boolean
  closable?: boolean
  title?: string
  description?: string
  nv: {
    // base
    alertTitle?: string
    alertDescription?: string
    alertIconBase?: string
    alertClose?: string
    alertCloseIconBase?: string

    // wrappers
    alertInnerWrapper?: string
    alertContentWrapper?: string
    alertIconWrapper?: string
    alertCloseWrapper?: string
    alertCloseInnerWrapper?: string

    // icons
    alertInfoIcon?: string
    alertErrorIcon?: string
    alertSuccessIcon?: string
    alertWarningIcon?: string
    alertCloseIcon?: string
  }
}
