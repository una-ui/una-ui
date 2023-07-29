import type { NButtonProps } from './button'

export interface NAccordionProps {
  accordion?: string
  leading?: string
  trailingOpen?: string
  trailingClose?: string

  multiple?: boolean
  collapsible?: boolean
  reverse?: boolean
  variantMode?: boolean

  items: (NButtonProps & {
    content: string
    trailingOpen?: string
    trailingClose?: string

    open?: boolean
    reverse?: boolean
    defaultOpen?: boolean
    closeOthers?: boolean
  })[]

  nv?: {
    accordionWrapper?: string
    accordionItem?: string
    accordionButton?: string
    accordionPanel?: string
    accordionButtonLeading?: string

    accordionTrailingOpen?: string
    accordionTrailingClose?: string
  }
}
