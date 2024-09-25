import type { ToggleProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface BaseExtensionProps {
  square?: HTMLAttributes['class']
  class?: HTMLAttributes['class']
  rounded?: HTMLAttributes['class']
  size?: HTMLAttributes['class']
  variant?: HTMLAttributes['class']
}

export interface NToggleProps extends BaseExtensionProps, ToggleProps {

}
