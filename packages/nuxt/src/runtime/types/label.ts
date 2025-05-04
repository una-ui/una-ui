import type { LabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions {
  class?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
}

export interface NLabelProps extends BaseExtensions, LabelProps {
  label?: string
}
