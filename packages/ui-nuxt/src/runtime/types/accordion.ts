export interface NAccordionProps {
  accordion?: string
  openIcon?: string
  closeIcon?: string

  multiple?: boolean
  collapsible?: boolean

  items: {
    label: string
    content: string

    open?: boolean
    disabled?: boolean
    icon?: string
    defaultOpen?: boolean
  }[]

  nv?: {
    accordionWrapper?: string
    accordionItem?: string
    accordionButton?: string
    accordionPanel?: string
  }
}
