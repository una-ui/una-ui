import type { LabelProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface BaseExtensions {
  class?: HTMLAttributes['class']
}

export interface NLabelProps extends BaseExtensions, LabelProps {
  label?: string
}
