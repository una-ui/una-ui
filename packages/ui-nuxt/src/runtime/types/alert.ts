export interface NAlertProps {
  alert?: string
  icon?: string | boolean
  closable?: boolean
  title?: string
  description?: string
  onClose?: () => void
}
