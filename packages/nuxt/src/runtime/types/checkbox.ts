export interface NCheckboxProps {
  disabled?: boolean
  reverse?: boolean

  checkbox?: string
  modelValue?: boolean | null
  id?: string
  name?: string
  label?: string
  size?: string
  una?: {
    checkbox?: string
    checkboxWrapper?: string
    checkboxLabel?: string
    checkboxPeerFocus?: string
    checkboxIconBase?: string
    checkboxIcon?: string
  }
}
