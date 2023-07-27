export interface NAccordionProps {
  multiple?: boolean
  collapsible?: boolean

  openIcon?: string
  closeIcon?: string

  items: {
    label: string
    content: string

    open?: boolean
    disabled?: boolean
    icon?: string
  }[]

  nv?: {
    accordionWrapper?: string
    accordionItem?: string
    accordionButton?: string
    accordionPanel?: string
  }
}
