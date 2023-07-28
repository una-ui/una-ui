import type { NButtonProps } from './button'

export interface NAccordionProps {
  accordion?: string
  openIcon?: string
  closeIcon?: string

  multiple?: boolean
  collapsible?: boolean

  items: (NButtonProps & {
    content: string

    open?: boolean
    icon?: string
    defaultOpen?: boolean
    closeOthers?: boolean
  })[]

  nv?: {
    accordionWrapper?: string
    accordionItem?: string
    accordionButton?: string
    accordionPanel?: string
  }
}
