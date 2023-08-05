export interface NAlertProps {
  type: 'success' | 'info' | 'warning' | 'error'
  closable: boolean
  showIcon: boolean
  center: boolean
  title: string
  description: string
  onClose: () => void
}
